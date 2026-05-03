"use client";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export const BackButton = () => {
  const router = useRouter();

  return (
   <div className={styles.backBtnContainer}>
     <div className="container">
      <button className={styles.backBtn} onClick={() => router.back()}>
        <span className={styles.arrow}>←</span>
        <span className={styles.text}>Go Back</span>
      </button>
    </div>
    </div>
  );
};

