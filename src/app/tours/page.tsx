import ToursPage from "@/src/pages/tours/page";
import type { Metadata } from "next";

const TOURS_URL = "https://indiekyrgyz.com/tours";

export const metadata: Metadata = {
  title: "All Tours in Kyrgyzstan",
  description:
    "Browse all Indie Kyrgyz tours: trekking, horseback riding, off-road routes, and custom travel programs in Kyrgyzstan.",
  alternates: {
    canonical: TOURS_URL,
  },
  openGraph: {
    title: "All Tours | Indie Kyrgyz Travel",
    description:
      "Find your route across Kyrgyzstan: Song-Kul, Altyn-Arashan, mountain expeditions and day trips.",
    url: TOURS_URL,
    type: "website",
  },
};

export default function Destination() {
    return <ToursPage />;
  }
  