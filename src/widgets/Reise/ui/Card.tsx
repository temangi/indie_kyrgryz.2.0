import Image from "next/image";
import Link from "next/link";
import styles from "../Reise.module.scss";
import { StaticImageData } from "next/image";

type ReiseCardProps = {
  img: StaticImageData;
  title: string;
  index: number
};

const ReiseCard = (({ img, title, index }: ReiseCardProps) => {
    return (
      <div className={styles.cardMain} >
        <Link href={`/destination/${index + 1}`} className={styles.card} style={{backgroundImage : `url(${img.src})`}}>
          <div className={styles.cardHead}>
            <p className={styles.cardTitle}>{title}</p>
          </div>
          <button className={styles.cardButton}>
            more
          </button>
        </Link>
      </div>
  );
});


export default ReiseCard;