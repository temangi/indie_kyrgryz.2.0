import styles from "@/src/widgets/Tours/Tours.module.scss";
import Link from "next/link";
import { ITour } from "@/src/widgets/Tours/constants/constants";
import Image from "next/image";

export const ToursCard = ({ id, title, day, img,href }: ITour) => {
  return (
    <div className={styles.cardMain}>
      <Link href={`/${href}/${id}`} className={styles.card}>
        <Image
          src={img}
          alt={title}
          fill
          priority={id === 0}
          className={styles.cardImage}
        />

        <div className={styles.cardContent}>
           <div className={styles.cardHead}>
          <p className={styles.cardTitle}>{title}</p>
           <span className={styles.cardDuration}>{day}</span>
        </div>
         
          <button className={styles.cardButton}>Tour program</button>
        </div>
      </Link>
    </div>
  );
};
