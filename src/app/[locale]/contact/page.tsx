import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/components/pages/ContactPage";
import {
  canonicalUrl,
  isRoutedLocale,
  languageAlternates,
  routedLocales,
  type RoutedLocale,
} from "@/lib/i18n/locales";
import { getUtilityPageDictionary } from "@/lib/i18n/utility-pages";

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
  const dictionary = getUtilityPageDictionary(locale).contact;

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: canonicalUrl("/contact", locale),
      languages: languageAlternates("/contact"),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();

  return <ContactPage locale={locale as RoutedLocale} />;
}
