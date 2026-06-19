import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { canonicalUrl, languageAlternates } from "@/lib/i18n/locales";
import { getUtilityPageDictionary } from "@/lib/i18n/utility-pages";

const dictionary = getUtilityPageDictionary("en").about;

export const metadata: Metadata = {
  title: dictionary.metadata.title,
  description: dictionary.metadata.description,
  alternates: {
    canonical: canonicalUrl("/about", "en"),
    languages: languageAlternates("/about"),
  },
};

export default function Page() {
  return <AboutPage locale="en" />;
}
