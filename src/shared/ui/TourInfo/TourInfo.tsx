"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/s1.webp";
import { useModalStore } from "@/src/shared/model/useModalStore";
import { SignTour } from "@/src/widgets/SignTour";

type TourInfo = {
  route: string;
  price: string;
  duration: string;
};

export const TourInfo = ({ route, price, duration }: TourInfo) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section className={styles.mainTour} aria-labelledby="tour-info-title">
      <div className="container">
        <div className={styles.mainContent}>
          <h2 id="tour-info-title" className={styles.title}>
            THE MAIN THINGS ABOUT THE HIKE
          </h2>

          <div className={styles.details}>
            <article className={styles.infoCard}>
              <aside className={styles.duration}>
                <div className={styles.durationItem}>
                  <p className={styles.label}>duration:</p>
                  <span className={styles.value}>{duration}</span>
                </div>
                <div className={styles.durationItem}>
                  <p className={styles.label}>ROUTE DISTANCE:</p>
                  <span className={styles.value}>
                    {route}{" "}
                    <small className={styles.smallText}>(round trip)</small>
                  </span>
                </div>
                <div className={styles.durationItem}>
                  <p className={styles.label}>PRICE:</p>
                  <span className={styles.value}>{price}</span>
                </div>
              </aside>
              <Image
                className={styles.cardImage}
                src={img}
                alt="Hiking tour photo"
              />
            </article>
          </div>

          <button className={styles.mainButton} onClick={() => openModal()}>
            BOOK THIS TOUR
          </button>
        </div>
      </div>
      <SignTour title={"Book this Tour"} />
    </section>
  );
};
