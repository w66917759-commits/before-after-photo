export const siteConfig = {
  name: "Before & After Photo Maker",
  shortName: "Before After Photo",
  description:
    "Make a before and after photo or side-by-side image from two pictures with crop controls, clean frames, and PNG export.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://beforeandafterpic.com",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
