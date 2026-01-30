"use client";
import { useState } from "react";
import styles from "../../../widgets/HowItGoing/HowItGoing.module.scss";
import Image from "next/image";

export type StepCardType = {
  title: string;
  duration: string;
  desc: string;
  place: string;
  id: number;
};

const StepCard = ({ title, duration, desc, place, id }: StepCardType) => {
  const [isVisible, setIsVisible] = useState(id === 0);

  const toggleMain = () => setIsVisible(!isVisible);

  return (
    <div 
      className={`${styles.tourInfo} ${isVisible ? styles.isActive : ""}`} 
      onClick={toggleMain}
      role="button"
      aria-expanded={isVisible}
    >
      <header className={styles.tourInfo__header}>
        <h3 className={styles.tourInfo__title}>
         {title}
        </h3>

        <div className={`${styles.questionToggle} ${isVisible ? styles.questionToggleActive : ""}`}>
          <Image
            className={styles.questionIcon}
            src="/images/plus.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </header>

      <div className={`${styles.tourInfo__content} ${isVisible ? styles.open : ""}`}>
        <div className={styles.tourInfo__inner}>
          <div className={styles.tourInfo__details}>
            <div className={styles.tourInfo__feature}>
              <span className={styles.tourInfo__icon}>🚗</span>
              <span className={styles.tourInfo__label}>
                <strong>Drive:</strong> {duration}
              </span>
            </div>

            <p className={styles.tourInfo__description}>{desc}</p>

            <div className={styles.tourInfo__feature}>
              <span className={styles.tourInfo__icon}>🏠</span>
              <span className={styles.tourInfo__label}>
                <strong>Accommodation:</strong> {place}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;