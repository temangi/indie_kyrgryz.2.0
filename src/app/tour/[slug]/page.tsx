import DetailPage from "@/src/pages/tourDetail/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildTourSeoGraph } from "@/src/shared/seo/tourSeoGraph";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import {
  NOT_FOUND_DESCRIPTION,
  NOT_FOUND_TITLE,
  TOUR_META,
} from "@/src/shared/seo/pageCopy";
import { practicalDetails } from "@/src/widgets/HowItGoing/model/tourPractical";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stepsTours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentTour = stepsTours.find((tour) => tour.slug === slug);
  const meta = TOUR_META[slug];

  if (!currentTour || !meta) {
    return buildPageMetadata({
      title: NOT_FOUND_TITLE,
      description: NOT_FOUND_DESCRIPTION,
      path: `/tour/${slug}`,
      index: false,
    });
  }

  const hero = currentTour.slider[0]?.item;

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/tour/${slug}`,
    image: hero?.src
      ? {
          url: hero.src,
          width: hero.width,
          height: hero.height,
          alt: currentTour.chapter,
        }
      : undefined,
  });
}

export default async function DetailToursPage({ params }: Props) {
  const { slug } = await params;
  const currentTour = stepsTours.find((tour) => tour.slug === slug);
  if (!currentTour) notFound();

  const faq = practicalDetails(slug)?.faq;
  const graph = buildTourSeoGraph(currentTour);
  if (faq) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.replace(/\n/g, " ").trim(),
        },
      })),
    });
  }

  return (
    <>
      <SeoJsonLd id={`tour-ld-${slug}`} graph={graph} />
      <DetailPage slug={slug} />
    </>
  );
}
