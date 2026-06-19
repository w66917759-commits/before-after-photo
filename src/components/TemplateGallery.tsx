import { Wand2 } from "lucide-react";
import { comparisonTemplates, type ComparisonTemplate } from "@/lib/comparison-templates";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getTemplateName } from "@/lib/i18n/dictionaries";
import { localizedPath, type Locale } from "@/lib/i18n/locales";
import { renderTemplatePreviewSvg, svgToDataUri } from "@/lib/template-svg";

type TemplateGalleryProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function TemplateGallery({ locale, dictionary }: TemplateGalleryProps) {
  return (
    <section id="templates" className="layout-section" aria-labelledby="templates-heading">
      <div className="layout-section__heading">
        <span className="eyebrow">{dictionary.templates.eyebrow}</span>
        <h2 id="templates-heading">{dictionary.templates.heading}</h2>
        <p>{dictionary.templates.body}</p>
      </div>

      <div className="layout-grid layout-grid--library">
        {comparisonTemplates.map((template) => (
          <TemplateCard template={template} locale={locale} dictionary={dictionary} key={template.id} />
        ))}
      </div>
    </section>
  );
}

function TemplateCard({
  template,
  locale,
  dictionary,
}: {
  template: ComparisonTemplate;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const name = getTemplateName(locale, template.id, template.name);
  const preview = svgToDataUri(
    renderTemplatePreviewSvg(template, {
      labels: { before: dictionary.maker.before, after: dictionary.maker.after },
      showLabels: true,
    }),
  );

  return (
    <article className="layout-card" data-orientation={template.ratio === "16:9" ? "landscape" : "portrait"}>
      <a
        className="layout-card__preview"
        href={localizedPath("/#maker", locale)}
        aria-label={`${dictionary.templates.useAriaPrefix} ${name}`}
      >
        <img src={preview} alt={`${name} ${dictionary.maker.previewAria}`} />
      </a>
      <div className="layout-card__meta">
        <div>
          <h3>{name}</h3>
          <span>{template.ratio}</span>
        </div>
        <div className="layout-card__actions">
          <a className="button button--small button--primary" href={localizedPath("/#maker", locale)}>
            <Wand2 size={14} />
            {dictionary.templates.useButton}
          </a>
        </div>
      </div>
    </article>
  );
}
