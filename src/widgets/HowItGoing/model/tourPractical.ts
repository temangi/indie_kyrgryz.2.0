export type TourFaqItem = {
  question: string;
  answer: string;
};

/**
 * Optional facts for a tour page. Leave a field out until it is confirmed.
 * Empty strings and empty lists are not shown.
 */
export type TourPracticalDetails = {
  included?: string[];
  notIncluded?: string[];
  groupSize?: string;
  difficulty?: string;
  season?: string;
  faq?: TourFaqItem[];
};

export const TOUR_PRACTICAL: Record<string, TourPracticalDetails> = {};

function filled(value: string | undefined): value is string {
  return Boolean(value?.trim());
}

export function practicalDetails(slug: string): TourPracticalDetails | undefined {
  const details = TOUR_PRACTICAL[slug];
  if (!details) return undefined;

  const included = details.included?.map((item) => item.trim()).filter(Boolean);
  const notIncluded = details.notIncluded?.map((item) => item.trim()).filter(Boolean);
  const faq = details.faq?.filter(
    (item) => item.question.trim() && item.answer.trim(),
  );

  const next: TourPracticalDetails = {
    ...(included?.length ? { included } : {}),
    ...(notIncluded?.length ? { notIncluded } : {}),
    ...(filled(details.groupSize) ? { groupSize: details.groupSize.trim() } : {}),
    ...(filled(details.difficulty) ? { difficulty: details.difficulty.trim() } : {}),
    ...(filled(details.season) ? { season: details.season.trim() } : {}),
    ...(faq?.length ? { faq } : {}),
  };

  return Object.keys(next).length > 0 ? next : undefined;
}
