import type { Metadata, Viewport } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeConfigs, type Locale } from "@/lib/i18n/locales";
import { siteConfig } from "@/lib/site";

export function getSiteMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);
  const localeConfig = localeConfigs[locale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dictionary.home.metadata.title,
      template: "%s",
    },
    description: dictionary.home.metadata.description,
    applicationName: siteConfig.name,
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dictionary.home.metadata.title,
      description: dictionary.home.metadata.description,
      locale: localeConfig.htmlLang,
    },
    twitter: {
      card: "summary",
      title: dictionary.home.metadata.title,
      description: dictionary.home.metadata.description,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7fafb",
};
