"use client";

import {
  type DragEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Check,
  Crop,
  Download,
  Image as ImageIcon,
  Move,
  RefreshCw,
  UploadCloud,
  Wand2,
} from "lucide-react";
import {
  clampCrop,
  comparisonTemplates,
  defaultCrop,
  getComparisonTemplate,
  type ComparisonTemplate,
  type CropState,
  type SlotKey,
  type TemplateSlot,
} from "@/lib/comparison-templates";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getTemplateName } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import {
  renderTemplatePreviewSvg,
  renderTemplateBaseSvg,
  renderTemplateOverlaySvg,
  svgToDataUri,
} from "@/lib/template-svg";

type ImageState = {
  src: string;
  name: string;
  file: File;
};

type UploadSide = SlotKey;
type CropMap = Record<SlotKey, CropState>;

const maxFileSize = 12 * 1024 * 1024;

function readFile(file: File): Promise<ImageState> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ src: String(reader.result), name: file.name, file });
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load image: ${src}`));
    image.src = src;
  });
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function getSourceRect(image: HTMLImageElement, slot: TemplateSlot, cropState: CropState) {
  const crop = clampCrop(cropState);
  const baseScale = Math.max(slot.width / image.naturalWidth, slot.height / image.naturalHeight);
  const effectiveScale = baseScale * crop.zoom;
  const width = Math.min(image.naturalWidth, Math.max(1, slot.width / effectiveScale));
  const height = Math.min(image.naturalHeight, Math.max(1, slot.height / effectiveScale));
  const maxLeft = Math.max(0, image.naturalWidth - width);
  const maxTop = Math.max(0, image.naturalHeight - height);

  return {
    x: ((crop.x + 1) / 2) * maxLeft,
    y: ((crop.y + 1) / 2) * maxTop,
    width,
    height,
  };
}

function drawCroppedImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  slot: TemplateSlot,
  crop: CropState,
) {
  const source = getSourceRect(image, slot, crop);

  ctx.save();
  drawRoundedRect(ctx, slot.x, slot.y, slot.width, slot.height, slot.radius);
  ctx.clip();
  ctx.drawImage(
    image,
    source.x,
    source.y,
    source.width,
    source.height,
    slot.x,
    slot.y,
    slot.width,
    slot.height,
  );
  ctx.restore();
}

function drawPlaceholder(ctx: CanvasRenderingContext2D, slot: TemplateSlot, label: string) {
  ctx.save();
  drawRoundedRect(ctx, slot.x, slot.y, slot.width, slot.height, slot.radius);
  ctx.clip();
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(slot.x, slot.y, slot.width, slot.height);
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = Math.max(2, Math.round(slot.width * 0.004));
  ctx.setLineDash([14, 14]);
  ctx.strokeRect(slot.x + 8, slot.y + 8, slot.width - 16, slot.height - 16);
  ctx.setLineDash([]);
  ctx.fillStyle = "#64748b";
  ctx.font = `800 ${Math.max(18, Math.round(slot.width * 0.04))}px Inter, Arial, sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText(label, slot.x + slot.width / 2, slot.y + slot.height / 2);
  ctx.restore();
  ctx.textAlign = "start";
}

function fileAccepts(file: File) {
  return file.type.startsWith("image/");
}

