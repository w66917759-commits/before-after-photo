import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExamplesPage } from "@/components/pages/ExamplesPage";
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
    title: dictionary.examplesPage.metadata.title,
    description: dictionary.examplesPage.metadata.description,
    alternates: {
      canonical: canonicalUrl("/examples", locale),
      languages: languageAlternates("/examples"),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();

  const routedLocale = locale as RoutedLocale;
  return <ExamplesPage locale={routedLocale} dictionary={getDictionary(routedLocale)} />;
}
