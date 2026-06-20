import type { Metadata } from "next";
import type { SeoLandingPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

export function getSeoLandingMetadata(page: SeoLandingPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.route,
    },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url: page.route,
      siteName: siteConfig.name,
      images: [
        {
          url: page.preview.src,
          width: page.preview.src.includes("preview-contact-sheet") ? 1012 : page.preview.ratio === "9:16" ? 1080 : 1920,
          height: page.preview.src.includes("preview-contact-sheet") ? 596 : page.preview.ratio === "9:16" ? 1920 : 1080,
          alt: page.preview.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.preview.src],
    },
  };
}
