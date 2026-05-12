"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StepCard from "@/src/shared/ui/step-card/StepCard";
import { MainHero } from "../../MainHero";
import { TourInfo } from "@/src/shared/ui/TourInfo/TourInfo";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import styles from "../HowItGoing.module.scss";
import { stepsTours } from "../model/constants/step";
import { GROUP_TOUR_2026_SLUG, tours } from "../../Tours/constants/constants";
import arrow from "@/public/images/aroow.png";
import { BackButton } from "@/src/shared/ui/btnBack/btnBack";
import { Props } from "@/src/pages/tourDetail/page";
import BookTour from "@/src/shared/ui/BookTour/BookTour";
import { CreateCustomTourCta } from "@/src/shared/ui/CreateCustomTourCta";

const MAX_OPEN_ITINERARY_DAYS = 2;

const HowItGoing = ({ slug }: Props) => {
  const currentTour = stepsTours.find(tour => tour.slug === slug);
  if (!currentTour) {
    return (
      <section className={styles.notFound}>
        <h2>Tour not found</h2>
      </section>
    );
  }

  const { arr, title, desc, chapter, slider, route, price, duration ,dates } =
    currentTour;

  const listingFormat =
    slug === GROUP_TOUR_2026_SLUG ? ("group" as const) : ("private" as const);

  const [openDayOrder, setOpenDayOrder] = useState<number[]>([0]);

  const toggleDay = useCallback((index: number) => {
    setOpenDayOrder((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      const next = [...prev, index];
      while (next.length > MAX_OPEN_ITINERARY_DAYS) {
        next.shift();
      }
      return next;
    });
  }, []);

  return (
    <>
      <MainHero
        title={slider[0].title}
        img={slider[0].item}
        listingFormat={listingFormat}
      />
      <BackButton />
      {slug !== "day-trips" && <TourInfo route={route} price={price} duration={duration} tour={chapter} dates={dates} />}
      <section className={styles.tourDetails}>
        <div className="container">
          <div className={styles.tourDetails__layout}>
            <div className={styles.tourDetails__main}>
              <header className={styles.tourDetails__header}>
                <h1 className={styles.tourDetails__title}>{chapter}</h1>
                <h2 className={styles.tourDetails__subtitle}>{title}</h2>
                <p className={styles.tourDetails__desc}>{desc}</p>
              </header>

              <div className={styles.tourDetails__program}>
                <h3 className={styles.programTitle}>Itinerary</h3>
                {arr.map((el, index) => (
                  <StepCard
                    {...el}
                    id={index}
                    key={index}
                    isOpen={openDayOrder.includes(index)}
                    onToggle={() => toggleDay(index)}
                  />
                ))}
              </div>
            </div>

            <aside className={styles.tourDetails__sidebar}>
              <div className={styles.tourDetails__gallery}>
                {slider[0].arr.map((e, index) => (
                  <div key={index} className={styles.tourDetails__imageWrapper}>
                    <Image
                      src={e.src}
                      alt={chapter}
                      width={500}
                      height={700}
                      className={styles.tourDetails__image} style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                ))}
              </div>
            </aside>
            <CreateCustomTourCta className={styles.tourDetails__ctaRow} />
          </div>
        </div>
      </section>
      {slug === "day-trips" && <div className={styles.bookTourContainer}><BookTour/></div>}


      <section className={styles.related}>
        <div className="container">
          <div className={styles.relatedTours__head}>
            <h2 className={styles.relatedTours__title}>You might also like</h2>

            <Link
              className={styles.relatedTours__link}
              href="/tours"
              aria-label="View all available tours"
            >
              <span>Watch all tours</span>
              <Image
                src={arrow}
                alt="arrow"
                className={styles.relatedTours__arrow}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
        <div className={styles.relatedTours__list}>
          {tours
            .filter((el) => el.slug !== slug)
            .slice(0, 5)
            .map((el) => (
              <ToursCard {...el} key={el.id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default HowItGoing;
