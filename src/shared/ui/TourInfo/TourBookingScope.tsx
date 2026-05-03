"use client";

import { useEffect } from "react";
import { useModalStore } from "@/src/shared/model/useModalStore";

type TourBookingScopeProps = {
  tourName: string;
};

/** Registers the current packaged tour so the global SignTour can show “Book this Tour” on tour pages. */
export function TourBookingScope({ tourName }: TourBookingScopeProps) {
  const setBookingTour = useModalStore((s) => s.setBookingTour);

  useEffect(() => {
    setBookingTour(tourName);
    return () => setBookingTour(null);
  }, [tourName, setBookingTour]);

  return null;
}
