import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeConfigs, type Locale } from "@/lib/i18n/locales";

const googleTagId = "G-TPLTSPLXDV";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-serif",
});

export function AppShell({ children, locale }: { children: ReactNode; locale: Locale }) {
  const dictionary = getDictionary(locale);
  const localeConfig = localeConfigs[locale];

  return (
    <html
      lang={localeConfig.htmlLang}
      dir={localeConfig.dir}
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="page-shell">
          <SiteHeader locale={locale} dictionary={dictionary} />
          {children}
          <SiteFooter locale={locale} dictionary={dictionary} />
        </div>
        <Script
          id="google-tag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleTagId}');
`}
        </Script>
      </body>
    </html>
  );
}
