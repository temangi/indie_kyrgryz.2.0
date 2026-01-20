"use client";

import styles from "../Reise.module.scss";
import { destiontaionTour } from "../constants/constants";
import Image from "next/image";
import Link from "next/link";


const Reise = () => {

  const tours = destiontaionTour.map(({ img, title }, index) => {
    return (
      <Link href={`/destination/${index + 1}`} key={index} className={styles["reise__card"]}>
        <figure>
          <Image src={img} alt="destionation" className={styles["card__tourImg"]} />
        </figure>
        <p className={styles["reise__tourTitle"]}>{title}</p>
      </Link>
    )
  })

  return (
    <section id="reise" className={styles.reise}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>Top destinations</h1>
            <p className={styles.subtitle}>[ our recommendations]</p>
          </article>
          <article className={styles.content}>
            {tours}
          </article>
        </section>
      </div>
    </section>
  );
};

export default Reise;
