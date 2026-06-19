import type { Metadata } from "next";
import { ExamplesPage } from "@/components/pages/ExamplesPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { canonicalUrl, languageAlternates } from "@/lib/i18n/locales";

const locale = "en";
const dictionary = getDictionary(locale);

export const metadata: Metadata = {
  title: dictionary.examplesPage.metadata.title,
  description: dictionary.examplesPage.metadata.description,
  alternates: {
    canonical: canonicalUrl("/examples", locale),
    languages: languageAlternates("/examples"),
  },
};

export default function Page() {
  return <ExamplesPage locale={locale} dictionary={dictionary} />;
}
