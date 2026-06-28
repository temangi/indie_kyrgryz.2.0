import DetailPage from "@/src/pages/tourDetail/page";
import { Metadata } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";
import { getTourPriceLabel } from "@/src/widgets/Tours/constants/constants";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildTourSeoGraph } from "@/src/shared/seo/tourSeoGraph";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentTour = stepsTours.find((tour) => tour.slug === slug);

  if (!currentTour) {
    return {
      title: "Tour Not Found | Indie Kyrgyz Travel",
    };
  }

  const baseUrl = "https://indiekyrgyz.com"; 
  const canonicalUrl = `${baseUrl}/tour/${slug}`;

  const metaDescription = String(
    currentTour.title ?? currentTour.desc ?? currentTour.chapter
  ).trim();

  return {
    title: `${currentTour.chapter} | Indie Kyrgyz Travel`,
    description: metaDescription.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: currentTour.chapter,
      description: metaDescription.slice(0, 300),
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: currentTour.slider[0].item.src, 
          width: 1200,
          height: 630,
          alt: currentTour.chapter,
        },
      ],
    },
  };
}

export default async function DetailToursPage({ params }: Props) {
  const { slug } = await params;
  const currentTour = stepsTours.find((tour) => tour.slug === slug);
  const seoGraph = currentTour
    ? buildTourSeoGraph({
        ...currentTour,
        price: getTourPriceLabel(slug) ?? currentTour.price,
      })
    : null;

  return (
    <>
      {seoGraph ? <SeoJsonLd id={`tour-ld-${slug}`} graph={seoGraph} /> : null}
      <DetailPage slug={slug} />
    </>
  );
}