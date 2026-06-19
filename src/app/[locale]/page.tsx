import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  canonicalUrl,
  isRoutedLocale,
  languageAlternates,
  routedLocales,
  type RoutedLocale,
} from "@/lib/i18n/locales";
import "../home.css";

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
    title: dictionary.home.metadata.title,
    description: dictionary.home.metadata.description,
    alternates: {
      canonical: canonicalUrl("/", locale),
      languages: languageAlternates("/"),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();

  const routedLocale = locale as RoutedLocale;
  return <HomePage locale={routedLocale} dictionary={getDictionary(routedLocale)} />;
}
