import { SITE_ORIGIN } from "./SeoJsonLd";

/**
 * TravelAgency uses only contacts published on the site.
 * TODO: add postalAddress (street, locality, postal code) when the real office address is published.
 * The YouTube link is the video in the site navigation, not a separate channel URL.
 */
export const TRAVEL_AGENCY_LD = {
  "@type": "TravelAgency",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: "Indie Kyrgyz Travel",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
  image: `${SITE_ORIGIN}/og.jpg`,
  description:
    "Indie Kyrgyz Travel plans private and small-group tours in Kyrgyzstan, including trekking, horse trips, and nomadic stays.",
  telephone: "+996555203101",
  email: "indiekyrgyztravel@gmail.com",
  areaServed: [
    { "@type": "Country", name: "Kyrgyzstan" },
    { "@type": "Country", name: "Kazakhstan" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+996555203101",
    email: "indiekyrgyztravel@gmail.com",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.instagram.com/indie_kyrgyz_travel",
    "https://www.tiktok.com/@indie.kyrgyz.travel",
    "https://www.youtube.com/watch?v=ibWlBWMoIxU",
  ],
};
