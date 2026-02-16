"use client";

import Image from "next/image";
import styles from "../Team.module.scss";
import anush from "@/public/images/anush.webp";
import jack from "@/public/images/jack.webp";

const Team = () => {
  return (
    <section id="team" className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="team-title" className={styles.title}>
            Our Team
          </h2>
          <p className={styles.subtitle}>
            The people who make your adventure unforgettable
          </p>
        </header>

        <div className={styles.mainGrid}>
          <div className={styles.photoWrapper}>
            <Image
              src={anush}
              alt="Anuar - Guide"
              fill
              sizes="100vw"
              className={styles.memberImg}
            />
            <span className={styles.nameLabel}>Anuar</span>
          </div>
          <article className={styles.contentBlock}>
            <div className={styles.textGroup}>
              <p>
                <strong>Anuar</strong> is a skilled guide and cultural
                ambassador who brings the rich heritage of Kyrgyzstan to life.
                With a deep knowledge of local traditions and history, he
                creates immersive experiences that connect travelers with the
                heart of the region.
              </p>
              <div className={styles.divider} />
              <p>
                <strong>Jack</strong> is the founder and content creator who
                showcases Kyrgyzstan through his blog. He personally tests every
                route, captures drone footage, and helps people experience the
                country on a deeper level.
              </p>
            </div>
          </article>

          <div className={styles.photoWrapper}>
            <Image
              src={jack}
              alt="Jack - Founder"
              fill
              sizes="100vw"
              className={styles.memberImg}
            />
            <span className={styles.nameLabel}>Jack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
