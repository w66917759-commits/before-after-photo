import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, "content/seo-pages.json");
const AI_SOURCES_DIR = path.join(ROOT, "public/seo-assets/ai-sources");
const SOURCES_DIR = path.join(ROOT, "public/seo-assets/sources");
const COMPOSED_DIR = path.join(ROOT, "public/seo-assets/composed");
const CREDITS_PATH = path.join(ROOT, "public/seo-assets/credits.json");
const USER_AGENT = "BeforeAfterPhotoTool/0.2 (curated asset generator)";

const OUTPUT = { width: 1600, height: 1000 };
const CARD = { x: 80, y: 116, width: 1440, height: 740, radius: 42 };
const MEDIA = { x: 160, y: 302, width: 1280, height: 560, radius: 30 };

const categoryStyles = {
  "medical-clean": {
    accent: "#2f7f9f",
    accent2: "#7fc7d9",
    bg: "#f4fbfd",
    soft: "#e6f4f7",
    label: "Clinical Reference",
  },
  "beauty-soft": {
    accent: "#b75d80",
    accent2: "#f0a3b6",
    bg: "#fff7fa",
    soft: "#fde9ef",
    label: "Beauty Reference",
  },
  "dental-white": {
    accent: "#1f8f87",
    accent2: "#8bd9d4",
    bg: "#f6fffe",
    soft: "#e6f7f5",
    label: "Dental Reference",
  },
  "document-consent": {
    accent: "#52616f",
    accent2: "#9aa8b5",
    bg: "#f7f8fa",
    soft: "#edf0f3",
    label: "Consent Reference",
  },
  "neutral-frame": {
    accent: "#455a64",
    accent2: "#9fb1bc",
    bg: "#f8fafc",
    soft: "#edf2f7",
    label: "Comparison Reference",
  },
  "fitness-neutral": {
    accent: "#2d8b57",
    accent2: "#92d6aa",
    bg: "#f7fcf8",
    soft: "#e8f6ed",
    label: "Fitness Reference",
  },
};

