import type { ComparisonTemplate, LabelSpec, SlotKey } from "@/lib/comparison-templates";

type RenderLabels = Record<SlotKey, string>;

type RenderOptions = {
  labels: RenderLabels;
  showLabels: boolean;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function svgWrap(template: ComparisonTemplate, body: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${template.width}" height="${template.height}" viewBox="0 0 ${template.width} ${template.height}">${body}</svg>`;
}

function rect({ x, y, width, height }: { x: number; y: number; width: number; height: number }, attrs: string) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" ${attrs}/>`;
}

function drawText(label: LabelSpec, text: string) {
  const anchor = label.anchor ?? "middle";
  const weight = label.fontWeight ?? 600;
  const style = label.fontStyle ?? "italic";
  const transform = label.rotate ? ` transform="rotate(${label.rotate} ${label.x} ${label.y})"` : "";
  const box = label.box
    ? rect(label.box, `fill="${label.box.fill}" stroke="${label.box.stroke ?? "transparent"}" stroke-width="2" rx="${label.box.radius ?? 0}"`)
    : "";

  return `${box}<text x="${label.x}" y="${label.y}" text-anchor="${anchor}" dominant-baseline="middle" fill="${label.fill}" font-family="${escapeXml(label.fontFamily)}" font-size="${label.fontSize}" font-weight="${weight}" font-style="${style}" letter-spacing="0"${transform}>${escapeXml(text)}</text>`;
}

function renderFrameBase(template: ComparisonTemplate) {
  return `<rect width="${template.width}" height="${template.height}" fill="${template.theme.background}"/>`;
}

function renderFrameOverlay(template: ComparisonTemplate, options: RenderOptions) {
  const landscape = template.ratio === "16:9";
  const insetX = landscape ? 78 : 72;
  const insetY = landscape ? 78 : 72;
  const insetWidth = template.width - insetX * 2;
  const insetHeight = template.height - insetY * 2;
  const divider = landscape
    ? `<path d="M ${template.width / 2} ${insetY} L ${template.width / 2} ${template.height - insetY}" stroke="${template.theme.frameStroke}" stroke-width="${template.assetId === "editorial-tag" ? 6 : 4}" stroke-linecap="round"/>`
    : `<path d="M ${insetX} ${template.height / 2} L ${template.width - insetX} ${template.height / 2}" stroke="${template.theme.frameStroke}" stroke-width="${template.assetId === "editorial-tag" ? 6 : 4}" stroke-linecap="round"/>`;

  const accentLines = template.assetId === "luxury-caption" && landscape
    ? `<path d="M 350 1026 H 610" stroke="${template.theme.muted}" stroke-width="2"/><path d="M 1310 1026 H 1570" stroke="${template.theme.muted}" stroke-width="2"/>`
    : "";

  const labels = options.showLabels
    ? `${drawText(template.labels.before, options.labels.before)}${drawText(template.labels.after, options.labels.after)}`
    : "";

  return `
    ${rect({ x: insetX, y: insetY, width: insetWidth, height: insetHeight }, `fill="none" stroke="${template.theme.frameStroke}" stroke-width="${template.assetId === "editorial-tag" ? 4 : 3}"`)}
    ${divider}
    ${accentLines}
    ${labels}
  `;
}

export function renderTemplateBaseSvg(template: ComparisonTemplate) {
  return svgWrap(template, renderFrameBase(template));
}

export function renderTemplateOverlaySvg(template: ComparisonTemplate, options: RenderOptions) {
  return svgWrap(template, renderFrameOverlay(template, options));
}

export function renderTemplatePreviewSvg(template: ComparisonTemplate, options: RenderOptions) {
  const before = rect(
    template.slots.before,
    `fill="#b9c2c9" stroke="${template.theme.frameStroke}" stroke-width="2"`,
  );
  const after = rect(
    template.slots.after,
    `fill="#9eabb5" stroke="${template.theme.frameStroke}" stroke-width="2"`,
  );

  return svgWrap(
    template,
    `${renderFrameBase(template)}${before}${after}${renderFrameOverlay(template, options)}`,
  );
}

export function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function renderLogoBoxSvg(template: ComparisonTemplate) {
  const boxWidth = Math.min(230, Math.round(template.width * 0.26));
  const boxHeight = Math.round(boxWidth * 0.28);
  const x = template.width - boxWidth - Math.round(template.width * 0.04);
  const y = Math.round(template.height * 0.04);

  return {
    x,
    y,
    width: boxWidth,
    height: boxHeight,
    svg: svgWrap(
      template,
      `${rect({ x, y, width: boxWidth, height: boxHeight }, `fill="rgba(255,255,255,0.82)" stroke="rgba(15,23,42,0.12)" stroke-width="2" rx="12"`)}`
    ),
  };
}
