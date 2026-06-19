import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { canonicalUrl, languageAlternates } from "@/lib/i18n/locales";
import { getUtilityPageDictionary } from "@/lib/i18n/utility-pages";

const dictionary = getUtilityPageDictionary("en").contact;

export const metadata: Metadata = {
  title: dictionary.metadata.title,
  description: dictionary.metadata.description,
  alternates: {
    canonical: canonicalUrl("/contact", "en"),
    languages: languageAlternates("/contact"),
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
