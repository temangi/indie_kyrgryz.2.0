"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "@/src/widgets/HowItGoing/HowItGoing.module.scss";
import { StaticImageData } from "next/image";

type SliderType = {
  item: StaticImageData | string;
  title: string;
};

export const TourSlider = ({ items }: { items: SliderType[] }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"} // Включаем эффект затухания
        fadeEffect={{ crossFade: true }} // Делает переход чище
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500} // Медленный переход для красоты
        className={styles.mySwiper}
      >
        {items.map((el, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageWrapper}>
              <Image src={el.item} alt={el.title} fill className={styles.img} />
              <h1 className={styles["slider-title"]}>{el.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
