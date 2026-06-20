import { absoluteUrl } from "@/lib/site";

export const defaultLocale = "en";

export const supportedLocales = ["en", "jp", "kr", "ar", "fr", "es"] as const;
export const routedLocales = ["jp", "kr", "ar", "fr", "es"] as const;

export type Locale = (typeof supportedLocales)[number];
export type RoutedLocale = (typeof routedLocales)[number];
export type TextDirection = "ltr" | "rtl";

export type LocaleConfig = {
  label: string;
  nativeLabel: string;
  pathPrefix: string;
  htmlLang: string;
  hreflang: string;
  dir: TextDirection;
};

export const localeConfigs: Record<Locale, LocaleConfig> = {
  en: {
    label: "English",
    nativeLabel: "English",
    pathPrefix: "",
    htmlLang: "en",
    hreflang: "en",
    dir: "ltr",
  },
  jp: {
    label: "Japanese",
    nativeLabel: "日本語",
    pathPrefix: "/jp",
    htmlLang: "ja",
    hreflang: "ja",
    dir: "ltr",
  },
  kr: {
    label: "Korean",
    nativeLabel: "한국어",
    pathPrefix: "/kr",
    htmlLang: "ko",
    hreflang: "ko",
    dir: "ltr",
  },
  ar: {
    label: "Arabic",
    nativeLabel: "العربية",
    pathPrefix: "/ar",
    htmlLang: "ar",
    hreflang: "ar",
    dir: "rtl",
  },
  fr: {
    label: "French",
    nativeLabel: "Français",
    pathPrefix: "/fr",
    htmlLang: "fr",
    hreflang: "fr",
    dir: "ltr",
  },
  es: {
    label: "Spanish",
    nativeLabel: "Español",
    pathPrefix: "/es",
    htmlLang: "es",
    hreflang: "es",
    dir: "ltr",
  },
};

export function isLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value);
}

export function isRoutedLocale(value: string): value is RoutedLocale {
  return (routedLocales as readonly string[]).includes(value);
}

function splitPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const suffixIndex = normalized.search(/[?#]/);
  if (suffixIndex === -1) {
    return { pathname: normalized, suffix: "" };
  }

  return {
    pathname: normalized.slice(0, suffixIndex) || "/",
    suffix: normalized.slice(suffixIndex),
  };
}

export function localizedPath(path: string, locale: Locale) {
  const { pathname, suffix } = splitPath(path || "/");
  const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  const prefix = localeConfigs[locale].pathPrefix;
  const localized = `${prefix}${cleanPath}` || "/";
  return `${localized}${suffix}`;
}

export function stripLocalePrefix(pathname: string) {
  const { pathname: cleanPath } = splitPath(pathname || "/");
  const parts = cleanPath.split("/").filter(Boolean);
  const [first, ...rest] = parts;

  if (first && isRoutedLocale(first)) {
    return rest.length ? `/${rest.join("/")}` : "/";
  }

  return cleanPath || "/";
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isRoutedLocale(first) ? first : defaultLocale;
}

export function switchLocalePath(pathname: string, targetLocale: Locale) {
  const basePath = stripLocalePrefix(pathname);
  const isGuideDetail = basePath.match(/^\/guides\/[^/]+/);
  const isEnglishSeoDetail = basePath.match(/^\/(?:tools|use-cases|templates)\/[^/]+/);
  const supportedPath = isGuideDetail
    ? `/${basePath.split("/").filter(Boolean)[0]}`
    : isEnglishSeoDetail
      ? "/"
    : basePath;

  return localizedPath(supportedPath, targetLocale);
}

export function languageAlternates(path: string) {
  const languages = Object.fromEntries(
    supportedLocales.map((locale) => [
      localeConfigs[locale].hreflang,
      absoluteUrl(localizedPath(path, locale)),
    ]),
  );

  return {
    ...languages,
    "x-default": absoluteUrl(localizedPath(path, defaultLocale)),
  };
}

export function canonicalUrl(path: string, locale: Locale) {
  return absoluteUrl(localizedPath(path, locale));
}
