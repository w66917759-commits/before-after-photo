import type { Metadata } from "next";
import { GuidesPage } from "@/components/pages/GuidesPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { canonicalUrl, languageAlternates } from "@/lib/i18n/locales";

const locale = "en";
const dictionary = getDictionary(locale);

export const metadata: Metadata = {
  title: dictionary.guidesPage.metadata.title,
  description: dictionary.guidesPage.metadata.description,
  alternates: {
    canonical: canonicalUrl("/guides", locale),
    languages: languageAlternates("/guides"),
  },
};

export default function Page() {
  return <GuidesPage locale={locale} dictionary={dictionary} />;
}
