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
  const currentTour = params?.id
    ? destinationTourInfo[Number(params.id) - 1]
    : null;

  if (!currentTour) {
    return <section>Тур не найден</section>;
  }

  const { arr, title, desc, geography } = currentTour;

  return (
    <>
      <section className={styles.destination} aria-labelledby="destination-title">
        <div className="container">
          <div className={styles.destination__content}>
            <div className={styles.destination__contentText}>
              <header className={styles.destination__header}>
                <h1 id="destination-title" className={styles.destination__title}>
                  {title}
                </h1>
                <p className={styles.destination__description}>{desc}</p>
              </header>

              <div className={styles.destination__section}>
                <h2 className={styles.destination__subtitle}>Geography</h2>
                <p className={styles.destination__text}>{geography}</p>
              </div>

              <article className={styles.destination__highlights}>
                <h2 className={styles.destination__subtitle}>
                  What You Can See ?
                </h2>
                <div className={styles.destination__highlightsList}>
                  {arr.map((el, index) => (
                    <BulletList key={index} {...el} />
                  ))}
                </div>
              </article>
            </div>
            <div className={styles.destination__contentImg}>
              <Image src={s1} alt="Destination photo 1" layout="responsive" />
              <Image src={s2} alt="Destination photo 2" layout="responsive" />
              <Image src={s3} alt="Destination photo 3" layout="responsive" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles["related"]} aria-labelledby="related-tours-title">
        <div className="container">
          <div className={styles["related-tours"]}>
            <div className={styles["related-tours__head"]}>
              <h2 id="related-tours-title" className={styles["related-tours__title"]}>
                Related Tours
              </h2>
              <Link className={styles["related-tours__link"]} href={"/tours"}>
                Watch All Tours{" "}
                <Image
                  src={arrow}
                  alt=""
                  aria-hidden="true"
                  className={styles["related-tours__arrow"]}
                />
              </Link>
            </div>
            <div className={styles["related-tours__list"]}>
              {destiontaionTour.map((el, index) => (
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
