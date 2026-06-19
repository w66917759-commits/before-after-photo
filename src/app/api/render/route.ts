import sharp from "sharp";
import {
  clampCrop,
  defaultCrop,
  getComparisonTemplate,
  type CropState,
  type SlotKey,
  type TemplateSlot,
} from "@/lib/comparison-templates";
import {
  renderLogoBoxSvg,
  renderTemplateBaseSvg,
  renderTemplateOverlaySvg,
} from "@/lib/template-svg";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type UploadFile = File & {
  arrayBuffer: () => Promise<ArrayBuffer>;
};

function isUploadFile(value: FormDataEntryValue | null): value is UploadFile {
  return Boolean(
    value &&
      typeof value === "object" &&
      "arrayBuffer" in value &&
      "type" in value &&
      "size" in value,
  );
}

async function readImage(formData: FormData, key: string): Promise<Buffer>;
async function readImage(formData: FormData, key: string, required: false): Promise<Buffer | null>;
async function readImage(formData: FormData, key: string, required = true): Promise<Buffer | null> {
  const value = formData.get(key);
  if (!isUploadFile(value) || value.size === 0) {
    if (required) throw new Error(`Missing ${key} image.`);
    return null;
  }

  if (!value.type.startsWith("image/")) {
    throw new Error(`${key} must be an image file.`);
  }

  if (value.size > 12 * 1024 * 1024) {
    throw new Error(`${key} must be under 12MB.`);
  }

  return Buffer.from(await value.arrayBuffer());
}

function readBoolean(formData: FormData, key: string, fallback: boolean) {
  const value = formData.get(key);
  if (typeof value !== "string") return fallback;
  return value === "true";
}

function readLabel(formData: FormData, key: string, fallback: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return fallback;
  return value.trim().slice(0, 32) || fallback;
}

function readCrops(formData: FormData): Record<SlotKey, CropState> {
  const fallback = { before: defaultCrop, after: defaultCrop };
  const value = formData.get("crops");
  if (typeof value !== "string") return fallback;

  try {
    const parsed = JSON.parse(value) as Partial<Record<SlotKey, CropState>>;
    return {
      before: clampCrop(parsed.before ?? defaultCrop),
      after: clampCrop(parsed.after ?? defaultCrop),
    };
  } catch {
    return fallback;
  }
}

async function renderSlotImage(buffer: Buffer, slot: TemplateSlot, cropState: CropState) {
  const crop = clampCrop(cropState);
  const source = sharp(buffer).rotate();
  const metadata = await source.metadata();
  const imageWidth = metadata.width ?? 0;
  const imageHeight = metadata.height ?? 0;

  if (!imageWidth || !imageHeight) {
    throw new Error("Unable to read uploaded image dimensions.");
  }

  const baseScale = Math.max(slot.width / imageWidth, slot.height / imageHeight);
  const effectiveScale = baseScale * crop.zoom;
  const cropWidth = Math.min(imageWidth, Math.max(1, Math.round(slot.width / effectiveScale)));
  const cropHeight = Math.min(imageHeight, Math.max(1, Math.round(slot.height / effectiveScale)));
  const maxLeft = Math.max(0, imageWidth - cropWidth);
  const maxTop = Math.max(0, imageHeight - cropHeight);
  const left = Math.round(((crop.x + 1) / 2) * maxLeft);
  const top = Math.round(((crop.y + 1) / 2) * maxTop);

  return source
    .extract({
      left: Math.min(maxLeft, Math.max(0, left)),
      top: Math.min(maxTop, Math.max(0, top)),
      width: cropWidth,
      height: cropHeight,
    })
    .resize(slot.width, slot.height, { fit: "fill" })
    .png()
    .toBuffer();
}

async function renderLogo(buffer: Buffer, width: number, height: number) {
  return sharp(buffer)
    .rotate()
    .resize(width, height, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const templateId = String(formData.get("templateId") ?? "");
    const template = getComparisonTemplate(templateId);
    const beforeBuffer = await readImage(formData, "before");
    const afterBuffer = await readImage(formData, "after");
    const logoBuffer = await readImage(formData, "logo", false);
    const showLabels = readBoolean(formData, "showLabels", true);
    const showLogo = readBoolean(formData, "showLogo", false);
    const labels = {
      before: readLabel(formData, "beforeLabel", "Before"),
      after: readLabel(formData, "afterLabel", "After"),
    };
    const crops = readCrops(formData);

    const beforeSlot = await renderSlotImage(beforeBuffer, template.slots.before, crops.before);
    const afterSlot = await renderSlotImage(afterBuffer, template.slots.after, crops.after);

    const composites: sharp.OverlayOptions[] = [
      { input: Buffer.from(renderTemplateBaseSvg(template)), left: 0, top: 0 },
      { input: beforeSlot, left: template.slots.before.x, top: template.slots.before.y },
      { input: afterSlot, left: template.slots.after.x, top: template.slots.after.y },
      {
        input: Buffer.from(renderTemplateOverlaySvg(template, { labels, showLabels })),
        left: 0,
        top: 0,
      },
    ];

    if (showLogo && logoBuffer) {
      const logoBox = renderLogoBoxSvg(template);
      const logoPadding = Math.max(12, Math.round(logoBox.width * 0.08));
      const logo = await renderLogo(
        logoBuffer,
        logoBox.width - logoPadding * 2,
        logoBox.height - logoPadding,
      );
      composites.push({ input: Buffer.from(logoBox.svg), left: 0, top: 0 });
      composites.push({
        input: logo,
        left: logoBox.x + logoPadding,
        top: logoBox.y + Math.round(logoPadding / 2),
      });
    }

    const output = await sharp({
      create: {
        width: template.width,
        height: template.height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      },
    })
      .composite(composites)
      .png()
      .toBuffer();

    return new Response(new Uint8Array(output), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
        "Content-Disposition": `inline; filename="${template.id}.png"`,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Render failed.";
    return Response.json({ error: message }, { status: 400 });
  }
}
