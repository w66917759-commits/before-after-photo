export type GuideCategory =
  | "How-to"
  | "Layout"
  | "Use cases"
  | "Privacy"
  | "Memories"
  | "Progress";

export type GuideSection = {
  heading: string;
  body: string;
  items?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: GuideCategory;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedSlugs: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-make-a-before-and-after-photo",
    title: "How to Make a Before and After Photo | Before & After Photo Maker",
    description:
      "Learn how to make a clear before and after photo from two pictures with simple framing, alignment, labels, and PNG export.",
    h1: "How to make a before and after photo",
    category: "How-to",
    sections: [
      {
        heading: "Start with two photos that explain the same change",
        body:
          "A good before and after photo is easy to read because both pictures show the same subject from a similar angle. Use photos from the same distance when you can, then crop each side so the important area lines up.",
      },
      {
        heading: "Use a simple side-by-side layout",
        body:
          "For most everyday projects, a side-by-side frame is clearer than a busy collage. Put the older photo on the left, the newer photo on the right, and keep the labels short.",
      },
      {
        heading: "Quick checklist",
        body:
          "Before you export, check the comparison as if someone is seeing it for the first time.",
        items: [
          "Use the same subject in both photos.",
          "Crop out distracting edges and empty space.",
          "Keep Before and After labels readable.",
          "Avoid adding claims that the photos do not prove.",
          "Download one PNG when the change is clear at a glance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a design app to make a before and after photo?",
        answer:
          "No. A focused before and after photo maker is enough for most use cases: upload two photos, align the crop, choose a clean frame, and export one image.",
      },
      {
        question: "Which side should the before photo go on?",
        answer:
          "Most people expect Before on the left and After on the right. Keep that order unless your audience already uses another convention.",
      },
      {
        question: "Can I use the same layout for home projects and personal progress?",
        answer:
          "Yes. The same basic layout works for home updates, repairs, edits, memories, and progress tracking when the two photos are easy to compare.",
      },
    ],
    relatedSlugs: [
      "side-by-side-photo-vs-before-after-photo",
      "before-and-after-photo-use-cases",
      "progress-photo-ideas",
    ],
  },
  {
    slug: "side-by-side-photo-vs-before-after-photo",
    title: "Side by Side Photo vs Before and After Photo | Before & After Photo Maker",
    description:
      "Understand when to use a side-by-side photo, when to call it a before and after photo, and how to choose the clearest comparison layout.",
    h1: "Side-by-side photo vs before and after photo",
    category: "Layout",
    sections: [
      {
        heading: "The layout can be the same, but the intent is different",
        body:
          "A side-by-side photo simply places two images next to each other. A before and after photo adds a time-based meaning: one image shows the earlier state, and the other shows the later state.",
      },
      {
        heading: "Use side-by-side when comparison matters more than time",
        body:
          "Side-by-side works well for photo edits, design versions, product variants, color choices, and other comparisons where neither photo needs to be the older one.",
      },
      {
        heading: "Quick checklist",
        body:
          "Choose the wording that matches what the viewer needs to understand.",
        items: [
          "Use Before and After when the photos show change over time.",
          "Use Original and Edited for photo editing comparisons.",
          "Use Version A and Version B when neither image is final.",
          "Keep both images the same size so the comparison feels fair.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a before and after photo always side by side?",
        answer:
          "No, but side by side is the most common format because it makes the change easy to scan without asking viewers to swipe or compare separate images.",
      },
      {
        question: "Can I make a side-by-side image without Before and After labels?",
        answer:
          "Yes. Use neutral labels like Original, Edited, Option A, Option B, Then, Now, or no labels if the context is obvious.",
      },
      {
        question: "Which format is better for social posts?",
        answer:
          "A single side-by-side PNG is usually easier to share because it keeps the comparison together in feeds, messages, and posts.",
      },
    ],
    relatedSlugs: [
      "how-to-make-a-before-and-after-photo",
      "before-and-after-photo-use-cases",
      "meaningful-before-and-after-photo-ideas",
    ],
  },
  {
    slug: "before-and-after-photo-use-cases",
    title: "Before and After Photo Use Cases | Before & After Photo Maker",
    description:
      "Explore practical before and after photo use cases for home projects, repairs, edits, memories, personal records, and small service posts.",
    h1: "Before and after photo use cases",
    category: "Use cases",
    sections: [
      {
        heading: "Everyday projects are often the best fit",
        body:
          "Before and after photos do not need to show a dramatic transformation. They can make a room cleanup, repair, garden update, photo edit, or small personal milestone easier to understand.",
      },
      {
        heading: "Use one clear image when the viewer needs context",
        body:
          "A paired image helps when the change is visible but easy to miss in separate photos. It is useful for personal records, social posts, small service updates, and project notes.",
      },
      {
        heading: "Quick checklist",
        body:
          "Use this list to decide whether a before and after image is worth making.",
        items: [
          "The two photos show the same subject or place.",
          "The change is visible after cropping.",
          "A single image would be easier to understand than two separate uploads.",
          "The labels can stay simple.",
          "You have the right to use and share both photos.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are good everyday before and after photo ideas?",
        answer:
          "Home cleanups, room makeovers, repairs, photo restorations, edits, garden updates, style changes, and personal progress records are all good fits.",
      },
      {
        question: "Should every use case get its own SEO page?",
        answer:
          "No. Many use cases are better handled inside a practical guide instead of thin pages that repeat the same tool pitch.",
      },
      {
        question: "Do I need sample photos for every use case?",
        answer:
          "No. A guide can be useful with product screenshots, blank frame examples, checklists, and clear instructions instead of borrowed or artificial result images.",
      },
    ],
    relatedSlugs: [
      "how-to-make-a-before-and-after-photo",
      "meaningful-before-and-after-photo-ideas",
      "progress-photo-ideas",
    ],
  },
  {
    slug: "medical-before-and-after-photo-guidelines",
    title: "Medical Before and After Photo Guidelines | Before & After Photo Maker",
    description:
      "A practical, non-medical guide to privacy, consent, labels, and careful wording when arranging medical or cosmetic before and after photos.",
    h1: "Medical before and after photo guidelines",
    category: "Privacy",
    sections: [
      {
        heading: "Treat medical and cosmetic photos as sensitive",
        body:
          "Medical, dental, cosmetic, and skin-related photos can include private information even when they look simple. Only use photos you are allowed to use, and avoid sharing identifying details unless the person has clearly agreed.",
      },
      {
        heading: "Use careful wording",
        body:
          "A side-by-side layout can make documentation easier to read, but it should not imply a guaranteed result. This tool only helps arrange images. It does not provide medical advice, diagnosis, or treatment guidance.",
      },
      {
        heading: "Quick checklist",
        body:
          "Before sharing a medical or cosmetic comparison, slow down and review the privacy risk.",
        items: [
          "Use authorized photos only.",
          "Remove names, dates of birth, charts, and other identifiers.",
          "Avoid claims that the image does not prove.",
          "Do not imply that one person's result will happen for someone else.",
          "Follow the rules of the clinic, workplace, or platform where the image will appear.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this medical advice?",
        answer:
          "No. This guide is about arranging photos carefully. It is not medical advice, legal advice, diagnosis, treatment guidance, or a consent policy.",
      },
      {
        question: "Can I publish patient before and after photos with this tool?",
        answer:
          "Only if you have the right authorization and follow the rules that apply to your situation. When in doubt, do not publish identifiable medical images.",
      },
      {
        question: "Why include medical use cases at all?",
        answer:
          "People search for medical before and after photo workflows, but the safer and more useful approach is to explain privacy, consent, and careful presentation instead of showing example results.",
      },
    ],
    relatedSlugs: [
      "side-by-side-photo-vs-before-after-photo",
      "before-and-after-photo-use-cases",
      "progress-photo-ideas",
    ],
  },
  {
    slug: "meaningful-before-and-after-photo-ideas",
    title: "Meaningful Before and After Photo Ideas | Before & After Photo Maker",
    description:
      "Simple before and after photo ideas for memories, family moments, pets, moves, travel, old photos, and other personal milestones.",
    h1: "Meaningful before and after photo ideas",
    category: "Memories",
    sections: [
      {
        heading: "A comparison can be quiet and personal",
        body:
          "A before and after photo does not have to prove a big transformation. It can place two moments together so a change is easier to remember.",
      },
      {
        heading: "Use the layout for memories, not just results",
        body:
          "Then-and-now photos work well for family moments, pets, growing plants, moving homes, travel returns, old photo restoration, graduation, and small life changes.",
      },
      {
        heading: "Quick checklist",
        body:
          "Keep the image simple so the memory stays at the center.",
        items: [
          "Choose two photos with a clear connection.",
          "Use labels like Then and Now if Before and After feels too clinical.",
          "Keep captions short and personal.",
          "Crop gently so faces or details are not awkwardly cut off.",
          "Export one image that is easy to save or share.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a then-and-now photo?",
        answer:
          "A then-and-now photo places an older image next to a newer image, usually to show time, memory, or change rather than a formal result.",
      },
      {
        question: "Should meaningful photos use Before and After labels?",
        answer:
          "Not always. Then and Now, Earlier and Today, or short custom labels can feel warmer for family, pets, and memory-focused photos.",
      },
      {
        question: "Can I use this for old photo restoration?",
        answer:
          "Yes. Put the original scan on one side and the restored version on the other so the improvement is easy to see.",
      },
    ],
    relatedSlugs: [
      "before-and-after-photo-use-cases",
      "side-by-side-photo-vs-before-after-photo",
      "how-to-make-a-before-and-after-photo",
    ],
  },
  {
    slug: "progress-photo-ideas",
    title: "Progress Photo Ideas | Before & After Photo Maker",
    description:
      "Practical progress photo ideas for fitness, habits, learning, style changes, projects, and personal milestones without overclaiming results.",
    h1: "Progress photo ideas",
    category: "Progress",
    sections: [
      {
        heading: "Progress photos are useful when they stay honest",
        body:
          "Progress photos can help with fitness, habits, learning, style changes, projects, and personal records. The goal is to make a change easier to see, not to exaggerate it.",
      },
      {
        heading: "Keep the setup consistent",
        body:
          "If you want a fair comparison, use similar lighting, distance, angle, and crop. This matters for fitness progress, creative work, plant growth, room updates, and any change tracked over time.",
      },
      {
        heading: "Quick checklist",
        body:
          "Use this before sharing or saving a progress image.",
        items: [
          "Use similar framing for both photos.",
          "Add a simple date or label only when it helps.",
          "Avoid claims that the photos cannot support.",
          "Keep private details out of the frame.",
          "Export one image for your record, post, or project note.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use this for fitness progress photos?",
        answer:
          "Yes. Use consistent lighting, pose, distance, and crop so the comparison is clearer and less misleading.",
      },
      {
        question: "What else counts as a progress photo?",
        answer:
          "Learning progress, room projects, plant growth, art drafts, habit tracking, repairs, and style changes can all work as progress photos.",
      },
      {
        question: "Should I share every progress image publicly?",
        answer:
          "No. Some progress images are better kept private. Share only photos you are comfortable making public and remove details you do not want others to see.",
      },
    ],
    relatedSlugs: [
      "how-to-make-a-before-and-after-photo",
      "before-and-after-photo-use-cases",
      "medical-before-and-after-photo-guidelines",
    ],
  },
];

export const guideCategories = Array.from(new Set(guides.map((guide) => guide.category)));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.relatedSlugs
    .map((slug) => getGuide(slug))
    .filter((related): related is Guide => Boolean(related));
}

export function getGuidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category);
}
