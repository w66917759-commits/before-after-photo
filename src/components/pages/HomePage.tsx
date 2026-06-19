import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Brush,
  Check,
  Crop,
  Download,
  Dumbbell,
  Home,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Store,
  UploadCloud,
} from "lucide-react";
import { PhotoMaker } from "@/components/PhotoMaker";
import { Reveal } from "@/components/Reveal";
import { TemplateGallery } from "@/components/TemplateGallery";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getGuideSummary } from "@/lib/i18n/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n/locales";
import { guides } from "@/lib/guides";

const howIcons = [UploadCloud, Crop, LayoutTemplate, Download];
const useCaseIcons = [Home, Dumbbell, Brush, Store];
const featuredGuides = guides.slice(0, 3);

export function HomePage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <main className="main product-main">
      <section className="tool-hero" aria-labelledby="hero-heading">
        <span className="eyebrow">
          <Sparkles size={14} />
          {dictionary.home.hero.eyebrow}
        </span>
        <h1 id="hero-heading">
          <span className="free-accent">{dictionary.home.hero.headingStart}</span>{" "}
          <span className="accent">{dictionary.home.hero.headingAccent}</span>
          {dictionary.home.hero.headingEnd}
        </h1>
        <p className="tool-hero__free">{dictionary.home.hero.freeLine}</p>
        <div className="home-trust">
          {dictionary.home.hero.trust.map((item) => (
            <span key={item}>
              <Check size={16} /> {item}
            </span>
          ))}
        </div>
      </section>

      <PhotoMaker locale={locale} dictionary={dictionary} />

      <section id="how-to-use" className="section how-section" aria-labelledby="how-to-use-heading">
        <Reveal className="section-heading section-heading--center">
          <div>
            <span className="eyebrow">{dictionary.home.how.eyebrow}</span>
            <h2 id="how-to-use-heading">{dictionary.home.how.heading}</h2>
            <p>{dictionary.home.how.body}</p>
          </div>
        </Reveal>
        <div className="how-grid">
          {dictionary.home.how.steps.map((step, index) => {
            const StepIcon = howIcons[index];
            return (
              <Reveal as="article" className="how-card" key={step.title} delay={index * 90}>
                <span className="how-card__index">{index + 1}</span>
                <StepIcon size={22} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal>
        <TemplateGallery locale={locale} dictionary={dictionary} />
      </Reveal>

      <section id="examples" className="section">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <LayoutTemplate size={15} />
              {dictionary.home.examples.eyebrow}
            </span>
            <h2>{dictionary.home.examples.heading}</h2>
            <p>{dictionary.home.examples.body}</p>
          </div>
          <Link className="button button--ghost" href={localizedPath("/examples", locale)}>
            {dictionary.home.examples.cta} <ArrowRight size={17} />
          </Link>
        </Reveal>
        <div className="idea-grid">
          {dictionary.home.examples.useCases.map((useCase, index) => {
            const UseCaseIcon = useCaseIcons[index];
            return (
              <Reveal as="article" className="idea-card" key={useCase.title} delay={index * 90}>
                <UseCaseIcon size={22} />
                <h3>{useCase.title}</h3>
                <p>{useCase.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <div>
            <span className="eyebrow">
              <BookOpenText size={15} />
              {dictionary.home.guides.eyebrow}
            </span>
            <h2>{dictionary.home.guides.heading}</h2>
            <p>{dictionary.home.guides.body}</p>
          </div>
          <Link className="button button--ghost" href={localizedPath("/guides", locale)}>
            {dictionary.home.guides.cta} <ArrowRight size={17} />
          </Link>
        </Reveal>
        <div className="guide-grid guide-grid--featured">
          {featuredGuides.map((guide, index) => {
            const summary = getGuideSummary(locale, guide.slug);
            return (
              <Reveal as="article" className="guide-card" key={guide.slug} delay={index * 90}>
                <Link href={`/guides/${guide.slug}`}>
                  <span className="tag">{summary?.category ?? dictionary.guidesPage.categories[guide.category]}</span>
                  <h3>{summary?.h1 ?? guide.h1}</h3>
                  <p>{summary?.description ?? guide.description}</p>
                  <span className="button button--small button--ghost">
                    {dictionary.home.guides.cardCta} <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="privacy" className="privacy-section" aria-labelledby="privacy-heading">
        <Reveal as="div" className="privacy-panel">
          <div>
            <span className="eyebrow">
              <ShieldCheck size={15} />
              {dictionary.home.privacy.eyebrow}
            </span>
            <h2 id="privacy-heading">{dictionary.home.privacy.heading}</h2>
            <p>{dictionary.home.privacy.body}</p>
          </div>
          <Link className="button button--primary" href="#maker">
            {dictionary.home.privacy.cta} <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
