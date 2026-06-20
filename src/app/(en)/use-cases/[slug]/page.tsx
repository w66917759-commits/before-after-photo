import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/pages/SeoLandingPage";
import { getSeoLandingMetadata } from "@/lib/seo-page-metadata";
import { getSeoLandingPage, getSeoLandingPagesBySection } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const section = "use-cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeoLandingPagesBySection(section).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(section, slug);
  if (!page) return {};
  return getSeoLandingMetadata(page);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(section, slug);
  if (!page) notFound();

  return <SeoLandingPageView page={page} />;
}
