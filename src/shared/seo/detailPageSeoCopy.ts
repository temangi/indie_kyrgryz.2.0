/** Short blurbs for detail pages. Facts only, no audience boilerplate. */

const TOUR_SEO_INTROS: Record<string, string> = {
  "kyrgyz-week":
    "A 7-day Kyrgyzstan tour with Issyk-Kul, Song-Kul, nomadic yurt nights, and mountain villages, led by local drivers.",
  "mountain-adventure":
    "A 10-day private-style Mountain Adventure in Kyrgyzstan: trekking, Kel-Suu, and nomadic stays in the Tien Shan.",
  "kyrgyzstan-kazakhstan":
    "One private road trip through two countries: Kazakhstan’s Charyn and Kolsai, then Kyrgyzstan’s Issyk-Kul, Song-Kul, and Kel-Suu.",
  "best-of-kyrgyzstan":
    "Best of Kyrgyzstan in eight days: private or fixed-date departures, Song-Kul horse riding, canyons, hot springs, and nomadic encounters.",
  "song-kul":
    "A short Song-Kul trip from Bishkek: high pastures, nomadic yurt nights, and horseback riding. The route starts and ends in Bishkek.",
  "altyn-arashan":
    "A private trek from Karakol to Ala-Kul and the Altyn-Arashan hot springs. The route starts and ends in Karakol.",
  "unique-experience":
    "A 7-day Kyrgyzstan tour with yoga, meditation, horseback riding, and nomadic yurt stays.",
  "4x4-off-road-adventure":
    "A 10-day private 4x4 expedition across Kyrgyzstan: remote passes, Kel-Suu, nomadic valleys, and local drivers.",
  "day-trips":
    "Private day trips from Bishkek to canyons, lakes, and viewpoints, with a return to the city the same day.",
};

const DESTINATION_SEO_INTROS: Record<string, string> = {
  "kel-suu":
    "Kel-Suu, also called Kol-Tetiri, is a remote alpine lake in Kyrgyzstan. Visits need a border permit and run in the warmer months.",
  "issyk-kul":
    "Issyk-Kul is Kyrgyzstan’s largest lake, with south-shore canyons, Karakol, and nomadic stops along the shore.",
  "song-kul":
    "Song-Kul is a high lake of summer pastures, horse treks, and mountain passes, reached on tours that start in Bishkek.",
  "world-nomad-games":
    "The World Nomad Games bring together kok-boru, archery, wrestling, and falconry, with yurts, music, and crafts around the competitions.",
};

export function getTourSeoIntro(slug: string): string | undefined {
  return TOUR_SEO_INTROS[slug];
}

export function getDestinationSeoIntro(slug: string): string | undefined {
  return DESTINATION_SEO_INTROS[slug];
}
