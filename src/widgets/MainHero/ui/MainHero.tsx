import styles from "../MainHero.module.scss";
import Image, { StaticImageData } from "next/image";
import logo from "@/public/images/whiteLogo.png";

type MainHeroProps = {
  title: string;
  unTitle?: string;
  img: StaticImageData;
};

const MainHero = ({ title, unTitle, img }: MainHeroProps) => {
  return (
    <section className={styles.main}>
      <Image
        src={img}
        alt="Hero background"
        fill
        priority
        quality={90} 
        sizes="100vw" 
        className={styles.main__bg}
      />
      <div className={styles.main__logo}>
        <Image
          priority
          src={logo}
          sizes="100vw" 
          alt="Indie kyrgyz travel"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.main__content}>
        <h1 className={styles.main__title}>{title}</h1>
        {unTitle && <p className={styles.main__desc}>{unTitle}</p>}
      </div>
    </section>
  );
};

export default MainHero;