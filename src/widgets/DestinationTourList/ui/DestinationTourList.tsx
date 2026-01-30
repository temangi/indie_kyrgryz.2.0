"use client";

import styles from "../DestinationTourList.module.scss";
import { useParams } from "next/navigation";
import { destinationTourInfo } from "../constants/constansts"; 
import BulletList from "@/src/shared/ui/BulletList/BulletList";
import Image from "next/image";
import s1 from "@/public/images/slide1.webp";
import s2 from "@/public/images/slide2.webp";
import s3 from "@/public/images/slide3.webp";
import ReiseCard from "../../Reise/ui/Card";
import { destiontaionTour } from "../../Reise/constants/constants";
import Link from "next/link";
import arrow from "@/public/images/aroow.png";

function DestinationTourList() {
  const params = useParams<{ id: string }>();
  const tourId = Number(params?.id);
  const currentTour = destinationTourInfo[tourId - 1];

  if (!currentTour) {
    return (
      <section className={styles.notFound}>
        <div className="container"><h2>Tour not found</h2></div>
      </section>
    );
  }

  const { arr, title, desc, geography } = currentTour;

  return (
    <>
      <section className={styles.destination}>
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
                <h2 className={styles.destination__subtitle}>What You Can See?</h2>
                <div className={styles.destination__highlightsList}>
                  {arr.map((el, index) => (
                    <BulletList key={index} {...el} />
                  ))}
                </div>
              </article>
            </div>

            <aside className={styles.destination__contentImg}>
              {[s1, s2, s3].map((img, i) => (
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
          <div className={styles.relatedTours}>
            <div className={styles.relatedTours__head}>
              <h2 className={styles.relatedTours__title}>Related Tours</h2>
              <Link className={styles.relatedTours__link} href="/tours">
                Watch All Tours
                <Image src={arrow} alt="" className={styles.relatedTours__arrow} />
              </Link>
            </div>
            <div className={styles.relatedTours__list}>
              {destiontaionTour.slice(0, 4).map((el, index) => (
                <ReiseCard key={index} {...el} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationTourList;