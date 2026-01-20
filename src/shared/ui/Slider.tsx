"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from '@/src/widgets/HowItGoing/HowItGoing.module.scss';
import { StaticImageData } from 'next/image';

type SliderType = {
    item: StaticImageData | string;
    title : string
};

export const TourSlider = ({ items }: { items: SliderType[] }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: true, 
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={0} 
                slidesPerView={1} 
            
                className={styles.mySwiper}
           
            >
                {items.map((el, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={el.item}
                                alt={"image tour"}
                                fill
                                priority={index === 0} 
                                sizes="100vw"
                                className={styles.img}
                            />
                            <h1 className={styles["slider-title"]}>{el.title}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};