/** Site origin for canonical URLs and absolute images in structured data */
export const SITE_ORIGIN = "https://indiekyrgyz.com";

export function toAbsoluteAssetUrl(src: string | undefined | null): string {
  const fallback = `${SITE_ORIGIN}/icon.png`;
  if (!src?.trim()) return fallback;
  const s = src.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  const path = s.startsWith("/") ? s : `/${s}`;
  return `${SITE_ORIGIN}${path}`;
}

/** Renders one JSON-LD `<script>` with `@context` + `@graph` for rich results */
export function SeoJsonLd({ id, graph }: { id: string; graph: Record<string, unknown>[] }) {
  const payload = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
}
