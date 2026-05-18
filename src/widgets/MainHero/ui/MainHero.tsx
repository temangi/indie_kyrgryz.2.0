import styles from "../MainHero.module.scss";
import Image, { StaticImageData } from "next/image";
import logo from "@/public/images/whiteLogo.png";

type MainHeroProps = {
  title: string;
  unTitle?: string;
  img: StaticImageData;
  /** Optional id on the main heading (e.g. skip links, in-page anchors). */
  titleId?: string;
  /** Tour detail: private vs fixed-date group departure. */
  listingFormat?: "private" | "group";
};

const MainHero = ({ title, unTitle, img, titleId, listingFormat }: MainHeroProps) => {
  return (
    <section className={styles.main}>
      <Image
        src={img}
        alt={`${title} — Kyrgyzstan travel with Indie Kyrgyz`}
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className={styles.main__bg}
      />
      <div className={styles.main__logo}>
        <Image
          src={logo}
          sizes="100vw"
          alt="Indie kyrgyz travel"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title} id={titleId}>
          {title}
        </h1>
        {listingFormat && (
          <p
            className={`${styles.main__format} ${
              listingFormat === "group"
                ? styles.main__format_group
                : styles.main__format_private
            }`}
            role="note"
            aria-label={
              listingFormat === "group"
                ? "Fixed-date group tour"
                : "Private tour"
            }
          >
            {listingFormat === "group" ? "Group tour" : "Private tour"}
          </p>
        )}
        {unTitle && <p className={styles.main__desc}>{unTitle}</p>}
      </div>
    </section>
  );
};

export default MainHero;
