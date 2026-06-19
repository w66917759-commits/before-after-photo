# SEO Page Plan: Before and After Photo Case Pages

Date: 2026-06-18

## Strategy

Each retained keyword gets one dedicated case page under `/examples/{slug}`. The page is not a thin SEO doorway page: it must contain the matching composed image, a preset entry into the photo maker, unique use-case copy, privacy guidance, visible FAQ content, image credits, and links to adjacent cases.

This keeps the page useful for users while giving Google clear image context. Google Search Central recommends descriptive filenames, titles, alt text, and placing images near relevant text. It also warns against pages created only to funnel search visitors into another part of a site.

References:

- [Google Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google doorway pages guidance](https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages)
- [Google helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## URL Architecture

- Homepage: `/`
  - Primary intent: before and after photo maker.
  - Hosts the full tool and links to the highest-priority case pages.
- Case hub: `/examples`
  - Lists all safe example templates by category.
  - Links to every case page and shows thumbnail cards.
- Case pages: `/examples/{slug}`
  - One retained keyword per page.
  - Uses its matching image from `public/seo-assets/composed/`.
- Skipped topics:
  - No pages for celebrity, drug, meth, explicit waxing, private body surgery, or high-risk medical-condition queries until there is a legal/compliance-approved content policy and safe imagery.

## Required Case Page Template

Every case page should contain:

- Hero: H1, short use-case description, composed WebP image, and CTA to open the tool with this preset.
- Template preset: default labels, aspect ratio, visual category, and suggested export format.
- How it works: 3 short steps focused on upload, align/crop, export.
- Privacy block: browser-local processing, no image upload by default, remove identifying information for medical or cosmetic photos.
- Use-case guidance: one short paragraph unique to the keyword category.
- FAQ: 3 visible questions and answers. Do not hide FAQ text only in structured data.
- Related examples: 3-5 internal links from the same or adjacent category.
- Credit: source title, author, license, and landing URL from `public/seo-assets/credits.json`.

## Metadata Rules

- Title format: `{Primary Keyword In Title Case} Template | Before & After Photo Maker`
- Description format: `Create a clean {topic} before and after photo layout with labels, frame, and export-ready preview. Images are processed locally in your browser.`
- Canonical: self canonical for each page.
- Image alt text: describe the page-specific comparison frame, not generic "image".
- Open Graph image: use the composed WebP.
- Structured data:
  - `BreadcrumbList` for Home > Examples > Case.
  - `ImageObject` for the composed example image.
  - `FAQPage` only when the FAQ text is visibly rendered.
  - Keep all structured data consistent with visible page content.

## Page Inventory

| Priority | Route | Primary keyword | Category |
| --- | --- | --- | --- |
| P0 | `/examples/bleph-before-after-photos` | bleph before after photos | medical-clean |
| P0 | `/examples/eyebrow-microblading-before-and-after-photos` | eyebrow microblading before and after photos | beauty-soft |
| P0 | `/examples/before-and-after-acne-treatment-photos` | before and after acne treatment photos | beauty-soft |
| P0 | `/examples/blepharoplasty-before-after-photos` | blepharoplasty before after photos | medical-clean |
| P0 | `/examples/before-and-after-photos-of-teeth-whitening` | before and after photos of teeth whitening | dental-white |
| P1 | `/examples/blepharoplasty-before-and-after-photos` | blepharoplasty before and after photos | medical-clean |
| P1 | `/examples/before-and-after-photos-of-lip-augmentation` | before and after photos of lip augmentation | beauty-soft |
| P1 | `/examples/braces-photos-before-and-after` | braces photos before and after | dental-white |
| P1 | `/examples/before-and-after-photos-of-braces` | before and after photos of braces | dental-white |
| P1 | `/examples/before-and-after-photos-of-eyelash-extensions` | before and after photos of eyelash extensions | beauty-soft |
| P1 | `/examples/dental-braces-before-and-after-photos` | dental braces before and after photos | dental-white |
| P1 | `/examples/dental-veneers-before-after-photos` | dental veneers before after photos | dental-white |
| P2 | `/examples/eyelid-surgery-before-and-after-photos` | eyelid surgery before and after photos | medical-clean |
| P2 | `/examples/lip-augmentation-before-and-after-photos` | lip augmentation before and after photos | beauty-soft |
| P2 | `/examples/before-and-after-photo-consent-form-medical-spa-requirements` | before and after photo consent form medical spa requirements | document-consent |
| P2 | `/examples/before-after-invisalign-photos` | before after invisalign photos | dental-white |
| P2 | `/examples/before-and-after-photos` | before and after photos | neutral-frame |
| P2 | `/examples/before-and-after-weight-loss-photos` | before and after weight loss photos | fitness-neutral |
| P2 | `/examples/laser-tattoo-removal-photos-before-after` | laser tattoo removal photos before after | medical-clean |

## Internal Linking

- Homepage links to the case hub and 6 highest-priority cases.
- Case hub links to all cases and groups them by category.
- Every case page links back to:
  - `/`
  - `/examples`
  - 3-5 related examples from the same category.
- Medical-clean pages should cross-link to consent-form guidance.
- Dental pages should cross-link among braces, whitening, veneers, and aligner examples.
- Beauty pages should cross-link among eyebrow, eyelash, acne, and lip examples.

## Acceptance Criteria

- Every composed asset has exactly one public case page.
- Every case page has a unique title, H1, description, visible copy, FAQ, and image alt text.
- Every case page uses the matching WebP filename from `public/seo-assets/composed/`.
- No high-risk skipped keyword has a generated page.
- Case pages are included in sitemap and reachable from `/examples`.
- Page copy clearly says the sample is not a medical result or treatment claim.
