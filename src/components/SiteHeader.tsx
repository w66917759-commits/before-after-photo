"use client";

import Link from "next/link";
import { Images, Menu, Wand2, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ChangeEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  localeConfigs,
  localizedPath,
  supportedLocales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n/locales";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { href: localizedPath("/#maker", locale), label: dictionary.header.nav.studio },
    { href: localizedPath("/#templates", locale), label: dictionary.header.nav.templates },
    { href: localizedPath("/guides", locale), label: dictionary.header.nav.guides },
    { href: localizedPath("/#how-to-use", locale), label: dictionary.header.nav.how },
    { href: localizedPath("/#privacy", locale), label: dictionary.header.nav.privacy },
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="site-header__inner">
        <Link href={localizedPath("/", locale)} className="brand" aria-label={dictionary.common.brandAria} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            <Images size={19} />
          </span>
          <span>{dictionary.common.brandText}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <Link href={localizedPath("/#maker", locale)} className="button button--primary button--small">
            <Wand2 size={16} />
            {dictionary.header.cta}
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? dictionary.header.closeMenu : dictionary.header.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="mobile-nav" data-open={menuOpen}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <LanguageSwitcher locale={locale} dictionary={dictionary} onNavigate={closeMenu} />
        <Link href={localizedPath("/#maker", locale)} className="button button--primary" onClick={closeMenu}>
          <Wand2 size={17} />
          {dictionary.header.cta}
        </Link>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  locale,
  dictionary,
  onNavigate,
}: {
  locale: Locale;
  dictionary: Dictionary;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    router.push(switchLocalePath(pathname, nextLocale));
    onNavigate?.();
  };

  return (
    <label className="language-switcher">
      <span className="sr-only">{dictionary.common.languageSwitcherLabel}</span>
      <select value={locale} aria-label={dictionary.common.languageSwitcherLabel} onChange={changeLanguage}>
        {supportedLocales.map((optionLocale) => (
          <option value={optionLocale} key={optionLocale}>
            {localeConfigs[optionLocale].nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
