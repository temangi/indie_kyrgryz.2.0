const TOUR_HEADINGS: Record<string, { name: string; country: string }> = {
  "kyrgyz-week": { name: "Kyrgyz Week", country: "Kyrgyzstan" },
  "mountain-adventure": { name: "Mountain Adventure", country: "Kyrgyzstan" },
  "kyrgyzstan-kazakhstan": {
    name: "Kyrgyzstan and Kazakhstan",
    country: "Kazakhstan and Kyrgyzstan",
  },
  "best-of-kyrgyzstan": { name: "Best of Kyrgyzstan", country: "Kyrgyzstan" },
  "song-kul": { name: "Song-Kul", country: "Kyrgyzstan" },
  "altyn-arashan": { name: "Altyn-Arashan", country: "Kyrgyzstan" },
  "unique-experience": { name: "Unique Experience", country: "Kyrgyzstan" },
  "4x4-off-road-adventure": {
    name: "4x4 Off-Road Adventure",
    country: "Kyrgyzstan",
  },
  "day-trips": { name: "Day Trips from Bishkek", country: "Kyrgyzstan" },
};

/** "7 days" → "7-Day". Returns undefined when the label is not a day count. */
function dayCountLabel(duration: string): string | undefined {
  const match = duration.trim().match(/^(\d+)\s+days?$/i);
  if (!match) return undefined;
  return `${Number(match[1])}-Day`;
}

/** Visible H1. Breadcrumbs keep the shorter chapter name. */
export function tourPageH1(
  slug: string,
  duration: string,
  fallback: string,
): string {
  const spec = TOUR_HEADINGS[slug];
  const days = dayCountLabel(duration);
  if (!spec || !days) return fallback;
  return `${spec.name}: ${days} ${spec.country} Tour`;
}
