import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, FileText, LockKeyhole, Wand2 } from "lucide-react";
import { getGuide, getRelatedGuides, guides } from "@/lib/guides";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `/guides/${guide.slug}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const relatedGuides = getRelatedGuides(guide);
  const articleBody = guide.sections
    .map((section) => [section.heading, section.body, ...(section.items ?? [])].join(" "))
    .join(" ");

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
            name: "Guides",
            item: absoluteUrl("/guides"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.h1,
            item: absoluteUrl(`/guides/${guide.slug}`),
          },
        ],
      },
      {
        "@type": "Article",
        headline: guide.h1,
        description: guide.description,
        articleSection: guide.category,
        articleBody,
        mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
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

      <article>
        <section className="seo-page-hero guide-hero">
          <span className="eyebrow">
            <FileText size={15} />
            {guide.category}
          </span>
          <h1>{guide.h1}</h1>
          <p className="lead">{guide.description}</p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/#maker">
              <Wand2 size={18} />
              Open maker
            </Link>
            <Link className="button button--ghost" href="/guides">
              All guides <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <div className="article-layout">
          <div className="article-main">
            {guide.sections.map((section) => (
              <section className="panel article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.items ? (
                  <ul className="checklist">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="panel article-section">
              <h2>FAQ</h2>
              <div className="faq-list">
                {guide.faqs.map((faq) => (
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
              <span className="eyebrow">
                <LockKeyhole size={15} />
                Simple note
              </span>
              <h2>Use your own photos</h2>
              <p>
                These guides use plain instructions instead of borrowed result
                images. Upload photos you have the right to use, then export one
                clean comparison.
              </p>
              <Link className="button button--primary" href="/#maker">
                Start with two photos
              </Link>
            </section>
          </aside>
        </div>
      </article>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Related guides</span>
            <h2>Keep reading</h2>
          </div>
        </div>
        <div className="guide-grid">
          {relatedGuides.map((related) => (
            <Link className="guide-card guide-card--compact" href={`/guides/${related.slug}`} key={related.slug}>
              <span className="tag">{related.category}</span>
              <h3>{related.h1}</h3>
              <p>{related.description}</p>
              <span>Read guide</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
