/** Collapse whitespace and line breaks for HTML title / meta description fields. */
export function normalizeSeoTitle(title: string): string {
  return title.replace(/\s+/g, " ").trim();
}
