import Link from "next/link";
import { ArrowRight, ImagePlus, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/locales";
import { getUtilityPageDictionary } from "@/lib/i18n/utility-pages";

const principleIcons = [ImagePlus, ShieldCheck, Sparkles] as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const dictionary = getUtilityPageDictionary(locale).about;

  return (
    <main className="main">
      <section className="seo-page-hero">
        <span className="eyebrow">{dictionary.hero.eyebrow}</span>
        <h1>{dictionary.hero.heading}</h1>
        <p className="lead">{dictionary.hero.body}</p>
        <div className="hero-actions">
          <Link className="button button--primary" href={localizedPath("/#maker", locale)}>
            <Wand2 size={18} />
            {dictionary.hero.makerCta}
          </Link>
          <Link className="button button--ghost" href={localizedPath("/contact", locale)}>
            {dictionary.hero.contactCta} <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{dictionary.values.eyebrow}</span>
            <h2>{dictionary.values.heading}</h2>
            <p>{dictionary.values.body}</p>
          </div>
        </div>
        <div className="idea-grid">
          {dictionary.values.items.map((principle, index) => {
            const Icon = principleIcons[index] ?? Sparkles;

            return (
              <article className="idea-card idea-card--icon" key={principle.title}>
                <Icon size={22} />
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="simple-seo-note">
          <div>
            <span className="eyebrow">{dictionary.feedback.eyebrow}</span>
            <h2>{dictionary.feedback.heading}</h2>
            <p>{dictionary.feedback.body}</p>
          </div>
          <Link className="button button--primary" href={localizedPath("/contact", locale)}>
            {dictionary.feedback.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
