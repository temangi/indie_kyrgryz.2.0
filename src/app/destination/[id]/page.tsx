import DestinationPage from "@/src/pages/destination/page";
import { Metadata } from "next";
import { destinationTourInfo } from "@/src/widgets/DestinationTourList/constants/constansts";

type Props = {
  params: Promise<{ id: string }>; 
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const currentTour = destinationTourInfo[Number(id) - 1];

  if (!currentTour) {
    return {
      title: "Tour Not Found | Indie Kyrgyz Travel",
    };
  }

  return {
    title: `${currentTour.title} | Indie Kyrgyz Travel`,
    description: currentTour.desc,
    openGraph: {
      title: currentTour.title,
      description: currentTour.desc,
      images: [
        {
          url: "/og.jpg", 
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Destination() {
    return <DestinationPage />;
  }
  