"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import StepCard from "@/src/shared/ui/step-card/StepCard";
import { MainHero } from "../../MainHero";
import { TourInfo } from "@/src/shared/ui/TourInfo/TourInfo";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { useModalBookATourStore } from "@/src/shared/model/useModalStore";
import styles from "../HowItGoing.module.scss";
import { stepsTours } from "../model/constants/step";
import { tours } from "../../Tours/constants/constants";
import arrow from "@/public/images/aroow.png";

const HowItGoing = () => {
  const params = useParams<{ id: string }>();
  const currentTour = params?.id ? stepsTours[Number(params.id) - 1] : null;
  const openModal = useModalBookATourStore((state) => state.openModal);

  if (!currentTour) {
    return (
      <section className={styles.notFound}>
        <h2>Tour not found</h2>
      </section>
    );
  }

  const { arr, title, desc, chapter, slider, route, price, duration } =
    currentTour;

  return (
    <>
      <MainHero title={slider[0].title} img={slider[0].item} />
      <TourInfo route={route} price={price} duration={duration} />

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
                  <StepCard {...el} id={index} key={index} />
                ))}
              </div>
            </div>

            <aside className={styles.tourDetails__sidebar}>
              <div className={styles.stickyBox}>
                <h4>Book this adventure</h4>
                <p>Personalized tours across Kyrgyzstan</p>
                <button className={styles.bookBtn} onClick={openModal}>
                  Contact Us
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.related}>
        <div className="container">
          <div className={styles.relatedTours}>
            <div className={styles.relatedTours__head}>
              <h2 className={styles.relatedTours__title}>Related Tours</h2>
              <Link className={styles.relatedTours__link} href="/tours">
                Watch All Tours
                <Image
                  src={arrow}
                  alt=""
                  className={styles.relatedTours__arrow}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.relatedTours__list}>
          {tours.filter((el) => el.id !== Number(params?.id)).slice(0, 5).map((el, index) => (
            <ToursCard {...el} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItGoing;
