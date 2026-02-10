"use client";

import styles from "../DestinationTourList.module.scss";
import { useParams } from "next/navigation";
import { destinationTourInfo } from "../constants/constansts";
import BulletList from "@/src/shared/ui/BulletList/BulletList";
import Image from "next/image";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { destiontaionTour } from "../../Reise/constants/constants";
import Link from "next/link";
import arrow from "@/public/images/aroow.png";
import { BackButton } from "@/src/shared/ui/btnBack/btnBack";

function DestinationTourList() {
  const params = useParams<{ id: string }>();
  const tourId = Number(params?.id);
  const currentTour = destinationTourInfo[tourId - 1];

  if (!currentTour) {
    return (
      <section className={styles.notFound}>
        <div className="container">
          <h2>Tour not found</h2>
        </div>
      </section>
    );
  }

  const { arr, title, desc, geography, imgs } = currentTour;

  return (
    <>
      <section className={styles.destination}>
        <BackButton />
        <div className="container">
          <div className={styles.destination__content}>
            <div className={styles.destination__contentText}>
              <header className={styles.destination__header}>
                <h1 className={styles.destination__title}>{title}</h1>
                <p className={styles.destination__description}>{desc}</p>
              </header>

              <div className={styles.destination__section}>
                <h2 className={styles.destination__subtitle}>Geography</h2>
                <p className={styles.destination__text}>{geography}</p>
              </div>

              <article className={styles.destination__highlights}>
                <h2 className={styles.destination__subtitle}>
                  What You Can See?
                </h2>
                <div className={styles.destination__highlightsList}>
                  {arr.map((el, index) => (
                    <BulletList key={index} {...el} />
                  ))}
                </div>
              </article>
            </div>

            <aside className={styles.destination__contentImg}>
              {imgs.map((img, i) => (
                <div key={i} className={styles.imageWrapper}>
                  <Image
                    src={img}
                    alt={`View ${i + 1}`}
                    className={styles.sidebarImg}
                    placeholder="blur"
                  />
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

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
          {destiontaionTour.slice(0, 4).map((el, index) => (
            <ToursCard key={index} {...el} id={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default DestinationTourList;
