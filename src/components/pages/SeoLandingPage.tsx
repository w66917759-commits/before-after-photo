import Link from "next/link";
import { ArrowRight, Check, FileText, LayoutTemplate, ShieldCheck, Wand2 } from "lucide-react";
import { getRelatedSeoLandingPages, type SeoLandingPage } from "@/lib/seo-pages";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const relatedPages = getRelatedSeoLandingPages(page);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: absoluteUrl(page.route),
          },
        ],
      },
      {
        "@type": "WebPage",
        name: page.h1,
        description: page.description,
        url: absoluteUrl(page.route),
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(page.preview.src),
          caption: page.preview.alt,
        },
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        url: absoluteUrl("/"),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Two photo upload",
          "Before and after labels",
          "Crop and alignment controls",
          "Landscape and vertical frames",
          "PNG export",
        ],
      },
      {
        "@type": "HowTo",
        name: `How to make ${page.keyword}`,
        description: page.description,
        step: page.sections.map((section, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: section.title,
          text: section.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="seo-landing-hero">
        <div className="seo-landing-hero__copy">
          <span className="eyebrow">
            <LayoutTemplate size={15} />
            {page.category}
          </span>
          <h1>{page.h1}</h1>
          <p className="lead">{page.intro}</p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/#maker">
              <Wand2 size={18} />
              Open maker
            </Link>
            <Link className="button button--ghost" href="/guides">
              Read guides <ArrowRight size={17} />
            </Link>
          </div>
          <div className="seo-pill-list" aria-label="Best use cases">
            {page.bestFor.map((item) => (
              <span key={item}>
                <Check size={15} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="seo-preview-card">
          <img src={page.preview.src} alt={page.preview.alt} />
          <div className="seo-preview-card__meta">
            <span>{page.preview.ratio}</span>
            <strong>{page.keyword}</strong>
          </div>
        </div>
      </section>

      <div className="article-layout seo-landing-layout">
        <div className="article-main">
          <section className="panel article-section">
            <span className="eyebrow">
              <FileText size={15} />
              Workflow
            </span>
            <h2>How to use this before and after layout</h2>
            <ul className="steps">
              {page.sections.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel article-section">
            <span className="eyebrow">
              <ShieldCheck size={15} />
              Practical tips
            </span>
            <h2>Make the comparison easier to trust</h2>
            <ul className="checklist">
              {page.tips.map((tip) => (
                <li key={tip}>
                  <Check size={16} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel article-section">
            <h2>FAQ</h2>
            <div className="faq-list">
              {page.faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="article-sidebar">
          <section className="panel">
            <h2>Best for</h2>
            <div className="tag-row">
              {page.bestFor.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2>Quick start</h2>
            <p>
              Open the maker, upload two photos, align each crop, choose a frame, and export a PNG
              for {page.keyword}.
            </p>
            <Link className="button button--primary" href="/#maker">
              Start with two photos
            </Link>
          </section>
        </aside>
      </div>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Related pages</span>
            <h2>More ways to make before and after photos</h2>
          </div>
        </div>
        <div className="guide-grid">
          {relatedPages.map((related) => (
            <Link className="guide-card guide-card--compact" href={related.route} key={related.slug}>
              <span className="tag">{related.category}</span>
              <h3>{related.h1}</h3>
              <p>{related.description}</p>
              <span>Open page</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
