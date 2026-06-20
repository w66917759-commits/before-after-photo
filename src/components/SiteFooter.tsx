import Link from "next/link";
import { Images } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n/locales";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const footerLinks = [
    { href: localizedPath("/#maker", locale), label: dictionary.header.nav.studio },
    { href: localizedPath("/#templates", locale), label: dictionary.header.nav.templates },
    { href: localizedPath("/guides", locale), label: dictionary.header.nav.guides },
    { href: localizedPath("/#how-to-use", locale), label: dictionary.header.nav.how },
    { href: localizedPath("/about", locale), label: dictionary.header.nav.about },
    { href: localizedPath("/contact", locale), label: dictionary.header.nav.contact },
    { href: localizedPath("/#privacy", locale), label: dictionary.header.nav.privacy },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link href={localizedPath("/", locale)} className="brand" aria-label={dictionary.common.brandAria}>
            <span className="brand__mark" aria-hidden="true">
              <Images size={18} />
            </span>
            <span>{dictionary.common.brandText}</span>
          </Link>
          <p>{dictionary.footer.description}</p>
        </div>
        <nav className="footer__links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
