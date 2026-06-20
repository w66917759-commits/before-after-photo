export type SeoLandingSection = "tools" | "use-cases" | "templates";

export type SeoLandingStep = {
  title: string;
  body: string;
};

export type SeoLandingFaq = {
  question: string;
  answer: string;
};

export type SeoLandingPage = {
  section: SeoLandingSection;
  slug: string;
  route: string;
  keyword: string;
  category: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bestFor: string[];
  sections: SeoLandingStep[];
  tips: string[];
  faqs: SeoLandingFaq[];
  relatedSlugs: string[];
  featured?: boolean;
  preview: {
    src: string;
    alt: string;
    ratio: "16:9" | "9:16";
  };
};

type SeoLandingPageInput = Omit<SeoLandingPage, "route">;

const seoLandingPageInputs: SeoLandingPageInput[] = [
  {
    section: "tools",
    slug: "free-before-and-after-photo-maker",
    keyword: "free before and after photo maker",
    category: "Free tool",
    title: "Free Before and After Photo Maker | Create a Side-by-Side PNG",
    description:
      "Use a free before and after photo maker to combine two pictures into one clean side-by-side PNG with crop controls, labels, and simple frames.",
    h1: "Free before and after photo maker",
    intro:
      "Create a clear before and after image from two photos without opening a full design app. Upload the two images, align the crop, keep the labels readable, and export one PNG.",
    bestFor: ["Quick social posts", "Project updates", "Original vs edited photos"],
    sections: [
      {
        title: "Start with two matching photos",
        body:
          "Use images that show the same subject, room, face, product, or edit from a similar angle so the comparison feels fair.",
      },
      {
        title: "Keep the layout simple",
        body:
          "A clean side-by-side frame usually works better than a busy collage because the change is easier to scan.",
      },
      {
        title: "Export one shareable image",
        body:
          "Download a single PNG that keeps both photos, labels, and frame together for posts, notes, portfolios, or messages.",
      },
    ],
    tips: [
      "Put the earlier photo on the left and the newer photo on the right.",
      "Use short labels such as Before and After, Original and Edited, or Then and Now.",
      "Crop out empty edges before exporting.",
    ],
    faqs: [
      {
        question: "Is the before and after photo maker free?",
        answer:
          "Yes. The maker is built for free PNG export without requiring an account.",
      },
      {
        question: "Do I need design software to make a before and after photo?",
        answer:
          "No. For most simple comparisons, uploading two photos, aligning them, and exporting one PNG is enough.",
      },
      {
        question: "Can I change the labels?",
        answer:
          "Yes. You can use Before and After or adjust the wording to match the comparison you are making.",
      },
    ],
    relatedSlugs: [
      "side-by-side-photo-maker",
      "photo-comparison-maker",
      "before-and-after-photo-templates",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/16x9/serif-line.png",
      alt: "A clean landscape before and after photo frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "tools",
    slug: "side-by-side-photo-maker",
    keyword: "side by side photo maker",
    category: "Side-by-side tool",
    title: "Side by Side Photo Maker | Compare Two Pictures Online",
    description:
      "Make a side-by-side photo from two pictures. Align each image, add simple labels, choose a clean frame, and export one comparison PNG.",
    h1: "Side by side photo maker",
    intro:
      "Use a side-by-side layout when two images need to be compared at the same time. It works for edits, versions, room changes, product options, and before and after photos.",
    bestFor: ["Original vs edited photos", "Version comparisons", "Product or room options"],
    sections: [
      {
        title: "Use equal visual weight",
        body:
          "Place both photos in matching slots so neither side feels larger or more important than the other.",
      },
      {
        title: "Choose labels based on intent",
        body:
          "Use Before and After for time-based changes, Original and Edited for photo edits, or A and B for neutral comparisons.",
      },
      {
        title: "Share one combined file",
        body:
          "A single PNG keeps the comparison together when it is posted, uploaded, or sent in a message.",
      },
    ],
    tips: [
      "Use the same orientation for both source photos when possible.",
      "Zoom each side until the subject sits at a similar size.",
      "Use a landscape frame for web pages and a vertical frame for stories.",
    ],
    faqs: [
      {
        question: "Is a side-by-side photo the same as a before and after photo?",
        answer:
          "The layout can be the same. A before and after photo specifically shows change over time, while a side-by-side photo can compare any two images.",
      },
      {
        question: "Can I make a side-by-side image without labels?",
        answer:
          "Yes. Labels help when the meaning is not obvious, but a clean image can work without them.",
      },
      {
        question: "Which format is best for side-by-side photos?",
        answer:
          "PNG is a reliable format for sharp labels, frames, and screenshots.",
      },
    ],
    relatedSlugs: [
      "before-and-after-picture-maker",
      "photo-comparison-maker",
      "landscape-before-and-after-photo-template",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/16x9/editorial-tag.png",
      alt: "A landscape side by side photo frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "tools",
    slug: "before-and-after-picture-maker",
    keyword: "before and after picture maker",
    category: "Picture maker",
    title: "Before and After Picture Maker | Make One Comparison Image",
    description:
      "Turn two pictures into one before and after image with simple crop controls, readable labels, and clean frame templates.",
    h1: "Before and after picture maker",
    intro:
      "A before and after picture works best when it shows one visible change without extra clutter. Use this maker to build the paired image and keep the result easy to understand.",
    bestFor: ["Home updates", "Photo edits", "Personal progress"],
    sections: [
      {
        title: "Match the subject first",
        body:
          "Use two pictures that show the same person, room, object, or project so the viewer does not have to guess what changed.",
      },
      {
        title: "Align the important area",
        body:
          "Pan and zoom each side so the main subject appears in a similar position in both frames.",
      },
      {
        title: "Keep the caption short",
        body:
          "Short labels preserve space for the photos and make the comparison easier to read on mobile screens.",
      },
    ],
    tips: [
      "Avoid adding claims that the picture does not prove.",
      "Use a neutral frame when the photos already contain enough detail.",
      "Download after checking the preview at a small size.",
    ],
    faqs: [
      {
        question: "Can I use regular phone pictures?",
        answer:
          "Yes. Phone photos work well when both images have similar framing and enough light.",
      },
      {
        question: "Should the before picture always be on the left?",
        answer:
          "Most viewers expect Before on the left and After on the right. Keep that order unless your audience uses another convention.",
      },
      {
        question: "Can this be used for business posts?",
        answer:
          "Yes, as long as you have permission to use the photos and avoid unsupported claims.",
      },
    ],
    relatedSlugs: [
      "free-before-and-after-photo-maker",
      "before-and-after-image-maker",
      "room-makeover-before-and-after-photo",
    ],
    preview: {
      src: "/frame-templates/16x9/luxury-caption.png",
      alt: "A polished before and after picture frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "tools",
    slug: "photo-comparison-maker",
    keyword: "photo comparison maker",
    category: "Comparison tool",
    title: "Photo Comparison Maker | Put Two Photos in One Frame",
    description:
      "Use a photo comparison maker to place two photos in one frame for edits, progress updates, product options, and before and after images.",
    h1: "Photo comparison maker",
    intro:
      "When two photos need to be judged together, a single comparison frame is easier than separate uploads. Use a clean layout so the difference stays visible.",
    bestFor: ["A/B comparisons", "Edit reviews", "Progress snapshots"],
    sections: [
      {
        title: "Choose comparison wording",
        body:
          "Before and After, Original and Edited, Then and Now, or Option A and Option B can all work depending on the context.",
      },
      {
        title: "Make the crop consistent",
        body:
          "A fair crop keeps both photos readable and prevents one side from dominating the comparison.",
      },
      {
        title: "Export for review or sharing",
        body:
          "Use the downloaded PNG in a document, social post, message, client note, or project archive.",
      },
    ],
    tips: [
      "Use neutral labels for non-time-based comparisons.",
      "Keep both photos the same size in the final image.",
      "Choose a frame orientation based on where the image will be used.",
    ],
    faqs: [
      {
        question: "What is a photo comparison maker?",
        answer:
          "It is a tool that combines two photos into one image so viewers can compare them side by side.",
      },
      {
        question: "Can I compare edited and unedited photos?",
        answer:
          "Yes. Use labels like Original and Edited if the comparison is about editing rather than time.",
      },
      {
        question: "Can I use the image in a presentation?",
        answer:
          "Yes. Export one PNG and place it into your deck, report, or notes.",
      },
    ],
    relatedSlugs: [
      "side-by-side-photo-maker",
      "before-and-after-collage-maker",
      "before-and-after-photo-templates",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/16x9/serif-line.png",
      alt: "A simple photo comparison frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "tools",
    slug: "before-and-after-collage-maker",
    keyword: "before and after collage maker",
    category: "Collage tool",
    title: "Before and After Collage Maker | Clean Two Photo Layouts",
    description:
      "Make a simple before and after collage from two photos. Use clean side-by-side frames instead of busy multi-photo layouts.",
    h1: "Before and after collage maker",
    intro:
      "For before and after images, a two-photo collage is usually stronger than a crowded layout. Keep the frame focused so the change is the first thing people notice.",
    bestFor: ["Two-photo collages", "Social posts", "Project summaries"],
    sections: [
      {
        title: "Keep the collage focused",
        body:
          "Use one before photo and one after photo when the goal is to explain a single change.",
      },
      {
        title: "Avoid over-decorating",
        body:
          "Simple frames, readable labels, and consistent spacing are usually enough for a polished comparison.",
      },
      {
        title: "Choose the output shape",
        body:
          "Use landscape for websites and wide posts, or vertical for stories and mobile-first sharing.",
      },
    ],
    tips: [
      "Do not mix unrelated photos in a before and after collage.",
      "Use consistent label placement.",
      "Leave the visual proof in the photos, not in decorative copy.",
    ],
    faqs: [
      {
        question: "Is this a full collage maker?",
        answer:
          "It is focused on two-photo before and after collages, not large multi-image scrapbook layouts.",
      },
      {
        question: "Can I make a vertical collage?",
        answer:
          "Yes. Choose a story-style frame when the image is meant for mobile sharing.",
      },
      {
        question: "Can I use custom labels?",
        answer:
          "Yes. Short custom labels work well for then-and-now, edit comparisons, and project versions.",
      },
    ],
    relatedSlugs: [
      "vertical-before-and-after-photo-template",
      "landscape-before-and-after-photo-template",
      "photo-comparison-maker",
    ],
    preview: {
      src: "/frame-templates/9x16/editorial-tag.png",
      alt: "A vertical before and after collage frame preview.",
      ratio: "9:16",
    },
  },
  {
    section: "tools",
    slug: "before-and-after-image-maker",
    keyword: "before and after image maker",
    category: "Image maker",
    title: "Before and After Image Maker | Combine Two Images Online",
    description:
      "Combine two images into one before and after PNG with labels, crop alignment, and simple landscape or vertical frames.",
    h1: "Before and after image maker",
    intro:
      "Use this image maker when you need one file that explains a visual change. It is built for real photos, screenshots, edits, and project images.",
    bestFor: ["Screenshots", "Photo edits", "Project images"],
    sections: [
      {
        title: "Use images that tell one story",
        body:
          "The comparison is strongest when both sides show one subject or one change rather than unrelated scenes.",
      },
      {
        title: "Line up the visual details",
        body:
          "Adjust zoom and position so the eye can compare the same area on both sides.",
      },
      {
        title: "Save a web-ready PNG",
        body:
          "PNG keeps labels and lines sharp, which is useful for before and after images with text or fine detail.",
      },
    ],
    tips: [
      "Use Original and Edited for retouching examples.",
      "Use Before and After for changes over time.",
      "Use a simple divider when both images are visually busy.",
    ],
    faqs: [
      {
        question: "Can I use screenshots instead of photos?",
        answer:
          "Yes. Screenshots can be compared when they show the same interface, design, or state.",
      },
      {
        question: "What file type can I export?",
        answer:
          "The maker exports PNG, which works well for framed images and labels.",
      },
      {
        question: "Can I make an image for a website page?",
        answer:
          "Yes. A landscape frame is usually a good fit for website content.",
      },
    ],
    relatedSlugs: [
      "photo-comparison-maker",
      "before-and-after-picture-maker",
      "landscape-before-and-after-photo-template",
    ],
    preview: {
      src: "/frame-templates/16x9/editorial-tag.png",
      alt: "A before and after image maker frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "use-cases",
    slug: "room-makeover-before-and-after-photo",
    keyword: "room makeover before and after photo",
    category: "Home projects",
    title: "Room Makeover Before and After Photo | Create a Clean Comparison",
    description:
      "Make a room makeover before and after photo from two pictures. Align the room, add simple labels, and export one shareable PNG.",
    h1: "Room makeover before and after photo",
    intro:
      "A room makeover comparison works best when the room is easy to recognize in both photos. Keep the frame simple so the layout, lighting, and changed details remain clear.",
    bestFor: ["Room refreshes", "Decluttering", "Interior updates"],
    sections: [
      {
        title: "Use the same viewpoint",
        body:
          "Stand in the same corner or doorway for both photos when possible so the room change is easy to compare.",
      },
      {
        title: "Crop around the changed area",
        body:
          "Remove distracting ceiling, floor, or doorway space if it does not help explain the makeover.",
      },
      {
        title: "Keep labels minimal",
        body:
          "Before and After is enough for most room makeovers. Let the photos carry the detail.",
      },
    ],
    tips: [
      "Use natural light or similar lighting in both photos.",
      "Avoid wide-angle distortion when comparing furniture or layout.",
      "Use a landscape frame for listings, blogs, and project pages.",
    ],
    faqs: [
      {
        question: "What makes a good room makeover before and after photo?",
        answer:
          "A similar camera position, consistent lighting, and a simple side-by-side frame make the change easier to see.",
      },
      {
        question: "Can I use this for rental or home project posts?",
        answer:
          "Yes. Use your own photos and avoid showing private details you do not want to publish.",
      },
      {
        question: "Should I add extra text to the image?",
        answer:
          "Usually no. Short labels are enough unless the viewer needs a date, room name, or project note.",
      },
    ],
    relatedSlugs: [
      "renovation-before-and-after-photo",
      "landscape-before-and-after-photo-template",
      "free-before-and-after-photo-maker",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/16x9/luxury-caption.png",
      alt: "A room makeover before and after landscape frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "use-cases",
    slug: "renovation-before-and-after-photo",
    keyword: "renovation before and after photo",
    category: "Home projects",
    title: "Renovation Before and After Photo | Make a Project Comparison",
    description:
      "Create a renovation before and after photo with aligned crops, clear labels, and a polished frame for project updates or portfolios.",
    h1: "Renovation before and after photo",
    intro:
      "Renovation photos can include a lot of detail, so the comparison needs structure. A simple frame helps viewers understand what changed without flipping between separate files.",
    bestFor: ["DIY projects", "Contractor updates", "Portfolio images"],
    sections: [
      {
        title: "Choose a recognizable angle",
        body:
          "Use photos from a similar distance and angle so walls, fixtures, and project boundaries are easy to match.",
      },
      {
        title: "Show the useful change",
        body:
          "Crop around the repaired, replaced, or redesigned area instead of trying to include every corner.",
      },
      {
        title: "Export one portfolio-friendly image",
        body:
          "A single PNG is easier to place on a website, estimate note, social post, or project record.",
      },
    ],
    tips: [
      "Use dates only if they help explain the project timeline.",
      "Keep claims factual and photo-supported.",
      "Choose a clean frame for busy construction details.",
    ],
    faqs: [
      {
        question: "Can I use this for contractor project photos?",
        answer:
          "Yes, if you have permission to use the images and the final comparison accurately represents the work.",
      },
      {
        question: "Which orientation is best for renovation photos?",
        answer:
          "Landscape usually works for rooms and exterior projects. Vertical can work for detail shots and mobile stories.",
      },
      {
        question: "Do I need a template for renovation comparisons?",
        answer:
          "A template helps keep spacing, labels, and proportions consistent across multiple project photos.",
      },
    ],
    relatedSlugs: [
      "room-makeover-before-and-after-photo",
      "before-and-after-photo-templates",
      "photo-comparison-maker",
    ],
    preview: {
      src: "/frame-templates/16x9/serif-line.png",
      alt: "A renovation before and after photo frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "use-cases",
    slug: "fitness-progress-photo-maker",
    keyword: "fitness progress photo maker",
    category: "Progress photos",
    title: "Fitness Progress Photo Maker | Before and After Progress Images",
    description:
      "Make a fitness progress photo from two pictures with consistent crop, simple labels, and a private-by-default comparison workflow.",
    h1: "Fitness progress photo maker",
    intro:
      "Fitness progress photos should stay honest and consistent. Use similar lighting, pose, distance, and crop so the comparison does not exaggerate the change.",
    bestFor: ["Personal records", "Habit tracking", "Private progress logs"],
    sections: [
      {
        title: "Keep the setup consistent",
        body:
          "Use similar lighting, pose, lens distance, and background if you want the comparison to be useful over time.",
      },
      {
        title: "Use careful labels",
        body:
          "Dates, weeks, or simple Before and After labels can help without turning the image into an unsupported claim.",
      },
      {
        title: "Decide before sharing",
        body:
          "Progress images can be personal. Review the frame and remove private details before posting publicly.",
      },
    ],
    tips: [
      "Use the same camera height for both photos.",
      "Keep private information out of mirrors and backgrounds.",
      "Save a private copy even if you do not post it.",
    ],
    faqs: [
      {
        question: "Can this make fitness before and after photos?",
        answer:
          "Yes. It can combine two fitness progress photos into one image, but it does not judge or verify health results.",
      },
      {
        question: "How do I make progress photos more fair?",
        answer:
          "Use consistent lighting, pose, distance, crop, and timing when possible.",
      },
      {
        question: "Should I share fitness progress photos publicly?",
        answer:
          "Only if you are comfortable sharing them. Some progress images are better kept private.",
      },
    ],
    relatedSlugs: [
      "weight-loss-before-and-after-photo",
      "vertical-before-and-after-photo-template",
      "free-before-and-after-photo-maker",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/9x16/serif-line.png",
      alt: "A vertical fitness progress before and after frame preview.",
      ratio: "9:16",
    },
  },
  {
    section: "use-cases",
    slug: "weight-loss-before-and-after-photo",
    keyword: "weight loss before and after photo",
    category: "Progress photos",
    title: "Weight Loss Before and After Photo | Make a Careful Progress Image",
    description:
      "Create a weight loss before and after photo layout with consistent framing, clear labels, and a careful privacy-first workflow.",
    h1: "Weight loss before and after photo",
    intro:
      "Weight loss comparison photos are personal and can be sensitive. The tool only arranges images; it does not make health claims or evaluate results.",
    bestFor: ["Private tracking", "Milestone records", "Careful progress comparisons"],
    sections: [
      {
        title: "Use consistent conditions",
        body:
          "Lighting, pose, camera distance, and crop all affect how a progress photo looks, so keep them as consistent as possible.",
      },
      {
        title: "Avoid unsupported claims",
        body:
          "Let the photos show what they show. Do not add claims about health, treatment, or guaranteed outcomes.",
      },
      {
        title: "Review privacy before export",
        body:
          "Check mirrors, backgrounds, faces, and identifying details before saving or sharing the final PNG.",
      },
    ],
    tips: [
      "Use dates only if they help your personal record.",
      "Crop gently and avoid misleading angles.",
      "Keep a private copy if public sharing is not needed.",
    ],
    faqs: [
      {
        question: "Is this a weight loss app?",
        answer:
          "No. It is only a photo layout tool for combining two images into one comparison.",
      },
      {
        question: "Can I use it for private progress tracking?",
        answer:
          "Yes. You can make a PNG for your own record without publishing it.",
      },
      {
        question: "What should I avoid in weight loss comparison photos?",
        answer:
          "Avoid misleading angles, unsupported claims, and private details you do not want others to see.",
      },
    ],
    relatedSlugs: [
      "fitness-progress-photo-maker",
      "vertical-before-and-after-photo-template",
      "photo-comparison-maker",
    ],
    preview: {
      src: "/frame-templates/9x16/luxury-caption.png",
      alt: "A vertical progress photo frame preview.",
      ratio: "9:16",
    },
  },
  {
    section: "use-cases",
    slug: "skincare-before-and-after-photo",
    keyword: "skincare before and after photo",
    category: "Sensitive photos",
    title: "Skincare Before and After Photo | Make a Careful Comparison",
    description:
      "Create a skincare before and after photo layout with simple framing, privacy-aware wording, and clear side-by-side comparison.",
    h1: "Skincare before and after photo",
    intro:
      "Skincare comparison photos often show close-up personal details. Use careful wording, avoid unsupported claims, and share only photos you are allowed to use.",
    bestFor: ["Personal skincare records", "Routine tracking", "Careful close-up comparisons"],
    sections: [
      {
        title: "Keep lighting and angle steady",
        body:
          "Small lighting changes can make skin photos look very different, so consistent setup matters.",
      },
      {
        title: "Use neutral labels",
        body:
          "Before and After, Week 1 and Week 4, or Morning and Evening can work depending on what you are documenting.",
      },
      {
        title: "Respect privacy and consent",
        body:
          "Only publish identifiable photos if you have permission and understand the rules that apply to your situation.",
      },
    ],
    tips: [
      "Avoid medical or treatment claims in the image.",
      "Crop out unrelated identifying details.",
      "Use a simple frame so close-up texture remains readable.",
    ],
    faqs: [
      {
        question: "Is this skincare or medical advice?",
        answer:
          "No. It only helps arrange photos. It does not provide skincare, medical, diagnosis, or treatment advice.",
      },
      {
        question: "Can I use it for private routine tracking?",
        answer:
          "Yes. You can create a comparison image for your own notes without sharing it publicly.",
      },
      {
        question: "What makes skincare comparisons more consistent?",
        answer:
          "Similar lighting, camera distance, facial angle, and crop make the comparison easier to read.",
      },
    ],
    relatedSlugs: [
      "vertical-before-and-after-photo-template",
      "before-and-after-picture-maker",
      "free-before-and-after-photo-maker",
    ],
    preview: {
      src: "/frame-templates/9x16/editorial-tag.png",
      alt: "A vertical skincare before and after frame preview.",
      ratio: "9:16",
    },
  },
  {
    section: "use-cases",
    slug: "old-photo-restoration-before-and-after",
    keyword: "old photo restoration before and after",
    category: "Creative edits",
    title: "Old Photo Restoration Before and After | Compare Original and Restored",
    description:
      "Make an old photo restoration before and after image by placing the original scan and restored version in one clean comparison frame.",
    h1: "Old photo restoration before and after",
    intro:
      "Restoration comparisons are easiest to understand when the original and restored photo stay aligned. Use one frame to show the improvement without hiding the old image.",
    bestFor: ["Restoration previews", "Family archives", "Editing portfolios"],
    sections: [
      {
        title: "Use the original scan",
        body:
          "Place the unedited scan or photo on one side so the restoration work has clear context.",
      },
      {
        title: "Match crop and scale",
        body:
          "Keep the face, object, or scene at a similar size in both versions so the repair is easy to compare.",
      },
      {
        title: "Label the versions clearly",
        body:
          "Original and Restored often reads better than Before and After for family photos and archival work.",
      },
    ],
    tips: [
      "Use a landscape frame for wider family photos.",
      "Use a vertical frame for portraits.",
      "Avoid cropping away damaged areas if they show the restoration value.",
    ],
    faqs: [
      {
        question: "Can I compare an original and restored photo?",
        answer:
          "Yes. Upload the original scan on one side and the restored version on the other.",
      },
      {
        question: "Which labels work best?",
        answer:
          "Original and Restored are usually clearer for photo restoration work.",
      },
      {
        question: "Can I use this for a restoration portfolio?",
        answer:
          "Yes, as long as you have the right to show the images.",
      },
    ],
    relatedSlugs: [
      "photo-comparison-maker",
      "landscape-before-and-after-photo-template",
      "before-and-after-image-maker",
    ],
    preview: {
      src: "/frame-templates/16x9/editorial-tag.png",
      alt: "An old photo restoration before and after frame preview.",
      ratio: "16:9",
    },
  },
  {
    section: "templates",
    slug: "before-and-after-photo-templates",
    keyword: "before and after photo templates",
    category: "Templates",
    title: "Before and After Photo Templates | Clean Frames for Two Photos",
    description:
      "Browse simple before and after photo template ideas for two-photo comparisons, including landscape and vertical frames.",
    h1: "Before and after photo templates",
    intro:
      "A good template gives the two photos room to do the work. Use clean spacing, readable labels, and a frame that fits where the final image will be shared.",
    bestFor: ["Reusable layouts", "Consistent posts", "Before and after galleries"],
    sections: [
      {
        title: "Choose by output shape",
        body:
          "Landscape templates work well for web pages and project notes. Vertical templates work well for stories and phone-first sharing.",
      },
      {
        title: "Keep labels readable",
        body:
          "Labels should be short, visible, and placed consistently so viewers understand the comparison quickly.",
      },
      {
        title: "Use one template family",
        body:
          "For a set of images, repeating the same frame style can make the collection feel cleaner.",
      },
    ],
    tips: [
      "Use neutral templates for sensitive or factual comparisons.",
      "Use stronger caption areas when the photos need context.",
      "Avoid templates that shrink the actual photos too much.",
    ],
    faqs: [
      {
        question: "What is a before and after photo template?",
        answer:
          "It is a prepared two-photo layout with slots, spacing, labels, and frame styling for a comparison image.",
      },
      {
        question: "Should I choose landscape or vertical?",
        answer:
          "Choose landscape for websites and horizontal posts. Choose vertical for stories and mobile-first sharing.",
      },
      {
        question: "Can templates be used for different topics?",
        answer:
          "Yes. The same simple frame can work for rooms, edits, progress photos, and restoration examples.",
      },
    ],
    relatedSlugs: [
      "vertical-before-and-after-photo-template",
      "landscape-before-and-after-photo-template",
      "free-before-and-after-photo-maker",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/preview-contact-sheet.png",
      alt: "A contact sheet of before and after photo frame templates.",
      ratio: "16:9",
    },
  },
  {
    section: "templates",
    slug: "vertical-before-and-after-photo-template",
    keyword: "vertical before and after photo template",
    category: "Vertical template",
    title: "Vertical Before and After Photo Template | Story-Ready Comparison",
    description:
      "Use a vertical before and after photo template for mobile stories, progress posts, portrait comparisons, and phone-first sharing.",
    h1: "Vertical before and after photo template",
    intro:
      "A vertical template gives before and after photos more presence on mobile screens. It is useful when the final image will be viewed in a story, reel, or portrait layout.",
    bestFor: ["Stories", "Portrait progress photos", "Mobile sharing"],
    sections: [
      {
        title: "Use vertical when mobile is primary",
        body:
          "A 9:16 style frame fills more of the screen in mobile contexts than a wide landscape layout.",
      },
      {
        title: "Keep the subject centered",
        body:
          "Vertical slots can feel tight, so align the main subject carefully on both sides.",
      },
      {
        title: "Check label size",
        body:
          "Labels must stay readable after the image is compressed or viewed on a phone.",
      },
    ],
    tips: [
      "Use vertical frames for portraits, progress photos, and stories.",
      "Avoid placing important details at the very top or bottom.",
      "Preview the image at phone size before posting.",
    ],
    faqs: [
      {
        question: "When should I use a vertical before and after template?",
        answer:
          "Use it when the final image is mainly for mobile viewing, stories, or portrait-style photos.",
      },
      {
        question: "Does vertical work for room photos?",
        answer:
          "It can, but landscape is often better for full room comparisons.",
      },
      {
        question: "Can I use vertical templates for progress photos?",
        answer:
          "Yes. Vertical layouts often work well for fitness, style, and personal progress records.",
      },
    ],
    relatedSlugs: [
      "landscape-before-and-after-photo-template",
      "fitness-progress-photo-maker",
      "before-and-after-collage-maker",
    ],
    featured: true,
    preview: {
      src: "/frame-templates/9x16/luxury-caption.png",
      alt: "A vertical before and after photo template preview.",
      ratio: "9:16",
    },
  },
  {
    section: "templates",
    slug: "landscape-before-and-after-photo-template",
    keyword: "landscape before and after photo template",
    category: "Landscape template",
    title: "Landscape Before and After Photo Template | Wide Comparison Frame",
    description:
      "Use a landscape before and after photo template for websites, room makeovers, renovation projects, edit comparisons, and wide posts.",
    h1: "Landscape before and after photo template",
    intro:
      "A landscape template gives two photos generous horizontal space. It is a strong default for websites, project pages, portfolio images, and room comparisons.",
    bestFor: ["Website pages", "Room comparisons", "Wide project posts"],
    sections: [
      {
        title: "Use landscape for wider subjects",
        body:
          "Rooms, exterior projects, screenshots, and horizontal photos often read better in a wide frame.",
      },
      {
        title: "Balance both photo slots",
        body:
          "Keep the before and after images the same size so the comparison feels direct and fair.",
      },
      {
        title: "Export for web placement",
        body:
          "A wide PNG can be placed into articles, case studies, project pages, and social previews.",
      },
    ],
    tips: [
      "Use landscape for room makeovers and renovation photos.",
      "Leave enough contrast around text labels.",
      "Use the same frame style across a portfolio set.",
    ],
    faqs: [
      {
        question: "When is a landscape template better?",
        answer:
          "Use landscape when the subject is wide or the final image will sit inside a website, blog, deck, or project page.",
      },
      {
        question: "Can I use landscape templates for photo edits?",
        answer:
          "Yes. They work well for original vs edited comparisons and screenshots.",
      },
      {
        question: "Does landscape work on mobile?",
        answer:
          "Yes, but a vertical template may fill more screen space in story-style contexts.",
      },
    ],
    relatedSlugs: [
      "vertical-before-and-after-photo-template",
      "room-makeover-before-and-after-photo",
      "photo-comparison-maker",
    ],
    preview: {
      src: "/frame-templates/16x9/luxury-caption.png",
      alt: "A landscape before and after photo template preview.",
      ratio: "16:9",
    },
  },
];

export const seoLandingPages: SeoLandingPage[] = seoLandingPageInputs.map((page) => ({
  ...page,
  route: `/${page.section}/${page.slug}`,
}));

export const seoLandingSectionLabels: Record<SeoLandingSection, string> = {
  tools: "Tools",
  "use-cases": "Use cases",
  templates: "Templates",
};

export function getSeoLandingPage(section: SeoLandingSection, slug: string) {
  return seoLandingPages.find((page) => page.section === section && page.slug === slug);
}

export function getSeoLandingPagesBySection(section: SeoLandingSection) {
  return seoLandingPages.filter((page) => page.section === section);
}

export function getRelatedSeoLandingPages(page: SeoLandingPage) {
  return page.relatedSlugs
    .map((slug) => seoLandingPages.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is SeoLandingPage => Boolean(candidate));
}

export function getFeaturedSeoLandingPages(limit = 6) {
  return seoLandingPages.filter((page) => page.featured).slice(0, limit);
}
