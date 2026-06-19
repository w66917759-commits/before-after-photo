import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileCheck2, LockKeyhole, Wand2 } from "lucide-react";
import { ExampleCard } from "@/components/ExampleCard";
import {
  categoryLabels,
  getAssetCredit,
  getRelatedPages,
  getSeoPage,
  seoPages,
} from "@/lib/seo-pages";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: page.route,
    },
    openGraph: {
      type: "article",
      title: page.title,
      description: page.description,
      url: page.route,
      images: [
        {
          url: page.image,
          width: 1600,
          height: 1000,
          alt: page.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export default async function ExamplePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const relatedPages = getRelatedPages(page);
  const credit = getAssetCredit(page.slug);
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
            name: "Examples",
            item: absoluteUrl("/examples"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.h1,
            item: absoluteUrl(page.route),
          },
        ],
      },
      {
        "@type": "ImageObject",
        contentUrl: absoluteUrl(page.image),
        name: page.h1,
        description: page.imageAlt,
        creditText: credit ? `${credit.source_title} by ${credit.author}` : siteConfig.name,
        license: credit?.license ? `https://creativecommons.org/licenses/${credit.license}/` : undefined,
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
      <section className="page-hero">
        <div>
          <span className="eyebrow">{categoryLabels[page.category]}</span>
          <h1>{page.h1}</h1>
          <p className="lead">{page.description}</p>
          <div className="hero-actions">
            <Link className="button button--primary" href={`/#maker`}>
              <Wand2 size={18} />
              Open this maker
            </Link>
            <Link className="button button--ghost" href="/examples">
              All examples <ArrowRight size={17} />
            </Link>
          </div>
          <div className="metrics">
            <div className="metric">
              <span>Keyword rank</span>
              <strong>#{page.rank}</strong>
            </div>
            <div className="metric">
              <span>Priority</span>
              <strong>{page.priority}</strong>
            </div>
            <div className="metric">
              <span>Frame</span>
              <strong>{categoryLabels[page.category]}</strong>
            </div>
          </div>
        </div>
        <div className="panel page-hero__image">
          <img src={page.image} alt={page.imageAlt} />
        </div>
      </section>

      <div className="content-grid">
        <div>
          <section className="panel">
            <span className="eyebrow">
              <FileCheck2 size={15} />
              Template preset
            </span>
            <h2>Use this layout for {page.keyword}</h2>
            <p>{page.useCaseCopy}</p>
            <ul className="steps">
              <li>
                <span>1</span>
                <div>
                  <strong>Upload two photos</strong>
                  <p>Choose the before and after images you want to compare.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <strong>Apply the {categoryLabels[page.category]} frame</strong>
                  <p>
                    Use labels, a clean divider, and a consistent crop so the comparison is easy to
                    read.
                  </p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <strong>Export one album image</strong>
                  <p>
                    Download a single web-ready image for a page, portfolio, or internal review.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="panel">
            <span className="eyebrow">
              <LockKeyhole size={15} />
              Privacy note
            </span>
            <h2>Keep personal photos controlled</h2>
            <p>
              Preview and crop in the browser. Final rendering sends the selected images once to
              create the PNG, and the app does not save them to a gallery or database. Use your own
              photos and remove identifying details before sharing sensitive images.
            </p>
          </section>

          <section className="panel">
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

        <aside>
          <section className="panel">
            <h2>Preset details</h2>
            <div className="credit-list">
              <span>Before label: {page.preset.labelBefore}</span>
              <span>After label: {page.preset.labelAfter}</span>
              <span>Aspect ratio: {page.preset.aspectRatio}</span>
              <span>Export format: {page.preset.exportFormat.toUpperCase()}</span>
            </div>
          </section>

          <section className="panel">
            <h2>Image credit</h2>
            {credit ? (
              <div className="credit-list">
                <span>Source: {credit.source_provider}</span>
                <span>Title: {credit.source_title}</span>
                <span>Author: {credit.author}</span>
                <span>
                  License: {credit.license.toUpperCase()}
                  {credit.license_version ? ` ${credit.license_version}` : ""}
                </span>
                <a href={credit.source_landing_url} rel="noreferrer" target="_blank">
                  View source
                </a>
              </div>
            ) : (
              <p>Credit metadata is not available for this image.</p>
            )}
          </section>
        </aside>
      </div>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Related examples</span>
            <h2>More comparison templates</h2>
          </div>
        </div>
        <div className="example-grid">
          {relatedPages.map((related) => (
            <ExampleCard key={related.slug} page={related} />
          ))}
        </div>
      </section>
    </main>
  );
}
