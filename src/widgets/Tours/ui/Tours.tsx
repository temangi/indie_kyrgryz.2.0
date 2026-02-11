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
            <h2 className={styles.title}>tours & dates</h2>
          </header>
          <nav className={styles.nav}>
            <button
              onClick={() => setActiveTab("best")}
              className={`${styles.navItem} ${activeTab === "best" ? styles.active : ""}`}
            >
              <span>Our best tours</span>
              <small>Popular & flexible</small>
            </button>

            <button
              onClick={() => setActiveTab("group")}
              className={`${styles.navItem} ${activeTab === "group" ? styles.active : ""}`}
            >
              <span>Group tour 2025</span>
              <small>Fixed dates & groups</small>
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
