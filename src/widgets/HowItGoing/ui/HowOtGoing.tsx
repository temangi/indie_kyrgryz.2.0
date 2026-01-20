"use client";

import StepCard from "@/src/shared/ui/step-card/StepCard"
import styles from "../HowItGoing.module.scss"
import { stepsTours } from "../model/constants/step"
import { useParams } from 'next/navigation';
import { TourSlider } from "@/src/shared/ui/Slider";


const HowItGoing = () => {
    const params = useParams<{ id: string }>();
    const currentTour = params?.id ? stepsTours[Number(params.id) - 1] : null;

    if (!currentTour) {
        return <section>Тур не найден</section>;
    }

    const { arr, title, desc, chapter, slider } = currentTour;
   

    return (
        <>
            <TourSlider items={slider} />
            <section className={styles["tour-details"]}>
                <div className="container">
                    <h1 className={styles["tour-details__unTitle"]}>{chapter}</h1>
                    <section className={styles["tour-details__main"]}>
                        <p className={styles["tour-details__title"]}>{title}</p>
                        <p className={styles["tour-details__desc"]}>{desc}</p>
                        <main className={styles["tour-details__grid"]}>
                            {arr.map((el, index) => (
                                <StepCard {...el} id={index} key={index} />
                            ))}
                        </main>
                    </section>
                </div>
            </section>
        </>
    )
}

export default HowItGoing