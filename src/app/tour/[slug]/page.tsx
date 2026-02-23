import DetailPage from "@/src/pages/tourDetail/page";
import { Metadata } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";

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

  return {
    title: `${currentTour.chapter} | Indie Kyrgyz Travel`,
    description: currentTour.title,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: currentTour.chapter,
      description: currentTour.title,
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
  const tourLd = currentTour ? {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": currentTour.chapter,
    "description": currentTour.title,
    "image": currentTour.slider[0].item,
    "touristType": "Adventure travelers",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": currentTour.price,
      "availability": "https://schema.org/InStock",
    },
  } : null;

  return (
    <>
      {tourLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tourLd) }}
        />
      )}
      <DetailPage />
    </>
  );
}