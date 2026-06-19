import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import { AppShell } from "@/components/AppShell";
import { getSiteMetadata, viewport } from "@/lib/i18n/metadata";
import { isRoutedLocale, routedLocales, type RoutedLocale } from "@/lib/i18n/locales";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;
export { viewport };

export function generateStaticParams() {
  return routedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) return {};
  return getSiteMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isRoutedLocale(locale)) notFound();

  return <AppShell locale={locale as RoutedLocale}>{children}</AppShell>;
}
