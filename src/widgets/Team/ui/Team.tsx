"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../Team.module.scss";
import { TEAM_MEMBERS } from "../constants/members";

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
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.photoWrapper}>
              <Image
                src={member.image}
                alt={member.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.memberImg}
              />
              <span className={styles.nameLabel}>
                {member.name} - {member.role}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.more}>
          <Link href="/team" className={styles.moreLink}>
            More about the team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
