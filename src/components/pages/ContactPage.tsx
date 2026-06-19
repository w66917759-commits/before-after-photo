import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, MessageSquareText, ShieldCheck, Wand2 } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/locales";
import { getUtilityPageDictionary } from "@/lib/i18n/utility-pages";

const contactEmail = "hello@beforeandafterpic.com";
const contactTopicIcons = [HelpCircle, MessageSquareText, ShieldCheck] as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const dictionary = getUtilityPageDictionary(locale).contact;

  return (
    <main className="main">
      <section className="seo-page-hero">
        <span className="eyebrow">{dictionary.hero.eyebrow}</span>
        <h1>{dictionary.hero.heading}</h1>
        <p className="lead">{dictionary.hero.body}</p>
        <div className="hero-actions">
          <a className="button button--primary" href={`mailto:${contactEmail}`}>
            <Mail size={18} />
            {dictionary.hero.emailCta}
          </a>
          <Link className="button button--ghost" href={localizedPath("/#maker", locale)}>
            {dictionary.hero.makerCta} <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section section--compact">
        <div className="contact-panel">
          <div>
            <span className="eyebrow">{dictionary.email.eyebrow}</span>
            <h2>{contactEmail}</h2>
            <p>{dictionary.email.body}</p>
          </div>
          <a className="button button--primary" href={`mailto:${contactEmail}`}>
            <Mail size={18} />
            {dictionary.email.cta}
          </a>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{dictionary.topics.eyebrow}</span>
            <h2>{dictionary.topics.heading}</h2>
            <p>{dictionary.topics.body}</p>
          </div>
        </div>
        <div className="idea-grid">
          {dictionary.topics.items.map((topic, index) => {
            const Icon = contactTopicIcons[index] ?? MessageSquareText;

            return (
              <article className="idea-card idea-card--icon" key={topic.title}>
                <Icon size={22} />
                <h3>{topic.title}</h3>
                <p>{topic.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="simple-seo-note">
          <div>
            <span className="eyebrow">{dictionary.final.eyebrow}</span>
            <h2>{dictionary.final.heading}</h2>
            <p>{dictionary.final.body}</p>
          </div>
          <Link className="button button--primary" href={localizedPath("/#maker", locale)}>
            <Wand2 size={18} />
            {dictionary.final.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
