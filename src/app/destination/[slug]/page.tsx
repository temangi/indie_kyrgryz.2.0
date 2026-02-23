import DestinationPage from "@/src/pages/destination/page";
import { Metadata } from "next";
import { destinationTourInfo } from "@/src/widgets/DestinationTourList/constants/constansts";

type Props = {
  params: Promise<{ slug: string }>; 
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentTour = destinationTourInfo.find((tour) => tour.slug === slug);

  if (!currentTour) {
    return {
      title: "Destination Not Found | Indie Kyrgyz Travel",
    };
  }

  const baseUrl = "https://indiekyrgyz.com";
  const canonicalUrl = `${baseUrl}/destinations/${slug}`;

  const imageUrl = typeof currentTour.imgs === 'string' 
    ? currentTour.imgs 
    : currentTour.imgs[0]?.src || 'https://indiekyrgyz.com/og.jpg';

  return {
    title: `${currentTour.title} | Indie Kyrgyz Travel`,
    description: currentTour.desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: currentTour.title,
      description: currentTour.desc,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl, 
          width: 1200,
          height: 630,
          alt: currentTour.title,
        },
      ],
    },
  };
}

export default async function Destination({ params }: Props) {
  const { slug } = await params;
  const currentTour = destinationTourInfo.find((tour) => tour.slug === slug);
  const jsonLd = currentTour ? {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": currentTour.title,
    "description": currentTour.desc,
    "image": typeof currentTour.imgs === 'string' ? currentTour.imgs : currentTour.imgs[0]?.src || 'https://indiekyrgyz.com/og.jpg',
    "touristType": "Sightseeing",
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <DestinationPage />
    </>
  );
}