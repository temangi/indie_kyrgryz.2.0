import styles from "@/src/widgets/Tours/Tours.module.scss";
import Link from "next/link";
import { ITour } from "@/src/widgets/Tours/constants/constants";
import Image from "next/image";

type ToursCardProps = ITour & {
  showPrice?: boolean;
  /** When set, shows a Private / Group pill (e.g. on the all-tours page). */
  listingFormat?: "private" | "group";
};

export const ToursCard = ({
  id,
  slug,
  title,
  day,
  price,
  tag,
  img,
  href,
  showPrice = true,
  listingFormat,
}: ToursCardProps) => {
  const priceShown = Boolean(showPrice && price);
  const formatClass =
    listingFormat === "group" ? styles.cardFormat_group : styles.cardFormat_private;
  const formatPosClass = priceShown
    ? styles.cardFormat_belowPrice
    : styles.cardFormat_alone;

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
        {tag && <div className={styles.cardTag}>{tag}</div>}
        {showPrice && price && (
          <div className={styles.cardPrice}>from {price}</div>
        )}
        {listingFormat && (
          <div className={`${styles.cardFormat} ${formatPosClass} ${formatClass}`}>
            {listingFormat === "group" ? "Group" : "Private"}
          </div>
        )}

        <div className={styles.cardContent}>
          <div className={styles.cardHead}>
            <h3 className={styles.cardTitle}>{title}</h3>
          </div>
          <button className={styles.cardButton}>Tour details</button>
        </div>
      </Link>
    </div>
  );
};