export function PhotoMaker({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dragRef = useRef<{ side: SlotKey; x: number; y: number } | null>(null);
  const [before, setBefore] = useState<ImageState | null>(null);
  const [after, setAfter] = useState<ImageState | null>(null);
  const [templateId, setTemplateId] = useState(comparisonTemplates[0].id);
  const [activeSide, setActiveSide] = useState<SlotKey>("before");
  const [crops, setCrops] = useState<CropMap>({ before: defaultCrop, after: defaultCrop });
  const [status, setStatus] = useState(dictionary.maker.status.initial);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

  const template = useMemo(() => getComparisonTemplate(templateId), [templateId]);
  const templateName = getTemplateName(locale, template.id, template.name);
  const canGenerate = Boolean(before && after);
  const activeCrop = crops[activeSide];

  useEffect(() => {
    setStatus(dictionary.maker.status.initial);
  }, [dictionary.maker.status.initial]);

  const replaceGeneratedUrl = useCallback((nextUrl: string | null) => {
    setGeneratedUrl((previous) => {
      if (previous) URL.revokeObjectURL(previous);
      return nextUrl;
    });
  }, []);

  const invalidateOutput = useCallback(() => {
    replaceGeneratedUrl(null);
  }, [replaceGeneratedUrl]);

  useEffect(() => () => {
    if (generatedUrl) URL.revokeObjectURL(generatedUrl);
  }, [generatedUrl]);

  const updateCrop = useCallback((side: SlotKey, crop: CropState) => {
    setCrops((current) => ({ ...current, [side]: clampCrop(crop) }));
    invalidateOutput();
  }, [invalidateOutput]);

  const handleFile = async (file: File | undefined, side: UploadSide) => {
    if (!file) return;

    if (!fileAccepts(file)) {
      setStatus(dictionary.maker.status.chooseImage);
      return;
    }

    if (file.size > maxFileSize) {
      setStatus(dictionary.maker.status.fileTooLarge);
      return;
    }

    try {
      const image = await readFile(file);
      if (side === "before") {
        setBefore(image);
        setActiveSide("before");
        setCrops((current) => ({ ...current, before: defaultCrop }));
      }
      if (side === "after") {
        setAfter(image);
        setActiveSide("after");
        setCrops((current) => ({ ...current, after: defaultCrop }));
      }
      invalidateOutput();
      setStatus(dictionary.maker.status.photoAdded);
    } catch {
      setStatus(dictionary.maker.status.readFailed);
    }
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>, side: UploadSide) => {
    event.preventDefault();
    void handleFile(event.dataTransfer.files[0], side);
  };

  const draw = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = template.width;
    canvas.height = template.height;
    ctx.clearRect(0, 0, template.width, template.height);

    const base = await loadImage(svgToDataUri(renderTemplateBaseSvg(template)));
    ctx.drawImage(base, 0, 0, template.width, template.height);

    if (before) {
      const beforeImage = await loadImage(before.src);
      drawCroppedImage(ctx, beforeImage, template.slots.before, crops.before);
    } else {
      drawPlaceholder(ctx, template.slots.before, dictionary.maker.beforeImage);
    }

    if (after) {
      const afterImage = await loadImage(after.src);
      drawCroppedImage(ctx, afterImage, template.slots.after, crops.after);
    } else {
      drawPlaceholder(ctx, template.slots.after, dictionary.maker.afterImage);
    }

    const overlay = await loadImage(svgToDataUri(renderTemplateOverlaySvg(template, {
      labels: { before: dictionary.maker.before, after: dictionary.maker.after },
      showLabels: true,
    })));
    ctx.drawImage(overlay, 0, 0, template.width, template.height);
  }, [after, before, crops, dictionary.maker.after, dictionary.maker.afterImage, dictionary.maker.before, dictionary.maker.beforeImage, template]);

  useEffect(() => {
    draw().catch(() => setStatus(dictionary.maker.status.previewFailed));
  }, [draw]);

  const setTemplate = (id: string) => {
    setTemplateId(id);
    invalidateOutput();
    setStatus(dictionary.maker.status.styleChanged);
  };

  const generate = async () => {
    if (!before || !after) {
      setStatus(dictionary.maker.status.addTwoFirst);
      return;
    }

    setIsGenerating(true);
    setStatus(dictionary.maker.status.generating);

    try {
      const formData = new FormData();
      formData.append("templateId", template.id);
      formData.append("before", before.file);
      formData.append("after", after.file);
      formData.append("beforeLabel", dictionary.maker.before);
      formData.append("afterLabel", dictionary.maker.after);
      formData.append("showLabels", "true");
      formData.append("showLogo", "false");
      formData.append("crops", JSON.stringify(crops));

      const response = await fetch("/api/render", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(dictionary.maker.status.renderFailed);
      }

      const blob = await response.blob();
      replaceGeneratedUrl(URL.createObjectURL(blob));
      setStatus(dictionary.maker.status.pngReady);
    } catch {
      setStatus(dictionary.maker.status.renderFailed);
    } finally {
      setIsGenerating(false);
    }
  };

  const download = () => {
    if (!generatedUrl) {
      setStatus(dictionary.maker.status.generateBeforeDownload);
      return;
    }

    const link = document.createElement("a");
    link.href = generatedUrl;
    link.download = `${template.id}-before-after.png`;
    link.click();
    setStatus(dictionary.maker.status.downloadStarted);
  };

  const reset = () => {
    setBefore(null);
    setAfter(null);
    setCrops({ before: defaultCrop, after: defaultCrop });
    setActiveSide("before");
    replaceGeneratedUrl(null);
    setStatus(dictionary.maker.status.initial);
  };

  const canvasPoint = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const slotFromPoint = (point: { x: number; y: number }) => {
    return (Object.keys(template.slots) as SlotKey[]).find((side) => {
      const slot = template.slots[side];
      return point.x >= slot.x && point.x <= slot.x + slot.width && point.y >= slot.y && point.y <= slot.y + slot.height;
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    const point = canvasPoint(event);
    if (!point) return;
    const side = slotFromPoint(point);
    if (!side) return;
    setActiveSide(side);
    dragRef.current = { side, x: point.x, y: point.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    const point = canvasPoint(event);
    if (!drag || !point) return;

    const slot = template.slots[drag.side];
    const dx = (point.x - drag.x) / slot.width;
    const dy = (point.y - drag.y) / slot.height;
    dragRef.current = { ...drag, x: point.x, y: point.y };

    setCrops((current) => ({
      ...current,
      [drag.side]: clampCrop({
        ...current[drag.side],
        x: current[drag.side].x - dx * 2,
        y: current[drag.side].y - dy * 2,
      }),
    }));
    invalidateOutput();
  };

  const handlePointerUp = (event: PointerEvent<HTMLCanvasElement>) => {
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="maker" className="maker-workspace" aria-label={dictionary.maker.heading}>
      <div className="maker-grid">
        <div className="maker-controls" aria-label={dictionary.maker.controlsAria}>
          <section className="control-panel control-panel--photos">
            <div className="panel-heading">
              <span className="panel-heading__icon"><UploadCloud size={17} /></span>
              <div className="panel-heading__text">
                <h2>{dictionary.maker.photosTitle}</h2>
                <span className="panel-heading__hint">{dictionary.maker.description}</span>
              </div>
            </div>

            <div className="upload-pair">
              <UploadTile
                image={before}
                label={dictionary.maker.before}
                uploadText={dictionary.maker.upload}
                uploadHint={dictionary.maker.uploadHint}
                side="before"
                onDrop={handleDrop}
                onFile={handleFile}
              />
              <UploadTile
                image={after}
                label={dictionary.maker.after}
                uploadText={dictionary.maker.upload}
                uploadHint={dictionary.maker.uploadHint}
                side="after"
                onDrop={handleDrop}
                onFile={handleFile}
              />
            </div>
          </section>

          <section className="control-panel">
            <div className="panel-heading panel-heading--compact">
              <span className="panel-heading__icon"><Crop size={17} /></span>
              <h2>{dictionary.maker.cropTitle}</h2>
            </div>

            <div className="side-tabs" role="tablist" aria-label={dictionary.maker.cropTitle}>
              {(["before", "after"] as SlotKey[]).map((side) => (
                <button
                  key={side}
                  type="button"
                  role="tab"
                  aria-selected={activeSide === side}
                  data-active={activeSide === side}
                  onClick={() => setActiveSide(side)}
                >
                  {side === "before" ? dictionary.maker.before : dictionary.maker.after}
                </button>
              ))}
            </div>

            <CropControls
              dictionary={dictionary}
              crop={activeCrop}
              disabled={activeSide === "before" ? !before : !after}
              onChange={(crop) => updateCrop(activeSide, crop)}
              onReset={() => updateCrop(activeSide, defaultCrop)}
            />
          </section>

          <section className="control-panel control-panel--compact">
            <div className="panel-heading panel-heading--compact">
              <span className="panel-heading__icon panel-heading__icon--ghost"><ImageIcon size={15} /></span>
              <h2>{dictionary.maker.styleTitle}</h2>
              <span className="panel-heading__meta">{templateName}</span>
            </div>
            <TemplatePicker locale={locale} dictionary={dictionary} selectedTemplate={template} onSelect={setTemplate} />
          </section>
        </div>

        <div className="maker-preview-card">
          <div className="preview-toolbar">
            <div>
              <span className="preview-toolbar__label">{dictionary.maker.livePreview}</span>
              <strong>{templateName}</strong>
            </div>
            <span className="template-badge">{dictionary.maker.frameFamily} · {template.ratio}</span>
          </div>

          <div className="preview-stage preview-stage--product">
            <canvas
              ref={canvasRef}
              className="preview-canvas"
              data-ratio={template.ratio}
              aria-label={dictionary.maker.previewAria}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            />
          </div>

          <div className="maker-actions maker-actions--product">
            <span className="status-text">{status}</span>
            <div>
              <button className="button button--ghost button--small" type="button" onClick={reset}>
                <RefreshCw size={15} />
                {dictionary.maker.reset}
              </button>
              <button
                className="button button--primary button--small"
                type="button"
                onClick={generate}
                disabled={!canGenerate || isGenerating}
              >
                <Wand2 size={15} />
                {isGenerating ? dictionary.maker.generatingCta : dictionary.maker.generateCta}
              </button>
              <button
                className="button button--dark button--small"
                type="button"
                onClick={download}
                disabled={!generatedUrl}
              >
                <Download size={15} />
                {dictionary.maker.download}
              </button>
            </div>
          </div>

          <div className="preview-note">
            <Move size={15} />
            {dictionary.maker.dragNote}
          </div>
        </div>
      </div>
    </section>
  );
}

function UploadTile({
  image,
  label,
  uploadText,
  uploadHint,
  side,
  onDrop,
  onFile,
}: {
  image: ImageState | null;
  label: string;
  uploadText: string;
  uploadHint: string;
  side: UploadSide;
  onDrop: (event: DragEvent<HTMLLabelElement>, side: UploadSide) => void;
  onFile: (file: File | undefined, side: UploadSide) => void;
}) {
  return (
    <div className="upload-field">
      <span className="upload-field__label">{label}</span>
      <label
        className="drop-zone drop-zone--image"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => onDrop(event, side)}
      >
        {image ? (
          <img className="drop-zone__preview" src={image.src} alt={`${label}: ${image.name}`} />
        ) : (
          <span className="drop-zone__placeholder">
            <UploadCloud size={32} />
            <strong>{uploadText}</strong>
            <small>{uploadHint}</small>
          </span>
        )}
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={(event) => onFile(event.target.files?.[0], side)}
        />
      </label>
    </div>
  );
}

function CropControls({
  dictionary,
  crop,
  disabled,
  onChange,
  onReset,
}: {
  dictionary: Dictionary;
  crop: CropState;
  disabled: boolean;
  onChange: (crop: CropState) => void;
  onReset: () => void;
}) {
  const controls = [
    { key: "zoom", label: dictionary.maker.cropControls.zoom, min: 1, max: 3, step: 0.01 },
    { key: "x", label: dictionary.maker.cropControls.horizontal, min: -1, max: 1, step: 0.01 },
    { key: "y", label: dictionary.maker.cropControls.vertical, min: -1, max: 1, step: 0.01 },
  ] as const;

  return (
    <div className="crop-controls" data-disabled={disabled}>
      {controls.map((control) => (
        <label className="range-field" key={control.key}>
          <span>
            {control.label}
            <strong>{control.key === "zoom" ? `${crop.zoom.toFixed(2)}x` : crop[control.key].toFixed(2)}</strong>
          </span>
          <input
            type="range"
            min={control.min}
            max={control.max}
            step={control.step}
            value={crop[control.key]}
            disabled={disabled}
            onChange={(event) => onChange({ ...crop, [control.key]: Number(event.target.value) })}
          />
        </label>
      ))}
      <button className="button button--ghost button--small" type="button" onClick={onReset} disabled={disabled}>
        {dictionary.maker.reset}
      </button>
    </div>
  );
}

function TemplatePicker({
  locale,
  dictionary,
  selectedTemplate,
  onSelect,
}: {
  locale: Locale;
  dictionary: Dictionary;
  selectedTemplate: ComparisonTemplate;
  onSelect: (id: string) => void;
}) {
  const ratios: Array<{ ratio: ComparisonTemplate["ratio"]; label: string }> = [
    { ratio: "16:9", label: dictionary.maker.ratios.wide },
    { ratio: "9:16", label: dictionary.maker.ratios.story },
  ];
  const visibleTemplates = comparisonTemplates.filter((template) => template.ratio === selectedTemplate.ratio);

  const selectRatio = (ratio: ComparisonTemplate["ratio"]) => {
    const firstTemplate = comparisonTemplates.find((template) => template.ratio === ratio);
    if (firstTemplate) onSelect(firstTemplate.id);
  };

  return (
    <div className="template-picker">
      <div className="ratio-switch" role="tablist" aria-label={dictionary.maker.styleTitle}>
        {ratios.map(({ ratio, label }) => (
          <button
            type="button"
            role="tab"
            aria-selected={selectedTemplate.ratio === ratio}
            data-active={selectedTemplate.ratio === ratio}
            key={ratio}
            onClick={() => selectRatio(ratio)}
          >
            <span>{label}</span>
            <small>{ratio}</small>
          </button>
        ))}
      </div>

      <div className="template-grid" role="radiogroup" aria-label={dictionary.templates.eyebrow}>
        {visibleTemplates.map((template) => {
          const name = getTemplateName(locale, template.id, template.name);
          const preview = svgToDataUri(
            renderTemplatePreviewSvg(template, {
              labels: { before: dictionary.maker.before, after: dictionary.maker.after },
              showLabels: true,
            }),
          );

          return (
            <button
              className="template-option"
              type="button"
              role="radio"
              aria-checked={selectedTemplate.id === template.id}
              aria-label={`${name}, ${template.ratio}`}
              title={name}
              data-active={selectedTemplate.id === template.id}
              key={template.id}
              onClick={() => onSelect(template.id)}
            >
              <img src={preview} alt="" />
              {selectedTemplate.id === template.id ? (
                <span className="template-option__check" aria-hidden="true">
                  <Check size={14} />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
