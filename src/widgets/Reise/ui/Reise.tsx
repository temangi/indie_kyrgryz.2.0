"use client";

import styles from "../Reise.module.scss";
import { destiontaionTour } from "../constants/constants";
import ReiseCard from "./Card";


const Reise = () => {

  const tours = destiontaionTour.map((el, index) => <ReiseCard key={index} {...el} index ={index}/>);

  return (
    <section id="reise" data-section className={styles.reise} aria-labelledby="reise-title">
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="reise-title" className={styles.title}>
              WHAT TO SEE
            </h2>
            <p className={styles.subtitle}>[ our recommendations]</p>
          </header>
          <div className={styles.content}>
            {tours}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reise;
