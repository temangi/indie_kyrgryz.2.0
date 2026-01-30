"use client";

import styles from "../Reise.module.scss";
import { destiontaionTour } from "../constants/constants";
import ReiseCard from "./Card";

const Reise = () => {
  return (
    <section id="reise" className={styles.reise}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>WHAT TO SEE?</h2>
        </header>

        <div className={styles.content}>
          {destiontaionTour.map((el, index) => (
            <ReiseCard key={index} {...el} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reise;
