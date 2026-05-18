import type { StaticImageData } from "next/image";
import anush from "@/public/images/anush.webp";
import jack from "@/public/images/jack.webp";
import kipari from "@/public/images/kipariza.jpg";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
  alt: string;
  bio: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anuar",
    name: "Anuar",
    role: "Guide",
    image: anush,
    alt: "Anuar - Guide",
    bio: "Anuar is a skilled guide and cultural ambassador who brings the rich heritage of Kyrgyzstan to life. With deep knowledge of local traditions and history, he creates immersive experiences that connect travelers with the heart of the region.",
  },
  {
    id: "jack",
    name: "Jack",
    role: "Founder",
    image: jack,
    alt: "Jack - Founder",
    bio: "Jack is the founder and content creator who showcases Kyrgyzstan through his blog. He personally tests every route, captures drone footage, and helps people experience the country on a deeper level.",
  },
  {
    id: "kipariza",
    name: "Kipariza",
    role: "Guide",
    image: kipari,
    alt: "Kipariza - Guide",
    bio: "Kipariza is a passionate mountain guide who knows the trails around Issyk-Kul and the Tian Shan. She focuses on safe pacing, warm hospitality in yurt camps, and helping guests feel at home in nomadic Kyrgyz culture.",
  },
];
