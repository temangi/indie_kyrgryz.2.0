/**
 * Last change a visitor or crawler would notice, as YYYY-MM-DD.
 * Update the matching entry when that page's copy changes.
 * Do not use the build clock: a fresh date on every request makes lastmod useless.
 */
export const PAGE_LAST_MODIFIED = {
  "/": "2026-11-12",
  "/tours": "2026-11-12",
  "/about": "2026-11-12",
  "/team": "2026-11-12",
  "/contacts": "2026-11-12",
  "/privacy-policy": "2026-04-29",
  tour: "2026-11-12",
  destination: "2026-11-12",
} as const;

export function lastModifiedDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00.000Z`);
}
