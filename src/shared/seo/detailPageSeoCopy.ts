/** Short, keyword-aware blurbs for detail pages (visible body copy + crawlers). */

const TOUR_SEO_INTROS: Record<string, string> = {
  "kyrgyz-week":
    "Our 7-day Kyrgyzstan tour is built for travelers from Europe or the US who want a private-feel loop: Issyk-Kul, Song-Kul, nomadic yurt nights, and mountain villages with local drivers—not a packed bus itinerary.",
  "mountain-adventure":
    "A 10-day private-style Mountain Adventure in Kyrgyzstan: trekking, Kel-Suu, and nomadic stays in the Tien Shan—popular with guests flying from Europe or the US for deeper trails and small-group logistics.",
  "kyrgyzstan-kazakhstan":
    "One private road-trip itinerary, two countries: Kazakhstan’s Charyn and Kolsai, then Kyrgyzstan’s Issyk-Kul, Song-Kul, and Kel-Suu—ideal if you’re coming from Europe or the US and want nomadic culture with serious landscapes.",
  "best-of-kyrgyzstan":
    "Best of Kyrgyzstan in eight days: private or fixed-date departures, Song-Kul horse riding, canyons, hot springs, and nomadic encounters—straightforward planning for travelers from Europe or the US.",
  "song-kul":
    "A focused Song-Kul Lake escape from Bishkek: high pastures, nomadic yurt nights, and horseback riding—short, private-paced, and easy to pair with flights from Europe or the US into Bishkek.",
  "altyn-arashan":
    "Private trekking rhythm around Karakol: Ala-Kul, Altyn-Arashan hot springs, and Issyk-Kul’s nomadic edge—compact logistics for international hikers from Europe or the US.",
  "unique-experience":
    "Slow, private-feel travel in Kyrgyzstan: yoga, meditation, horses, and nomadic yurt life on the Unique Experience tour—built for guests who want quiet depth, including many from Europe or the US.",
  "4x4-off-road-adventure":
    "Private 4x4 expedition across Kyrgyzstan: remote passes, Kel-Suu access, nomadic valleys, and ten days with experienced local drivers—strong fit for adventure travelers from Europe or the US.",
  "day-trips":
    "Private day trips from Bishkek—canyons, lakes, and viewpoints—for nomadic-culture curious travelers who want a mountain hit without multi-day packing; easy add-on after long flights from Europe or the US.",
};

const DESTINATION_SEO_INTROS: Record<string, string> = {
  "kel-suu":
    "Kel-Suu (Kol-Tetiri)—Kyrgyzstan’s most remote alpine lake—for private trekking plans, permits, and season timing; common bucket-list stop for travelers from Europe or the US chasing nomadic highlands.",
  "issyk-kul":
    "Lake Issyk-Kul guide: private-style routing ideas, south-shore canyons, Karakol culture, and nomadic touchpoints on Central Asia’s largest mountain lake—especially relevant for visitors from Europe or the US.",
  "song-kul":
    "Song-Kul overview: jailoo life, horse treks, passes, and why this lake defines nomadic Kyrgyzstan—pair it with a 7-day loop or a private extension after Bishkek.",
  "world-nomad-games":
    "World Nomad Games: kok boru, archery, and living nomadic sport culture—plus how to bolt a private Kyrgyzstan leg onto tickets from Europe or the US.",
};

export function getTourSeoIntro(slug: string): string | undefined {
  return TOUR_SEO_INTROS[slug];
}

export function getDestinationSeoIntro(slug: string): string | undefined {
  return DESTINATION_SEO_INTROS[slug];
}
