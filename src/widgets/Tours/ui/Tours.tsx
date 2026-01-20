"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../Tours.module.scss";

interface ITour {
  title: string;
  day: string;
  id : number
}


const tours: ITour[] = [
  {
    id : 1,
    title: " Best of Kyrgyzstan",
    day: "8 days"
  },
  {
    id : 2,
    title: "Song-kul horsebackriding",
    day: "3 days"
  },
  {
    id : 3,
    title: "Altyn-Arashan & Ala-Kul trip",
    day: "4 days"
  },
  {
    id : 4,
    title: "Kyrgyzstan & Kazakhstan trip",
    day: "11 days"
  },
  {
    id : 5,
    title: "Kyrgyz week",
    day: "7 days"
  },
  {
    id : 6,
    title: "Mountain Adventure",
    day: "10 days"
  },
]

const bestTours = tours.slice(0, 3).map(({ title, day , id },index) => {
  return (
    <div className={styles.cardMain} key={index}>
      <Link href={`/tours/${id}`} className={styles.card}>
      <div className={styles.cardHead}>
          <p className={styles.cardTitle}>{title}</p>
          <span className={styles.cardDuration}>{day}</span>
        </div>
        <button className={styles.cardButton}>
          tour program
        </button>
      </Link>
    </div>
  )
})
const groupTours = tours.slice(3, 6).map(({ title, day ,id},index) => {
  return (
    <div className={styles.cardMain} key={index}>
      <Link href={`/tours/${id}`} className={styles.card}>
        <div className={styles.cardHead}>
          <p className={styles.cardTitle}>{title}</p>
          <span className={styles.cardDuration}>{day}</span>
        </div>
        <button className={styles.cardButton}>
          tour program
        </button>
      </Link>
    </div>
  )
})

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

          <main>
            <article className={styles.content}>
              {activeTab === "best" ? groupTours : bestTours}
            </article>
          </main>
          <Link className={styles.allTours} href="/tours">
            All tours
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Tours;
