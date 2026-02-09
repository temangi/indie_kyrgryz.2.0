import DetailPage from "@/src/pages/tourDetail/page";
import { Metadata } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";

type Props = {
  params: Promise<{ id: string }>; 
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const currentTour = stepsTours[Number(id) - 1];

  if (!currentTour) {
    return {
      title: "Tour Not Found | Indie Kyrgyz Travel",
    };
  }

  return {
    title: `${currentTour.chapter} | Indie Kyrgyz Travel`,
    description: currentTour.title,
    openGraph: {
      title: currentTour.chapter,
      description: currentTour.title,
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

export default function DetailToursPage() {
  return <DetailPage />;
}