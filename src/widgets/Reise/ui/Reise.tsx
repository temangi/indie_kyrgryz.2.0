"use client";

import { useState } from "react";
import styles from "../Reise.module.scss";

const destinations = ["Song-Kul", "Ala-Archa", "Kel-Suu", "Arslanbob"];

const Reise = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <section id="reise" className={styles.reise}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>Top destinations</h1>
            <p className={styles.subtitle}>[ summer 2025 ]</p>
          </article>

          <main>
            <nav className={styles.nav}>
              {destinations.map((dest) => (
                <button
                  key={dest}
                  className={styles.navItem}
                  onClick={() => setActiveDestination(dest)}
                >
                  {dest}
                </button>
              ))}
            </nav>
            <article className={styles.content}>
              <div className={styles.contentItem}></div>
              <div className={styles.contentItem}></div>
              <div className={styles.contentItem}></div>
              <div className={styles.contentItem}></div>
            </article>
          </main>
        </section>
      </div>
    </section>
  );
};

export default Reise;
