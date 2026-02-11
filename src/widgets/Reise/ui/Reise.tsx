"use client";

import styles from "../Reise.module.scss";
import { destiontaionTour } from "../constants/constants";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";

const Reise = () => {
  return (
    <section id="reise" className={styles.reise}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>WHAT TO SEE?</h2>
        </header> 
      </div>
      <div className={styles.content}>
          {destiontaionTour.map((el, index) => (
            <ToursCard key={index} {...el} />
          ))}
        </div>
    </section>
  );
};

export default Reise;
