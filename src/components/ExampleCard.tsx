import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryLabels, type SeoPage } from "@/lib/seo-pages";

export function ExampleCard({ page }: { page: SeoPage }) {
  return (
    <Link className="example-card" href={page.route}>
      <div className="example-card__body">
        <div className="tag-row">
          <span className="tag">{page.priority}</span>
          <span className="tag">{categoryLabels[page.category]}</span>
        </div>
        <h3>{page.h1.replace(" Template", "")}</h3>
        <p>{page.description}</p>
        <span className="button button--small button--ghost">
          View details <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