const curatedSourcesBySlug = {
  "bleph-before-after-photos": {
    title: "File:East Asian blepharoplasty before after.jpg",
    sourceKind: "real-before-after",
    note: "Licensed before/after blepharoplasty source found via Google and Commons.",
  },
  "eyebrow-microblading-before-and-after-photos": {
    title: "File:Microblading Melbourne Box Hill.jpg",
    sourceKind: "topical-source",
    note: "Licensed microblading source. No safe before/after microblading pair was used.",
  },
  "before-and-after-acne-treatment-photos": {
    title: "File:Scar revision.jpg",
    sourceKind: "real-before-after",
    note: "Licensed before/after acne scar revision source found via Google and Commons.",
  },
  "blepharoplasty-before-after-photos": {
    title: "File:Blepharoplasty zholtikov.jpg",
    sourceKind: "real-before-after",
    note: "Licensed blepharoplasty comparison source found via Google and Commons.",
  },
  "before-and-after-photos-of-teeth-whitening": {
    title: "File:Man demonstrating the results of teeth-whitening.jpg",
    sourceKind: "topical-source",
    note: "Licensed tooth-whitening source. Safe before/after whitening pairs were not available under a clear reusable license.",
  },
  "blepharoplasty-before-and-after-photos": {
    title: "File:East Asian blepharoplasty before after.jpg",
    sourceKind: "real-before-after",
    note: "Licensed before/after blepharoplasty source found via Google and Commons.",
  },
  "before-and-after-photos-of-lip-augmentation": {
    title: "File:Lip Lift Before & After.JPG",
    sourceKind: "real-before-after",
    note: "Licensed lip procedure before/after source found via Google and Commons.",
  },
  "braces-photos-before-and-after": {
    title: "File:Before and After Photos following Orthodontic Treatment - Teeth Braces.jpg",
    sourceKind: "real-before-after",
    note: "Licensed orthodontic before/after source found via Google and Commons.",
  },
  "before-and-after-photos-of-braces": {
    title: "File:Before and After Photos following Orthodontic Treatment - Teeth Braces.jpg",
    sourceKind: "real-before-after",
    note: "Licensed orthodontic before/after source found via Google and Commons.",
  },
  "before-and-after-photos-of-eyelash-extensions": {
    title: "File:Eyelash Extension Picture.jpg",
    sourceKind: "topical-source",
    note: "Licensed eyelash-extension source. No fake before/after alteration is applied.",
  },
  "dental-braces-before-and-after-photos": {
    title: "File:Before and After Photos following Orthodontic Treatment - Teeth Braces.jpg",
    sourceKind: "real-before-after",
    note: "Licensed orthodontic before/after source found via Google and Commons.",
  },
  "dental-veneers-before-after-photos": {
    title: "File:Faccette estetiche confronto prima e dopo.jpg",
    sourceKind: "real-before-after",
    note: "Licensed dental veneer before/after source found via Google and Commons.",
  },
  "eyelid-surgery-before-and-after-photos": {
    title: "File:Blepharoplasty zholtikov.jpg",
    sourceKind: "real-before-after",
    note: "Licensed eyelid surgery reference source found via Google and Commons.",
  },
  "lip-augmentation-before-and-after-photos": {
    title: "File:Corner Lip Lift Before & After.JPG",
    sourceKind: "real-before-after",
    note: "Licensed lip procedure before/after source found via Google and Commons.",
  },
  "before-and-after-photo-consent-form-medical-spa-requirements": {
    title: "File:CDC Informed Consent form 1977.png",
    generated: "consent-form",
    sourceKind: "document-source",
    note: "Local consent-form illustration generated after using Google to identify a public-domain CDC informed-consent reference.",
  },
  "before-after-invisalign-photos": {
    title: "File:Invisalign aligner.jpg",
    sourceKind: "topical-source",
    note: "Licensed clear aligner source. No fake before/after alteration is applied.",
  },
  "before-and-after-photos": {
    title: "File:Before & After Hair Dye.jpg",
    sourceKind: "real-before-after",
    note: "Licensed general before/after source found via Google and Commons.",
  },
  "before-and-after-weight-loss-photos": {
    title: "File:Matthew Riggs PHAT2FIT.jpg",
    sourceKind: "real-before-after",
    note: "Licensed weight-loss before/after source found via Google and Commons.",
  },
  "laser-tattoo-removal-photos-before-after": {
    title: "File:Laser Tatt0o Removal.jpg",
    sourceKind: "topical-source",
    note: "Licensed laser tattoo removal source. No safe before/after tattoo-removal pair was used.",
  },
};

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function titleCase(value) {
  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function displayKeyword(keyword) {
  const cleaned = keyword
    .replace(/\bbefore\b/gi, "Before")
    .replace(/\bafter\b/gi, "After")
    .replace(/\bphotos?\b/gi, "Photos")
    .replace(/\band\b/gi, "and");
  return titleCase(cleaned).replaceAll(" And ", " and ");
}

function fileExtensionFromMime(mime, url) {
  if (mime?.includes("png")) return "png";
  if (mime?.includes("webp")) return "webp";
  if (mime?.includes("jpeg") || mime?.includes("jpg")) return "jpg";
  const ext = path.extname(new URL(url).pathname).replace(".", "").toLowerCase();
  if (["jpg", "jpeg", "png", "webp"].includes(ext)) return ext === "jpeg" ? "jpg" : ext;
  return "jpg";
}

async function fetchBuffer(url) {
  const response = await fetchWithRetry(url);
  return Buffer.from(await response.arrayBuffer());
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, attempts = 8) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const response = await fetch(url, {
      ...options,
      headers: {
        "user-agent": USER_AGENT,
        ...(options.headers || {}),
      },
    });
    if (response.ok) return response;
    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === attempts) {
      throw new Error(`GET ${url} failed with ${response.status}`);
    }
    await sleep(2500 * attempt);
  }
  throw new Error(`GET ${url} failed`);
}

async function queryCommons(title) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("format", "json");
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url|mime|size|extmetadata");
  api.searchParams.set("iiurlwidth", String(MEDIA.width));
  api.searchParams.set("titles", title);

  const response = await fetchWithRetry(api);
  const data = await response.json();
  const page = Object.values(data.query?.pages || {})[0];
  const imageInfo = page?.imageinfo?.[0];
  if (!imageInfo?.url) throw new Error(`No Commons image URL found for ${title}`);
  return { page, imageInfo };
}

