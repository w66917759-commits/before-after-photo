import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "frame-templates");

const ratios = [
  { key: "16x9", label: "16:9", width: 1920, height: 1080 },
  { key: "9x16", label: "9:16", width: 1080, height: 1920 },
];

const styles = [
  { id: "serif-line", name: "Serif Line", render: renderSerifLine },
  { id: "luxury-caption", name: "Luxury Caption", render: renderLuxuryCaption },
  { id: "editorial-tag", name: "Editorial Tag", render: renderEditorialTag },
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function text(value, x, y, options = {}) {
  const {
    anchor = "middle",
    fill = "#1f1b16",
    family = "Didot, 'Bodoni 72', Georgia, 'Times New Roman', serif",
    size = 42,
    weight = 500,
    style = "",
    opacity = 1,
  } = options;

  return `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}" font-style="${style}" opacity="${opacity}" letter-spacing="0">${esc(value)}</text>`;
}

function layout(ratio) {
  const { width: w, height: h, key } = ratio;
  const portrait = key === "9x16";
  const inset = portrait ? 72 : 78;
  const divider = portrait
    ? { x1: inset, y1: h / 2, x2: w - inset, y2: h / 2 }
    : { x1: w / 2, y1: inset, x2: w / 2, y2: h - inset };
  const before = portrait
    ? { x: w / 2, y: h * 0.5 - 112, areaX: w / 2, areaY: h * 0.25 }
    : { x: w * 0.25, y: h - 112, areaX: w * 0.25, areaY: h / 2 };
  const after = portrait
    ? { x: w / 2, y: h * 0.5 + 112, areaX: w / 2, areaY: h * 0.75 }
    : { x: w * 0.75, y: h - 112, areaX: w * 0.75, areaY: h / 2 };

  return { w, h, portrait, inset, divider, before, after };
}

function border(l, color = "rgba(255,255,255,0.82)", width = 3) {
  return `<rect x="${l.inset}" y="${l.inset}" width="${l.w - l.inset * 2}" height="${l.h - l.inset * 2}" fill="none" stroke="${color}" stroke-width="${width}" />`;
}

function divider(l, color = "rgba(255,255,255,0.9)", width = 4) {
  return `<path d="M ${l.divider.x1} ${l.divider.y1} L ${l.divider.x2} ${l.divider.y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" />`;
}

function labelTag(x, y, value, options = {}) {
  const {
    w = 214,
    h = 66,
    fill = "rgba(255,255,255,0.78)",
    stroke = "rgba(31,27,22,0.12)",
    color = "#1f1b16",
    size = 36,
    family = "Didot, 'Bodoni 72', Georgia, 'Times New Roman', serif",
    style = "",
  } = options;

  return `
    <rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="2" />
    ${text(value, x, y + 2, { fill: color, size, family, style })}
  `;
}

function renderSerifLine(ratio) {
  const l = layout(ratio);
  const size = l.portrait ? 50 : 58;
  return `
    ${border(l, "rgba(255,255,255,0.78)", 3)}
    ${divider(l, "rgba(255,255,255,0.88)", l.portrait ? 4 : 5)}
    ${text("Before", l.before.x, l.before.y, { fill: "#f8f2e8", size, weight: 500, style: "italic" })}
    ${text("After", l.after.x, l.after.y, { fill: "#f8f2e8", size, weight: 500, style: "italic" })}
  `;
}

function renderLuxuryCaption(ratio) {
  const l = layout(ratio);
  const yOffset = l.portrait ? 96 : 94;
  const beforeY = l.portrait ? l.h / 2 - yOffset : l.h - yOffset;
  const afterY = l.portrait ? l.h / 2 + yOffset : l.h - yOffset;
  const beforeX = l.portrait ? l.w / 2 : l.w * 0.25;
  const afterX = l.portrait ? l.w / 2 : l.w * 0.75;
  const labelW = l.portrait ? 230 : 260;
  const size = l.portrait ? 42 : 48;
  return `
    ${border(l, "rgba(18,18,18,0.18)", 2)}
    ${divider(l, "rgba(18,18,18,0.52)", l.portrait ? 3 : 4)}
    <path d="M ${beforeX - labelW / 2} ${beforeY + 40} H ${beforeX + labelW / 2}" stroke="rgba(18,18,18,0.62)" stroke-width="2" />
    <path d="M ${afterX - labelW / 2} ${afterY + 40} H ${afterX + labelW / 2}" stroke="rgba(18,18,18,0.62)" stroke-width="2" />
    ${text("Before", beforeX, beforeY, { fill: "#151515", size, weight: 400, family: "Cormorant Garamond, Garamond, Georgia, serif" })}
    ${text("After", afterX, afterY, { fill: "#151515", size, weight: 400, family: "Cormorant Garamond, Garamond, Georgia, serif" })}
  `;
}

function renderEditorialTag(ratio) {
  const l = layout(ratio);
  const tagY = l.portrait ? 92 : 86;
  const beforeY = l.portrait ? tagY : tagY;
  const afterY = l.portrait ? l.h / 2 + tagY : tagY;
  const beforeX = l.portrait ? l.w / 2 : l.w * 0.25;
  const afterX = l.portrait ? l.w / 2 : l.w * 0.75;
  const tagW = l.portrait ? 210 : 238;
  const tagH = l.portrait ? 58 : 62;
  return `
    ${border(l, "rgba(222,211,190,0.9)", 4)}
    ${divider(l, "rgba(222,211,190,0.95)", l.portrait ? 5 : 6)}
    ${labelTag(beforeX, beforeY, "Before", { w: tagW, h: tagH, fill: "rgba(244,237,222,0.88)", color: "#2b2118", size: l.portrait ? 34 : 38, style: "italic" })}
    ${labelTag(afterX, afterY, "After", { w: tagW, h: tagH, fill: "rgba(244,237,222,0.88)", color: "#2b2118", size: l.portrait ? 34 : 38, style: "italic" })}
  `;
}

function renderSvg(ratio, style) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${ratio.width}" height="${ratio.height}" viewBox="0 0 ${ratio.width} ${ratio.height}" role="img" aria-label="${esc(style.name)} ${ratio.label} before after frame">
  <rect width="${ratio.width}" height="${ratio.height}" fill="none" />
  ${style.render(ratio)}
</svg>
`;
}

async function makePreview(entries) {
  const thumbW = 300;
  const thumbH = 220;
  const cols = 3;
  const pad = 28;
  const labelH = 36;
  const rows = Math.ceil(entries.length / cols);
  const bg = "#eef1f5";
  const composite = [];

  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];
    const x = pad + (i % cols) * (thumbW + pad);
    const y = pad + Math.floor(i / cols) * (thumbH + labelH + pad);
    const splitBlocks =
      entry.ratio === "9:16"
        ? `<rect x="0" y="0" width="${entry.width}" height="${entry.height / 2}" fill="#aebbc6"/><rect x="0" y="${entry.height / 2}" width="${entry.width}" height="${entry.height / 2}" fill="#9fadb9"/>`
        : `<rect x="0" y="0" width="${entry.width / 2}" height="${entry.height}" fill="#aebbc6"/><rect x="${entry.width / 2}" y="0" width="${entry.width / 2}" height="${entry.height}" fill="#9fadb9"/>`;
    const base = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${entry.width}" height="${entry.height}"><rect width="100%" height="100%" fill="${bg}"/>${splitBlocks}</svg>`);
    const basePng = await sharp(base)
      .resize(entry.width, entry.height, { fit: "fill" })
      .png()
      .toBuffer();
    const fullPreview = await sharp(basePng)
      .composite([{ input: path.join(process.cwd(), "public", entry.png), left: 0, top: 0 }])
      .png()
      .toBuffer();
    const preview = await sharp(fullPreview)
      .resize({ width: thumbW, height: thumbH, fit: "contain", background: bg })
      .flatten({ background: bg })
      .png()
      .toBuffer();
    const label = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${thumbW}" height="${labelH}"><rect width="100%" height="100%" fill="${bg}"/><text x="${thumbW / 2}" y="23" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#1f2933">${esc(entry.ratio)} ${esc(entry.id)}</text></svg>`);
    composite.push({ input: preview, left: x, top: y });
    composite.push({ input: label, left: x, top: y + thumbH });
  }

  await sharp({
    create: {
      width: cols * thumbW + (cols + 1) * pad,
      height: rows * (thumbH + labelH) + (rows + 1) * pad,
      channels: 4,
      background: bg,
    },
  })
    .composite(composite)
    .png()
    .toFile(path.join(OUT_DIR, "preview-contact-sheet.png"));
}

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });
  const entries = [];

  for (const ratio of ratios) {
    const ratioDir = path.join(OUT_DIR, ratio.key);
    await fs.mkdir(ratioDir, { recursive: true });
    const ratioEntries = [];

    for (const style of styles) {
      const svg = renderSvg(ratio, style);
      const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
      await fs.writeFile(path.join(ratioDir, `${style.id}.svg`), svg);
      await fs.writeFile(path.join(ratioDir, `${style.id}.png`), png);
      const entry = {
        id: style.id,
        name: style.name,
        ratio: ratio.label,
        width: ratio.width,
        height: ratio.height,
        png: `/frame-templates/${ratio.key}/${style.id}.png`,
        svg: `/frame-templates/${ratio.key}/${style.id}.svg`,
      };
      ratioEntries.push(entry);
      entries.push(entry);
    }

    await fs.writeFile(path.join(ratioDir, "templates.json"), `${JSON.stringify(ratioEntries, null, 2)}\n`);
  }

  await fs.writeFile(path.join(OUT_DIR, "templates.json"), `${JSON.stringify(entries, null, 2)}\n`);
  await makePreview(entries);
  console.log(`Generated ${entries.length} simple frames in ${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
