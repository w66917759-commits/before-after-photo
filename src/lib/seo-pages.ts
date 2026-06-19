import manifest from "../../content/seo-pages.json";
import credits from "../../public/seo-assets/credits.json";

export type FrameStyle =
  | "medical-clean"
  | "beauty-soft"
  | "dental-white"
  | "document-consent"
  | "neutral-frame"
  | "fitness-neutral";

export type Faq = {
  question: string;
  answer: string;
};

export type SeoPage = {
  priority: "P0" | "P1" | "P2";
  rank: number;
  keyword: string;
  slug: string;
  route: string;
  category: FrameStyle;
  title: string;
  description: string;
  h1: string;
  image: string;
  imageAlt: string;
  preset: {
    labelBefore: string;
    labelAfter: string;
    aspectRatio: string;
    frameStyle: FrameStyle;
    exportFormat: string;
  };
  useCaseCopy: string;
  faqs: Faq[];
  relatedSlugs: string[];
};

export type AssetCredit = {
  rank: number;
  keyword: string;
  slug: string;
  source_url: string;
  source_landing_url: string;
  source_provider: string;
  source_title: string;
  author: string;
  author_url: string | null;
  license: string;
  license_version: string | null;
};

export const seoManifest = manifest;
export const seoPages = manifest.pages as SeoPage[];
export const assetCredits = credits.assets as AssetCredit[];

export const categoryLabels: Record<FrameStyle, string> = {
  "medical-clean": "Clean close-up",
  "beauty-soft": "Soft detail",
  "dental-white": "Bright detail",
  "document-consent": "Documented comparison",
  "neutral-frame": "General comparison",
  "fitness-neutral": "Progress comparison",
};

export const categoryDescriptions: Record<FrameStyle, string> = {
  "medical-clean":
    "Neutral frames for close-up comparisons that should stay clear and understated.",
  "beauty-soft": "Soft, polished layouts for detailed personal or service examples.",
  "dental-white": "Bright layouts for small-detail comparisons that need strong contrast.",
  "document-consent":
    "Structured layouts for reviewed or documented before and after photos.",
  "neutral-frame": "General-purpose frames for broad before and after searches.",
  "fitness-neutral": "Clean layouts for personal progress and milestone examples.",
};

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getAssetCredit(slug: string) {
  return assetCredits.find((credit) => credit.slug === slug);
}

export function getRelatedPages(page: SeoPage) {
  return page.relatedSlugs
    .map((slug) => getSeoPage(slug))
    .filter((related): related is SeoPage => Boolean(related));
}

export function getPagesByCategory(category: FrameStyle) {
  return seoPages.filter((page) => page.category === category);
}

export function getFeaturedPages() {
  return seoPages
    .filter((page) => page.priority === "P0")
    .sort((a, b) => a.rank - b.rank);
}

export function titleFromKeyword(keyword: string) {
  return keyword
    .split(/\s+/)
    .map((word) =>
      ["and", "of"].includes(word)
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}
