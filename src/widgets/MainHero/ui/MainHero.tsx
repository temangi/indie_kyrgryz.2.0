import styles from "../MainHero.module.scss";
import Image, { StaticImageData } from "next/image";
import logo from "@/public/images/whiteLogo.png";
import type { ReactNode } from "react";

type MainHeroProps = {
  title: string;
  unTitle?: ReactNode;
  img: StaticImageData;
  /** Optional id on the main heading (e.g. skip links, in-page anchors). */
  titleId?: string;
  /** Tour detail: private vs fixed-date group departure. */
  listingFormat?: "private" | "group";
  /** Describes the photograph. Falls back to the heading. */
  imageAlt?: string;
};

const MainHero = ({ title, unTitle, img, titleId, listingFormat, imageAlt }: MainHeroProps) => {
  return (
    <section className={styles.main}>
      <Image
        src={img}
        alt={imageAlt ?? `${title} — Kyrgyzstan travel with Indie Kyrgyz`}
        priority
        fetchPriority="high"
        quality={80}
        sizes="100vw"
        className={styles.main__bg}
      />
      <div className={styles.main__logo}>
        <Image
          src={logo}
          sizes="(max-width: 320px) 160px, (max-width: 480px) 170px, 200px"
          alt="Indie Kyrgyz Travel logo"
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
