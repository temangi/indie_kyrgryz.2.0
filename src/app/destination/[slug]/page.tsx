import DestinationPage from "@/src/pages/destination/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinationTourInfo } from "@/src/widgets/DestinationTourList/constants/constansts";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildDestinationSeoGraph } from "@/src/shared/seo/destinationSeoGraph";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import {
  DESTINATION_META,
  NOT_FOUND_DESCRIPTION,
  NOT_FOUND_TITLE,
} from "@/src/shared/seo/pageCopy";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinationTourInfo.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentTour = destinationTourInfo.find((tour) => tour.slug === slug);
  const meta = DESTINATION_META[slug];

  if (!currentTour || !meta) {
    return buildPageMetadata({
      title: NOT_FOUND_TITLE,
      description: NOT_FOUND_DESCRIPTION,
      path: `/destination/${slug}`,
      index: false,
    });
  }

  const hero = typeof currentTour.imgs === "string" ? null : currentTour.imgs[0];

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/destination/${slug}`,
    image: hero?.src
      ? {
          url: hero.src,
          width: hero.width,
          height: hero.height,
          alt: currentTour.title.replace(/\s+/g, " ").trim(),
        }
      : undefined,
  });
}

export default async function Destination({ params }: Props) {
  const { slug } = await params;
  const currentTour = destinationTourInfo.find((tour) => tour.slug === slug);
  if (!currentTour) notFound();

  return (
    <>
      <SeoJsonLd
        id={`destination-ld-${slug}`}
        graph={buildDestinationSeoGraph(currentTour)}
      />
      <DestinationPage />
    </>
  );
}
