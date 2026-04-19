import styles from "@/src/widgets/Tours/Tours.module.scss";
import Link from "next/link";
import { ITour } from "@/src/widgets/Tours/constants/constants";
import Image from "next/image";

export const ToursCard = ({ id, slug, title, day, img, href }: ITour) => {
  return (
    <div className={styles.cardMain}>
      <Link href={`/${href}/${slug}`} className={styles.card}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="100vw"
          priority={id === 0}
          className={styles.cardImage}
        />
        <div className={styles.cardBadge}>{day}</div>

        <div className={styles.cardContent}>
          <div className={styles.cardHead}>
            <p className={styles.cardTitle}>{title}</p>
          </div>
          <button className={styles.cardButton}>Tour details</button>
        </div>
      </Link>
    </div>
  );
};
