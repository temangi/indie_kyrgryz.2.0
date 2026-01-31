"use client";

import Image from "next/image";
import styles from "../Application.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";

const ADVANTAGES = [
  "Get a tour perfectly matched to your budget",
  "Enjoy a trip designed around your needs and preferences",
  "Experience an itinerary tailored to your pace and interests"
];

const Application = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <section id="application" className={styles.application}>
      <div className="container">
        <div className={styles.menu}>
          <h2 className={styles.title}>
            Couldn't find <br /> the perfect tour?
          </h2>

          <div className={styles.menu__list}>
            <div className={styles.offer}></div>
            <div className={styles.details}>
              <ul className={styles.advantages}>
                {ADVANTAGES.map((text, idx) => (
                  <li key={idx} className={styles.advantage}>
                    <div className={styles.iconCircle}>
                      <Image
                        src="/images/check.svg"
                        alt="Check"
                        width={14}
                        height={14}
                      />
                    </div>
                    <span className={styles.description}>{text}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.button} onClick={openModal}>
                Submit application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;