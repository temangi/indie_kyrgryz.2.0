/** Visible-page facts only. Lengths are checked to sit in the 50–60 / 140–160 ranges. */

export const HOME_TITLE = "Book Private Tours in Kyrgyzstan | Indie Kyrgyz Travel";
export const HOME_DESCRIPTION =
  "Private and small-group tours in Kyrgyzstan: Song-Kul, Issyk-Kul, trekking, yurt stays, and custom routes led by Indie Kyrgyz Travel guides.";

export const DESTINATIONS_TITLE =
  "Places to Visit in Kyrgyzstan | Indie Kyrgyz Travel";
export const DESTINATIONS_DESCRIPTION =
  "Song-Kul, Issyk-Kul, Kel-Suu, and the World Nomad Games: the places on Indie Kyrgyz Travel routes, from high lakes and pastures to nomadic culture.";

export const TOURS_TITLE = "All Private Kyrgyzstan Tours | Indie Kyrgyz Travel";
export const TOURS_DESCRIPTION =
  "Compare Indie Kyrgyz tours in one list: 7-day classics, 10-day expeditions, Song-Kul rides, Altyn-Arashan treks, and day trips from Bishkek.";

export const ABOUT_TITLE =
  "About Indie Kyrgyz Travel | Local Kyrgyzstan Guides";
export const ABOUT_DESCRIPTION =
  "Indie Kyrgyz Travel is a local team in Kyrgyzstan planning private tours, trekking, horse trips, and nomadic stays for guests from overseas.";

export const TEAM_TITLE = "Meet Our Kyrgyzstan Tour Guides | Indie Kyrgyz Travel";
export const TEAM_DESCRIPTION =
  "Meet the Indie Kyrgyz Travel guides and founder in Bishkek who plan private tours, trekking, horse trips, and nomadic stays across Kyrgyzstan.";

export const CONTACT_TITLE =
  "Contact Indie Kyrgyz Travel | Plan Your Kyrgyzstan Tour";
export const CONTACT_DESCRIPTION =
  "Contact Indie Kyrgyz Travel in Bishkek by email, phone, or WhatsApp to plan a private Kyrgyzstan tour. We reply the same day with a route outline.";

export const PRIVACY_TITLE = "Indie Kyrgyz Travel Privacy Policy for Tour Guests";
export const PRIVACY_DESCRIPTION =
  "How Indie Kyrgyz Travel uses the name, email, phone, and trip details you send by form, email, or WhatsApp, and how to request access or deletion.";

export const NOT_FOUND_TITLE = "Page Not Found | Indie Kyrgyz Travel";
export const NOT_FOUND_DESCRIPTION =
  "This page does not exist. Browse Kyrgyzstan tours or contact Indie Kyrgyz Travel and we will help you find a route.";

type PageMeta = { title: string; description: string };

/**
 * Prices match the tour detail page (`from …$`), not the homepage cards.
 * Song-Kul and Altyn-Arashan cards currently show different numbers.
 */
export const TOUR_META: Record<string, PageMeta> = {
  "kyrgyz-week": {
    title: "7-Day Kyrgyz Week Tour in Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "7-day private Kyrgyzstan tour from $960: Issyk-Kul, Skazka Canyon, Song-Kul yurt nights, horse riding, and nomadic villages with local guides.",
  },
  "mountain-adventure": {
    title: "10-Day Kyrgyzstan Mountain Adventure | Indie Kyrgyz Travel",
    description:
      "10-day private mountain tour in Kyrgyzstan from $1,290: Altyn-Arashan hot springs, Song-Kul yurts, and the remote Kel-Suu lake with local guides.",
  },
  "kyrgyzstan-kazakhstan": {
    title: "Kyrgyzstan and Kazakhstan Tour | Indie Kyrgyz Travel",
    description:
      "10-day Kazakhstan and Kyrgyzstan tour from $1,390: Charyn Canyon, Kolsai, Issyk-Kul, Song-Kul, and Kel-Suu with local guides, starting in Almaty.",
  },
  "best-of-kyrgyzstan": {
    title: "8-Day Best of Kyrgyzstan Tour | Indie Kyrgyz Travel",
    description:
      "8-day Best of Kyrgyzstan tour from $930: Song-Kul horse riding, canyons, hot springs, and nomadic yurt stays. Departure dates are listed on the page.",
  },
  "song-kul": {
    title: "3-Day Song-Kul Horse Trek Tour | Indie Kyrgyz Travel",
    description:
      "3-day Song-Kul tour from $470: pastures at 3,016 m, nomadic yurt nights, and horseback riding, starting and ending in Bishkek with a local guide.",
  },
  "altyn-arashan": {
    title: "4-Day Altyn-Arashan and Ala-Kul Trek | Indie Kyrgyz Travel",
    description:
      "4-day Altyn-Arashan and Ala-Kul trek from $940: an alpine lake, a high mountain pass, and hot springs. The route starts and ends in Karakol.",
  },
  "unique-experience": {
    title: "Unique Experience Kyrgyzstan Tour | Indie Kyrgyz Travel",
    description:
      "7-day Unique Experience tour from $1,290: horseback riding, hot springs, yurt stays, yoga, and quiet days in the mountains of Kyrgyzstan with guides.",
  },
  "4x4-off-road-adventure": {
    title: "4x4 Kyrgyzstan Adventure Tour | Indie Kyrgyz Travel",
    description:
      "10-day 4x4 tour of Kyrgyzstan from $1,360: remote mountain passes, Kel-Suu, nomadic valleys, and experienced local drivers in the Tien Shan.",
  },
  "day-trips": {
    title: "Day Trips from Bishkek, Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "Day trips from Bishkek to nearby canyons, lakes, and viewpoints, with no overnight stay, so you are back in the city by evening with a local guide.",
  },
};

export const DESTINATION_META: Record<string, PageMeta> = {
  "kel-suu": {
    title: "Remote Kel-Suu Lake in Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "Kel-Suu, also called Kol-Tetiri, is a remote lake near the Chinese border at about 3,500 m. Cliffs rise from the water, and the level changes by season.",
  },
  "issyk-kul": {
    title: "Issyk-Kul Lake Tours in Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "Issyk-Kul is Kyrgyzstan’s great mountain lake, where ridges reflect in the water: south-shore canyons, Karakol gorges, and nomadic stops with a guide.",
  },
  "song-kul": {
    title: "Song-Kul, Heart of Nomadic Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "Song-Kul is a high lake in central Kyrgyzstan, ringed by summer pastures where nomadic families stay with horses, yaks, yurts, and horse treks.",
  },
  "world-nomad-games": {
    title: "World Nomad Games in Kyrgyzstan | Indie Kyrgyz Travel",
    description:
      "The World Nomad Games, first held at Issyk-Kul in 2014, bring together kok-boru, wrestling, archery, falconry, yurts, music, crafts, and food.",
  },
};
