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
    <section className={styles.tours}>
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 className={styles.title}>tour poster</h2>
            <p className={styles.subtitle}>
              Kyrgyzstan, Kazakhstan & Uniq Experience
            </p>
          </header>
          <nav className={styles.nav}>
            <button
              onClick={() => setActiveTab("best")}
              className={`${styles.navItem} ${activeTab === "best" ? styles.active : ""}`}
            >
              Our best tours
            </button>
            <button
              onClick={() => setActiveTab("group")}
              className={`${styles.navItem} ${activeTab === "group" ? styles.active : ""}`}
            >
              Group tour 2025
            </button>
          </nav>
        </div>
      </div>

      <div className={styles.content}>
        <div
          className={`${styles.tab} ${activeTab === "best" ? styles.active : styles.hidden}`}
        >
          {groupTours}
        </div>
        <div
          className={`${styles.tab} ${activeTab === "group" ? styles.active : styles.hidden}`}
        >
          {bestTours}
        </div>
      </div>

      <div className="container">
        <Link className={styles.allTours} href="/tours">
          All tours
        </Link>
      </div>
    </section>
  );
};

export default Tours;
