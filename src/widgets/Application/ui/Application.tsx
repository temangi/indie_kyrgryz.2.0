"use client";

import Image from "next/image";
import styles from "../Application.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";

const Application = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section
      id="application"
      className={styles.application}
      aria-labelledby="application-title"
    >
      <div className="container">
        <div className={styles.menu}>
          <h2 id="application-title" className={styles.title}>
            Couldn't find <br />
            the perfect tour?
          </h2>
          <main className={styles.menu__list}>
            <header className={styles.offer}></header>
            <div className={styles.details}>
              <ul className={styles.advantages}>
                <li className={styles.advantage}>
                  <Image
                    className={styles.icon}
                    src="/images/check.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                  />
                  <span className={styles.description}>
                    Get a tour perfectly matched to your budget
                  </span>
                </li>
                <li className={styles.advantage}>
                  <Image
                    className={styles.icon}
                    src="/images/check.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                  />
                  <span className={styles.description}>
                    Enjoy a trip designed around your needs and preferences
                  </span>
                </li>
                <li className={styles.advantage}>
                  <Image
                    className={styles.icon}
                    src="/images/check.svg"
                    alt="Checkmark"
                    width={24}
                    height={24}
                  />
                  <span className={styles.description}>
                    Experience an itinerary tailored to your pace and interests
                  </span>
                </li>
              </ul>
              <button className={styles.button} onClick={openModal}>
                Submit application
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Application;