function metadataValue(extmetadata, key) {
  return stripHtml(extmetadata?.[key]?.value);
}

async function sourceImage(input, width, height, radius, style) {
  const resized = await sharp(input)
    .rotate()
    .resize(width - 48, height - 48, {
      fit: "inside",
      withoutEnlargement: false,
      background: "#ffffff",
    })
    .webp({ quality: 92 })
    .toBuffer();
  const metadata = await sharp(resized).metadata();
  const left = Math.round((width - (metadata.width || width)) / 2);
  const top = Math.round((height - (metadata.height || height)) / 2);
  const image = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: style.soft,
    },
  })
    .composite([{ input: resized, left, top }])
    .webp({ quality: 92 })
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/>
    </svg>`,
  );
  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .webp({ quality: 92 })
    .toBuffer();
}

function frameSvg(item, style, sourceKind) {
  const title = displayKeyword(item.keyword);
  const sourceLabel =
    sourceKind === "real-before-after"
      ? "Licensed before/after source"
      : sourceKind === "document-source"
        ? "Licensed document source"
        : sourceKind === "ai-generated-mockup"
          ? "AI-generated SEO mockup"
          : "Licensed topical source";

  return Buffer.from(`
    <svg width="${OUTPUT.width}" height="${OUTPUT.height}" viewBox="0 0 ${OUTPUT.width} ${OUTPUT.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="22" stdDeviation="28" flood-color="#1b2a33" flood-opacity="0.14"/>
        </filter>
      </defs>
      <rect width="1600" height="1000" fill="${style.bg}"/>
      <rect x="${CARD.x}" y="${CARD.y}" width="${CARD.width}" height="${CARD.height}" rx="${CARD.radius}" fill="#ffffff" filter="url(#shadow)"/>
      <rect x="${CARD.x + 20}" y="${CARD.y + 20}" width="${CARD.width - 40}" height="${CARD.height - 40}" rx="${CARD.radius - 14}" fill="none" stroke="${style.soft}" stroke-width="2"/>
      <text x="116" y="78" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="${style.accent}">Before and After Photo Maker</text>
      <text x="1484" y="78" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#6b7780">${escapeXml(style.label)}</text>
      <text x="800" y="214" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="800" fill="#1f2933">${escapeXml(title)}</text>
      <text x="800" y="254" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" fill="#6b7280">Reference image from credited source - use your own authorized photos</text>
      <rect x="${MEDIA.x}" y="${MEDIA.y}" width="${MEDIA.width}" height="${MEDIA.height}" rx="${MEDIA.radius}" fill="${style.soft}"/>
      <rect x="${MEDIA.x}" y="${MEDIA.y}" width="${MEDIA.width}" height="${MEDIA.height}" rx="${MEDIA.radius}" fill="none" stroke="#ffffff" stroke-width="8"/>
      <rect x="160" y="272" width="254" height="44" rx="22" fill="#ffffff" opacity="0.96"/>
      <text x="287" y="301" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" fill="${style.accent}">${escapeXml(sourceLabel.toUpperCase())}</text>
      <text x="118" y="924" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#4b5563">Curated asset for SEO preview pages</text>
      <text x="1484" y="924" text-anchor="end" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="${style.accent}">Source credited on page</text>
    </svg>
  `);
}

function generatedConsentSourceSvg() {
  return Buffer.from(`
    <svg width="1200" height="820" viewBox="0 0 1200 820" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="820" fill="#f6f8fb"/>
      <rect x="220" y="70" width="760" height="680" rx="18" fill="#ffffff" stroke="#d5dbe3" stroke-width="4"/>
      <rect x="220" y="70" width="760" height="92" rx="18" fill="#eef2f7"/>
      <text x="600" y="128" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#334155">PHOTO CONSENT FORM</text>
      <text x="286" y="218" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#475569">Client authorization</text>
      <line x1="286" y1="260" x2="914" y2="260" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="286" y1="322" x2="914" y2="322" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="286" y1="384" x2="914" y2="384" stroke="#cbd5e1" stroke-width="3"/>
      <rect x="286" y="438" width="32" height="32" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
      <text x="338" y="463" font-family="Inter, Arial, sans-serif" font-size="20" fill="#475569">Use photos for private records</text>
      <rect x="286" y="498" width="32" height="32" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
      <text x="338" y="523" font-family="Inter, Arial, sans-serif" font-size="20" fill="#475569">Use anonymized photos for portfolio review</text>
      <rect x="286" y="558" width="32" height="32" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="3"/>
      <text x="338" y="583" font-family="Inter, Arial, sans-serif" font-size="20" fill="#475569">Client may revoke permission in writing</text>
      <text x="286" y="658" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#475569">Signature</text>
      <line x1="390" y1="656" x2="640" y2="656" stroke="#94a3b8" stroke-width="3"/>
      <text x="690" y="658" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700" fill="#475569">Date</text>
      <line x1="744" y1="656" x2="914" y2="656" stroke="#94a3b8" stroke-width="3"/>
    </svg>
  `);
}

async function composeAsset(item, sourceConfig, sourceBuffer, outputPath) {
  const style = categoryStyles[item.category] || categoryStyles["neutral-frame"];
  const source = await sourceImage(sourceBuffer, MEDIA.width, MEDIA.height, MEDIA.radius, style);

  await sharp({
    create: {
      width: OUTPUT.width,
      height: OUTPUT.height,
      channels: 4,
      background: "#ffffff",
    },
  })
    .composite([
      { input: frameSvg(item, style, sourceConfig.sourceKind), top: 0, left: 0 },
      { input: source, top: MEDIA.y, left: MEDIA.x },
    ])
    .webp({ quality: 88 })
    .toFile(outputPath);
}

async function ensureDirs() {
  await fs.mkdir(AI_SOURCES_DIR, { recursive: true });
  await fs.mkdir(SOURCES_DIR, { recursive: true });
  await fs.mkdir(COMPOSED_DIR, { recursive: true });
}

async function fileSha256(filePath) {
  const buffer = await fs.readFile(filePath);
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

async function readManifest() {
  const data = JSON.parse(await fs.readFile(MANIFEST_PATH, "utf8"));
  return data.pages;
}

async function findAiSource(slug) {
  for (const ext of ["png", "jpg", "jpeg", "webp"]) {
    const fileName = `${slug}-source.${ext}`;
    const filePath = path.join(AI_SOURCES_DIR, fileName);
    try {
      await fs.access(filePath);
      return {
        fileName,
        filePath,
        ext: ext === "jpeg" ? "jpg" : ext,
      };
    } catch {
      // Try the next extension.
    }
  }
  return null;
}

async function run() {
  await ensureDirs();
  const pages = await readManifest();
  const credits = {
    generated_at: new Date().toISOString(),
    image_source_policy:
      "Curated from Google-discovered, source-page-verified Wikimedia Commons assets with reusable licenses. Images are no longer generated by applying before/after exposure changes to a single source photo.",
    output_spec: {
      format: "webp",
      width: OUTPUT.width,
      height: OUTPUT.height,
      layout: "credited reference image in SEO preview frame",
      watermark: "Source credited on page",
    },
    assets: [],
  };

  for (const item of pages) {
    const sourceConfig = curatedSourcesBySlug[item.slug];
    if (!sourceConfig) throw new Error(`No curated source configured for ${item.slug}`);

    await sleep(1200);
    console.log(`Fetching source: ${item.slug}`);
    const aiSource = await findAiSource(item.slug);
    const generatedSource = sourceConfig.generated === "consent-form";
    const usesAiSource = Boolean(aiSource);
    const { imageInfo } = generatedSource
      ? {
          imageInfo: {
            url: "https://commons.wikimedia.org/wiki/File:CDC_Informed_Consent_form_1977.png",
            descriptionurl:
              "https://commons.wikimedia.org/wiki/File:CDC_Informed_Consent_form_1977.png",
            extmetadata: {
              ObjectName: { value: "Photo consent form reference illustration" },
              Artist: { value: "Before and After Photo Maker" },
              LicenseShortName: { value: "Original reference: Public domain; illustration: site-owned" },
              LicenseUrl: { value: "https://commons.wikimedia.org/wiki/File:CDC_Informed_Consent_form_1977.png" },
            },
          },
        }
      : usesAiSource
        ? {
            imageInfo: {
              url: `public/seo-assets/ai-sources/${aiSource.fileName}`,
              descriptionurl: `public/seo-assets/ai-sources/${aiSource.fileName}`,
              extmetadata: {
                ObjectName: { value: `GPT Image 2 synthetic SEO mockup: ${item.keyword}` },
                Artist: { value: "OpenAI gpt-image-2" },
                LicenseShortName: { value: "AI-generated mockup; review before production use" },
              },
            },
          }
      : await queryCommons(sourceConfig.title);
    const downloadUrl = imageInfo.thumburl || imageInfo.url;
    const ext = usesAiSource
      ? aiSource.ext
      : generatedSource
        ? "svg"
        : fileExtensionFromMime(imageInfo.thumbmime || imageInfo.mime, downloadUrl);
    const sourceFile = `${item.slug}-source.${ext}`;
    const sourcePath = path.join(SOURCES_DIR, sourceFile);
    const composedFile = `${item.slug}.webp`;
    const composedPath = path.join(COMPOSED_DIR, composedFile);

    let sourceBuffer;
    if (usesAiSource) {
      sourceBuffer = await fs.readFile(aiSource.filePath);
      await fs.copyFile(aiSource.filePath, sourcePath);
    } else {
      try {
        sourceBuffer = await fs.readFile(sourcePath);
      } catch {
        sourceBuffer = generatedSource ? generatedConsentSourceSvg() : await fetchBuffer(downloadUrl);
        await fs.writeFile(sourcePath, sourceBuffer);
      }
    }
    await composeAsset(
      item,
      usesAiSource ? { ...sourceConfig, sourceKind: "ai-generated-mockup" } : sourceConfig,
      sourceBuffer,
      composedPath,
    );

    const composedMeta = await sharp(composedPath).metadata();
    const sourceMeta = await sharp(sourcePath).metadata();
    const metadata = imageInfo.extmetadata || {};
    const license = metadataValue(metadata, "LicenseShortName") || metadataValue(metadata, "UsageTerms");
    const author = metadataValue(metadata, "Artist") || metadataValue(metadata, "Credit") || "Unknown";
    const title =
      metadataValue(metadata, "ObjectName") ||
      metadataValue(metadata, "ImageDescription") ||
      sourceConfig.title.replace(/^File:/, "");

    credits.assets.push({
      rank: item.rank,
      keyword: item.keyword,
      slug: item.slug,
      category: item.category,
      composed_file: `public/seo-assets/composed/${composedFile}`,
      source_file: `public/seo-assets/sources/${sourceFile}`,
      source_url: imageInfo.url,
      downloaded_source_url: downloadUrl,
      source_landing_url: imageInfo.descriptionurl,
      source_provider: usesAiSource ? "OpenAI gpt-image-2" : "Wikimedia Commons",
      source_title: title,
      author,
      author_url: null,
      license,
      license_version: null,
      license_url: metadataValue(metadata, "LicenseUrl") || null,
      source_kind: usesAiSource ? "ai-generated-mockup" : sourceConfig.sourceKind,
      curation_note: usesAiSource
        ? "Synthetic image generated for SEO template use with gpt-image-2. It must not be presented as a real customer, patient, or treatment result."
        : sourceConfig.note,
      modification_note: "Source placed into a branded SEO preview frame and exported as WebP.",
      downloaded_at: new Date().toISOString(),
      source_dimensions: { width: sourceMeta.width, height: sourceMeta.height },
      output_dimensions: { width: composedMeta.width, height: composedMeta.height },
      output_sha256: await fileSha256(composedPath),
    });
    console.log(`Wrote: ${composedFile}`);
  }

  await fs.writeFile(CREDITS_PATH, `${JSON.stringify(credits, null, 2)}\n`);
  console.log(`Wrote: ${path.relative(ROOT, CREDITS_PATH)}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
