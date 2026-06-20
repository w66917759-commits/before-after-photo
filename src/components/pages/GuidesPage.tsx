import Link from "next/link";
import { ArrowRight, BookOpenText, Sparkles, Wand2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getGuideSummary } from "@/lib/i18n/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n/locales";
import { guideCategories, getGuidesByCategory, guides, type Guide } from "@/lib/guides";
import { getSeoLandingPagesBySection, seoLandingSectionLabels, type SeoLandingSection } from "@/lib/seo-pages";

const seoPageGroups: Array<{ section: SeoLandingSection; pages: ReturnType<typeof getSeoLandingPagesBySection> }> = [
  { section: "tools", pages: getSeoLandingPagesBySection("tools") },
  { section: "use-cases", pages: getSeoLandingPagesBySection("use-cases") },
  { section: "templates", pages: getSeoLandingPagesBySection("templates") },
];

export function GuidesPage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const featured = guides.slice(0, 3);

  return (
    <main className="main">
      <section className="seo-page-hero guide-hero">
        <span className="eyebrow">
          <BookOpenText size={15} />
          {dictionary.guidesPage.hero.eyebrow}
        </span>
        <h1>{dictionary.guidesPage.hero.heading}</h1>
        <p className="lead">{dictionary.guidesPage.hero.body}</p>
        <div className="hero-actions">
          <Link className="button button--primary" href={localizedPath("/#maker", locale)}>
            <Wand2 size={18} />
            {dictionary.guidesPage.hero.makerCta}
          </Link>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <Sparkles size={15} />
              {dictionary.guidesPage.featured.eyebrow}
            </span>
            <h2>{dictionary.guidesPage.featured.heading}</h2>
            <p>{dictionary.guidesPage.featured.body}</p>
          </div>
        </div>
        <div className="guide-grid guide-grid--featured">
          {featured.map((guide) => (
            <GuideCard guide={guide} locale={locale} dictionary={dictionary} cta={dictionary.guidesPage.featured.cta} key={guide.slug} />
          ))}
        </div>
      </section>

      {locale === "en" ? (
        <section className="section section--compact">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Landing pages</span>
              <h2>Tool pages, use cases, and templates</h2>
              <p>
                These pages map common search phrases to the actual maker workflow so visitors can
                start from the page that matches their intent.
              </p>
            </div>
          </div>
          <div className="guide-category-list">
            {seoPageGroups.map((group) => (
              <section className="guide-category" key={group.section} aria-labelledby={`seo-${group.section}`}>
                <h3 id={`seo-${group.section}`}>{seoLandingSectionLabels[group.section]}</h3>
                <div className="guide-grid">
                  {group.pages.map((page) => (
                    <Link className="guide-card guide-card--compact" href={page.route} key={page.slug}>
                      <span className="tag">{page.category}</span>
                      <h4>{page.h1}</h4>
                      <p>{page.description}</p>
                      <span>Open page</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{dictionary.guidesPage.all.eyebrow}</span>
            <h2>{dictionary.guidesPage.all.heading}</h2>
            <p>{dictionary.guidesPage.all.body}</p>
          </div>
        </div>
        <div className="guide-category-list">
          {guideCategories.map((category) => (
            <section className="guide-category" key={category} aria-labelledby={`category-${category}`}>
              <h3 id={`category-${category}`}>{dictionary.guidesPage.categories[category]}</h3>
              <div className="guide-grid">
                {getGuidesByCategory(category).map((guide) => (
                  <GuideCard
                    guide={guide}
                    locale={locale}
                    dictionary={dictionary}
                    cta={dictionary.guidesPage.all.cta}
                    compact
                    key={guide.slug}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

function GuideCard({
  guide,
  locale,
  dictionary,
  cta,
  compact = false,
}: {
  guide: Guide;
  locale: Locale;
  dictionary: Dictionary;
  cta: string;
  compact?: boolean;
}) {
  const summary = getGuideSummary(locale, guide.slug);
  const title = summary?.h1 ?? guide.h1;
  const description = summary?.description ?? guide.description;
  const category = summary?.category ?? dictionary.guidesPage.categories[guide.category];

  return (
    <Link className={compact ? "guide-card guide-card--compact" : "guide-card"} href={`/guides/${guide.slug}`}>
      {compact ? null : <span className="tag">{category}</span>}
      {compact ? <h4>{title}</h4> : <h3>{title}</h3>}
      <p>{description}</p>
      <span className={compact ? undefined : "button button--small button--ghost"}>
        {cta}
        {compact ? null : <ArrowRight size={15} />}
      </span>
    </Link>
  );
}
