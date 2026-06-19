export type SlotKey = "before" | "after";
export type TemplateFamily = "frame";
export type TemplateRatio = "16:9" | "9:16";

export type CropState = {
  zoom: number;
  x: number;
  y: number;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type TemplateSlot = Rect & {
  radius: number;
};

export type LabelSpec = {
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  rotate?: number;
  fontSize: number;
  fill: string;
  fontFamily: string;
  fontWeight?: number;
  fontStyle?: "normal" | "italic";
  box?: Rect & {
    fill: string;
    stroke?: string;
    radius?: number;
  };
};

export type TemplateTheme = {
  background: string;
  paper: string;
  paperSoft: string;
  frame: string;
  frameStroke: string;
  text: string;
  accent: string;
  muted: string;
};

export type ComparisonTemplate = {
  id: string;
  assetId: string;
  name: string;
  family: TemplateFamily;
  ratio: TemplateRatio;
  width: number;
  height: number;
  preview: string;
  download: {
    png: string;
    svg: string;
  };
  paper?: Rect;
  slots: Record<SlotKey, TemplateSlot>;
  labels: Record<SlotKey, LabelSpec>;
  theme: TemplateTheme;
};

export const defaultCrop: CropState = {
  zoom: 1,
  x: 0,
  y: 0,
};

const serif = "Georgia, 'Times New Roman', serif";
const didot = "Didot, 'Bodoni 72', Georgia, 'Times New Roman', serif";
const garamond = "Cormorant Garamond, Garamond, Georgia, serif";

const lightFrameTheme: TemplateTheme = {
  background: "#f8fafc",
  paper: "#ffffff",
  paperSoft: "#ffffff",
  frame: "#ffffff",
  frameStroke: "rgba(18,18,18,0.18)",
  text: "#151515",
  accent: "#111827",
  muted: "rgba(18,18,18,0.62)",
};

const darkFrameTheme: TemplateTheme = {
  background: "#111827",
  paper: "#111827",
  paperSoft: "#111827",
  frame: "#ffffff",
  frameStroke: "rgba(255,255,255,0.78)",
  text: "#f8f2e8",
  accent: "#f8f2e8",
  muted: "rgba(255,255,255,0.88)",
};

const editorialFrameTheme: TemplateTheme = {
  background: "#17130f",
  paper: "#17130f",
  paperSoft: "#f4edde",
  frame: "#f4edde",
  frameStroke: "rgba(222,211,190,0.9)",
  text: "#2b2118",
  accent: "#ded3be",
  muted: "rgba(31,27,22,0.12)",
};

function label(
  x: number,
  y: number,
  fontSize: number,
  fill: string,
  options: Partial<LabelSpec> = {},
): LabelSpec {
  return {
    x,
    y,
    anchor: "middle",
    fontFamily: serif,
    fontSize,
    fontStyle: "italic",
    fontWeight: 600,
    fill,
    ...options,
  };
}

function frameTemplate(
  ratio: TemplateRatio,
  assetId: string,
  name: string,
  theme: TemplateTheme,
  beforeLabel: LabelSpec,
  afterLabel: LabelSpec,
): ComparisonTemplate {
  const landscape = ratio === "16:9";
  const width = landscape ? 1920 : 1080;
  const height = landscape ? 1080 : 1920;
  const path = landscape ? "16x9" : "9x16";
  const slots: Record<SlotKey, TemplateSlot> = landscape
    ? {
        before: { x: 0, y: 0, width: 960, height: 1080, radius: 0 },
        after: { x: 960, y: 0, width: 960, height: 1080, radius: 0 },
      }
    : {
        before: { x: 0, y: 0, width: 1080, height: 960, radius: 0 },
        after: { x: 0, y: 960, width: 1080, height: 960, radius: 0 },
      };

  return {
    id: `frame-${path}-${assetId}`,
    assetId,
    name,
    family: "frame",
    ratio,
    width,
    height,
    preview: `/frame-templates/${path}/${assetId}.png`,
    download: {
      png: `/frame-templates/${path}/${assetId}.png`,
      svg: `/frame-templates/${path}/${assetId}.svg`,
    },
    slots,
    labels: { before: beforeLabel, after: afterLabel },
    theme,
  };
}

export const comparisonTemplates: ComparisonTemplate[] = [
  frameTemplate(
    "16:9",
    "serif-line",
    "Serif Line Landscape",
    darkFrameTheme,
    label(480, 968, 58, darkFrameTheme.text, { fontFamily: didot, fontWeight: 500 }),
    label(1440, 968, 58, darkFrameTheme.text, { fontFamily: didot, fontWeight: 500 }),
  ),
  frameTemplate(
    "16:9",
    "luxury-caption",
    "Luxury Caption Landscape",
    lightFrameTheme,
    label(480, 986, 48, lightFrameTheme.text, { fontFamily: garamond, fontStyle: "normal", fontWeight: 400 }),
    label(1440, 986, 48, lightFrameTheme.text, { fontFamily: garamond, fontStyle: "normal", fontWeight: 400 }),
  ),
  frameTemplate(
    "16:9",
    "editorial-tag",
    "Editorial Tag Landscape",
    editorialFrameTheme,
    label(480, 88, 38, editorialFrameTheme.text, {
      fontFamily: didot,
      fontWeight: 500,
      box: { x: 361, y: 55, width: 238, height: 62, fill: "rgba(244,237,222,0.88)", stroke: "rgba(31,27,22,0.12)" },
    }),
    label(1440, 88, 38, editorialFrameTheme.text, {
      fontFamily: didot,
      fontWeight: 500,
      box: { x: 1321, y: 55, width: 238, height: 62, fill: "rgba(244,237,222,0.88)", stroke: "rgba(31,27,22,0.12)" },
    }),
  ),
  frameTemplate(
    "9:16",
    "serif-line",
    "Serif Line Portrait",
    darkFrameTheme,
    label(540, 848, 50, darkFrameTheme.text, { fontFamily: didot, fontWeight: 500 }),
    label(540, 1072, 50, darkFrameTheme.text, { fontFamily: didot, fontWeight: 500 }),
  ),
  frameTemplate(
    "9:16",
    "luxury-caption",
    "Luxury Caption Portrait",
    lightFrameTheme,
    label(540, 864, 42, lightFrameTheme.text, { fontFamily: garamond, fontStyle: "normal", fontWeight: 400 }),
    label(540, 1056, 42, lightFrameTheme.text, { fontFamily: garamond, fontStyle: "normal", fontWeight: 400 }),
  ),
  frameTemplate(
    "9:16",
    "editorial-tag",
    "Editorial Tag Portrait",
    editorialFrameTheme,
    label(540, 94, 34, editorialFrameTheme.text, {
      fontFamily: didot,
      fontWeight: 500,
      box: { x: 435, y: 63, width: 210, height: 58, fill: "rgba(244,237,222,0.88)", stroke: "rgba(31,27,22,0.12)" },
    }),
    label(540, 1054, 34, editorialFrameTheme.text, {
      fontFamily: didot,
      fontWeight: 500,
      box: { x: 435, y: 1023, width: 210, height: 58, fill: "rgba(244,237,222,0.88)", stroke: "rgba(31,27,22,0.12)" },
    }),
  ),
];

export function getComparisonTemplate(id: string) {
  return comparisonTemplates.find((template) => template.id === id) ?? comparisonTemplates[0];
}

export function clampCrop(crop: CropState): CropState {
  return {
    zoom: Math.min(3, Math.max(1, Number.isFinite(crop.zoom) ? crop.zoom : 1)),
    x: Math.min(1, Math.max(-1, Number.isFinite(crop.x) ? crop.x : 0)),
    y: Math.min(1, Math.max(-1, Number.isFinite(crop.y) ? crop.y : 0)),
  };
}
