"use client";

import styles from "../Reise.module.scss";
import { destiontaionTour } from "../constants/constants";
import ReiseCard from "./Card";


const Reise = () => {

  const tours = destiontaionTour.map((el, index) => <ReiseCard key={index} {...el} index ={index}/>);

  return (
    <section id="reise"  data-section className={styles.reise}>
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
