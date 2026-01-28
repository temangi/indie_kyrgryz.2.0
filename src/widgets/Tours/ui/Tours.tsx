"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../Tours.module.scss";
import { tours } from "../constants/constants";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { motion, AnimatePresence } from "framer-motion";

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
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>tour poster</h1>
            <p className={styles.subtitle}>
              Kyrgyzstan, Kazakhstan & Uniq Experience
            </p>
          </article>
          <nav className={styles.nav}>
            <button
              data-testid="best-tab"
              className={`${styles.navItem} ${activeTab === "best" ? styles.active : ""}`}
              onClick={() => setActiveTab("best")}
            >
              Our best tours
            </button>
            <button
              data-testid="group-tab"
              className={`${styles.navItem} ${activeTab === "group" ? styles.active : ""}`}
              onClick={() => setActiveTab("group")}
            >
              Group tour 2025
            </button>
          </nav>

          <article className={styles.content}>
            <div
              className={`${styles.tab} ${
                activeTab === "best" ? styles.active : styles.hidden
              }`}
            >
              {bestTours}
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "group" ? styles.active : styles.hidden
              }`}
            >
              {groupTours}
            </div>
          </article>

          <Link className={styles.allTours} href="/tours">
            All tours
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Tours;
