"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../Tours.module.scss";
import { tours } from "../constants/constants";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";

const bestTours = tours
  .slice(0, 3)
  .map((el, index) => <ToursCard {...el} key={index} />);
const groupTours = tours
  .slice(3, 6)
  .map((el, index) => <ToursCard {...el} key={index} />);

const Tours = () => {
  const [activeTab, setActiveTab] = useState("best");

  return (
    <section className={styles.tours} aria-labelledby="tours-title">
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="tours-title" className={styles.title}>
              tour poster
            </h2>
            <p className={styles.subtitle}>
              Kyrgyzstan, Kazakhstan & Uniq Experience
            </p>
          </header>
          <nav className={styles.nav} aria-label="Tours categories">
            <button
              type="button"
              data-testid="best-tab"
              className={`${styles.navItem} ${activeTab === "best" ? styles.active : ""}`}
              onClick={() => setActiveTab("best")}
            >
              Our best tours
            </button>
            <button
              type="button"
              data-testid="group-tab"
              className={`${styles.navItem} ${activeTab === "group" ? styles.active : ""}`}
              onClick={() => setActiveTab("group")}
            >
              Group tour 2025
            </button>
          </nav>

          <div className={styles.content}>
            <div
              className={`${styles.tab} ${
                activeTab === "best" ? styles.active : styles.hidden
              }`}
            >
              {groupTours}
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "group" ? styles.active : styles.hidden
              }`}
            >
              {bestTours}
            </div>
          </div>

          <Link className={styles.allTours} href="/tours">
            All tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tours;
