import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { canonicalUrl, languageAlternates, supportedLocales } from "@/lib/i18n/locales";
import { seoLandingPages } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedEntries = ["/", "/guides", "/about", "/contact"].flatMap((path) => {
    const isUtilityPage = path === "/about" || path === "/contact";

    return supportedLocales.map((locale) => ({
      url: canonicalUrl(path, locale),
      lastModified: now,
      changeFrequency: isUtilityPage ? ("monthly" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : isUtilityPage ? 0.7 : 0.9,
      alternates: {
        languages: languageAlternates(path),
      },
    }));
  });

  return [
    ...localizedEntries,
    ...seoLandingPages.map((page) => ({
      url: absoluteUrl(page.route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.section === "tools" ? 0.9 : 0.8,
    })),
    ...guides.map((guide) => ({
      url: absoluteUrl(`/guides/${guide.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
