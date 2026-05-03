export type TourDayFields = {
  title: string;
  duration: string;
  desc: string;
  place: string;
  /** One-line route for this day, shown above the map (e.g. "Bishkek → Cholpon-Ata → Karakol"). */
  routeSummary?: string;
  /**
   * Full iframe URL from Google Maps (Share → Embed a map → copy `src`).
   * Takes precedence over `mapQuery`.
   */
  mapEmbedSrc?: string;
  /** Map search query (places or "A to B") if `mapEmbedSrc` is not set. */
  mapQuery?: string;
};

export type StepCardType = TourDayFields & { id: number };
