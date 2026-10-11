import type { StaticImageData } from "next/image";
import anush from "@/public/images/anush.webp";
import kipari from "@/public/images/kipariza.jpg";
import perizat from "@/public/images/perizat.webp";


export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
  alt: string;
  bio: string;
  /** CSS object-position for portrait crops (e.g. face at bottom of frame) */
  imagePosition?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anuar",
    name: "Anuar",
    role: "Founder",
    image: anush,
    alt: "Anuar - Founder",
    bio: "Anuar is the founder of Indie Kyrgyz Travel and a cultural ambassador who brings the rich heritage of Kyrgyzstan to life. With deep knowledge of local traditions and routes, he plans immersive journeys and connects travelers with the heart of the region.",
    imagePosition: "center bottom",
  },
  {
    id: "kipariza",
    name: "Kipariza",
    role: "Guide",
    image: kipari,
    alt: "Kipariza - Guide",
    bio: "Kipariza is a passionate mountain guide who knows the trails around Issyk-Kul and the Tian Shan. She focuses on safe pacing, warm hospitality in yurt camps, and helping guests feel at home in nomadic Kyrgyz culture.",
  },
  {
    id: "perizat",
    name: "Perizat",
    role: "Guide",
    image: perizat,
    alt: "Perizat - Guide",
    bio: "Perizat is an enthusiastic local guide with deep roots in Kyrgyz nomadic traditions. She leads tours across the stunning landscapes of Issyk-Kul, Song-Kul, and the Tian Shan mountains, bringing warmth, local knowledge, and genuine care to every journey.",
  },
];
