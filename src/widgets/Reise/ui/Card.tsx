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
      <Link href={`/destination/${index + 1}`} className={styles["reise__card"]}>
        <figure>
          <Image src={img} alt="destionation" className={styles["card__tourImg"]} />
        </figure>
        <p className={styles["reise__tourTitle"]}>{title}</p>
      </Link>
    )
  })

export default ReiseCard;