import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { canonicalUrl, languageAlternates } from "@/lib/i18n/locales";
import "../home.css";

const locale = "en";
const dictionary = getDictionary(locale);

export const metadata: Metadata = {
  title: dictionary.home.metadata.title,
  description: dictionary.home.metadata.description,
  alternates: {
    canonical: canonicalUrl("/", locale),
    languages: languageAlternates("/"),
  },
};

export default function Page() {
  return <HomePage locale={locale} dictionary={dictionary} />;
}
