import { StaticImageData } from "next/image";
import s1 from "@/public/images/tours/kyrgyz/p1.webp";
import s2 from "@/public/images/son-kul/s2.webp";
import s3 from "@/public/images/slide7.webp";
import s4 from "@/public/images/tours/mountain/p6.webp";
import s5 from "@/public/images/kyrgyz.webp";
import s6 from "@/public/images/slide12.webp";
import s7 from "@/public/images/kel-suu/k4.webp";
import s8 from "@/public/images/slide6.webp";
import s9 from "@/public/images/slide4.webp";

export interface ITour {
  title: string;
  day?: string;
  price?: string;
  tag?: string;
  id: number;
  img: StaticImageData;
  href: string;
  slug: string;
}

export const GROUP_TOUR_2026_SLUG = "best-of-kyrgyzstan";

export const tours: ITour[] = [
  {
    id: 4,
    title: "Best of Kyrgyzstan",
    day: "8 days",
    price: "$930",
    tag: "Popular",
    img: s1,
    href: "tour",
    slug: "best-of-kyrgyzstan",
  },
  {
    id: 5,
    title: "Song-Kul on horseback",
    day: "3 days",
    price: "$390",
    img: s2,
    href: "tour",
    slug: "song-kul",
  },
  {
    id: 6,
    title: "Altyn-Arashan & Ala-Kul",
    day: "4 days",
    price: "$450",
    img: s3,
    href: "tour",
    slug: "altyn-arashan",
  },
  {
    id: 3,
    title: "Kyrgyzstan & Kazakhstan",
    day: "10 days",
    price: "$1390",
    tag: "Popular",
    img: s4,
    href: "tour",
    slug: "kyrgyzstan-kazakhstan",
  },
  {
    id: 1,
    title: "Kyrgyz Week",
    day: "7 days",
    price: "$960",
    tag: "Popular",
    img: s5,
    href: "tour",
    slug: "kyrgyz-week",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    day: "10 days",
    price: "$1290",
    img: s6,
    href: "tour",
    slug: "mountain-adventure",
  },
  {
    id: 7,
    title: "Unique Experience",
    day: "7 days",
    price: "$1290",
    img: s7,
    href: "tour",
    slug: "unique-experience",
  },
  {
    id: 8,
    title: "4×4 Off-Road Adventure",
    day: "10 days",
    price: "$1360",
    img: s8,
    href: "tour",
    slug: "4x4-off-road-adventure",
  },
  {
    id: 9,
    title: "Day trips from Bishkek",
    day: "1 day",
    price: "POA",
    img: s9,
    href: "tour",
    slug: "day-trips",
  },
];
