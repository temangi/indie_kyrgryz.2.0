"use client";

import Image from "next/image";
import styles from "../Team.module.scss";
import member from "@/public/images/cat.jpg";

const Team = () => {
  return (
    <section id="team" className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="team-title" className={styles.title}>About us</h2>
          <p className={styles.subtitle}>People who create our journeys</p>
        </header>

        <div className={styles.mainGrid}>
          <div className={styles.photoWrapper}>
            <Image 
              src={member} 
              alt="Anuar - Guide" 
              fill 
              className={styles.memberImg} 
            />
            <span className={styles.nameLabel}>Anuar</span>
          </div>
          <article className={styles.contentBlock}>
            <div className={styles.textGroup}>
              <p>
                <strong>Anuar</strong> is a skilled guide and cultural ambassador who brings
                the rich heritage of Kyrgyzstan to life. With a deep
                knowledge of local traditions and history, he creates
                immersive experiences that connect travelers with the heart
                of the region.
              </p>
              <div className={styles.divider} />
              <p>
                <strong>Jack</strong> is the founder and content creator who
                showcases Kyrgyzstan through his blog. He personally tests every route, 
                captures drone footage, and helps people experience
                the country on a deeper level.
              </p>
            </div>
          </article>

          <div className={styles.photoWrapper}>
            <Image 
              src={member} 
              alt="Jack - Founder" 
              fill 
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