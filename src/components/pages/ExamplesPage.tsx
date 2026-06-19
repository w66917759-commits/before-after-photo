import Link from "next/link";
import { ArrowRight, Brush, Dumbbell, Home, ImagePlus, Store, Wand2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n/locales";

const exampleIcons = [Home, Dumbbell, Brush, Store, ImagePlus, Wand2];

export function ExamplesPage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <main className="main">
      <section className="seo-page-hero">
        <div>
          <span className="eyebrow">{dictionary.examplesPage.hero.eyebrow}</span>
          <h1>{dictionary.examplesPage.hero.heading}</h1>
          <p className="lead">{dictionary.examplesPage.hero.body}</p>
          <div className="hero-actions">
            <Link className="button button--primary" href={localizedPath("/#maker", locale)}>
              <Wand2 size={18} />
              {dictionary.examplesPage.hero.makerCta}
            </Link>
            <Link className="button button--ghost" href={localizedPath("/#templates", locale)}>
              {dictionary.examplesPage.hero.templatesCta} <ArrowRight size={17} />
            </Link>
            <Link className="button button--ghost" href={localizedPath("/guides", locale)}>
              {dictionary.examplesPage.hero.guidesCta} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{dictionary.examplesPage.common.eyebrow}</span>
            <h2>{dictionary.examplesPage.common.heading}</h2>
            <p>{dictionary.examplesPage.common.body}</p>
          </div>
        </div>
        <div className="idea-grid">
          {dictionary.examplesPage.common.items.map((example, index) => {
            const ExampleIcon = exampleIcons[index];
            return (
              <article className="idea-card idea-card--icon" key={example.title}>
                <ExampleIcon size={22} />
                <h3>{example.title}</h3>
                <p>{example.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="simple-seo-note">
          <div>
            <span className="eyebrow">{dictionary.examplesPage.workflow.eyebrow}</span>
            <h2>{dictionary.examplesPage.workflow.heading}</h2>
            <p>{dictionary.examplesPage.workflow.body}</p>
          </div>
          <Link className="button button--primary" href={localizedPath("/#maker", locale)}>
            {dictionary.examplesPage.workflow.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
