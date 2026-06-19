import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidesPage } from "@/components/pages/GuidesPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  canonicalUrl,
  isRoutedLocale,
  languageAlternates,
  routedLocales,
  type RoutedLocale,
} from "@/lib/i18n/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) return {};
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.guidesPage.metadata.title,
    description: dictionary.guidesPage.metadata.description,
    alternates: {
      canonical: canonicalUrl("/guides", locale),
      languages: languageAlternates("/guides"),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();

  const routedLocale = locale as RoutedLocale;
  return <GuidesPage locale={routedLocale} dictionary={getDictionary(routedLocale)} />;
}
