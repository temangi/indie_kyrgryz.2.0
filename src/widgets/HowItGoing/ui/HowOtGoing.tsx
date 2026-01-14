"use client";

import StepCard from "@/src/shared/ui/step-card/StepCard"
import styles from "../HowItGoing.module.scss"
import { stepsTours } from "../model/constants/step"
import { useParams } from 'next/navigation';

const HowItGoing = () => {
    const params = useParams<{ id: string }>();
    const currentTour = params?.id ? stepsTours[Number(params.id) - 1] : null;

    if (!currentTour) {
        return <section>Тур не найден</section>;
    }

    const { arr, title, desc ,chapter} = currentTour;

    return (
        <section className={styles["tour-details"]}>
            <div className="container">
                <p className={styles["tour-details__unTitle"]}>{title}</p>
                <section className={styles["tour-details__main"]}>
                    <h1 className={styles["tour-details__title"]}>{chapter}</h1>
                    <p className={styles["tour-details__desc"]}>{desc}</p>
                    <main className={styles["tour-details__grid"]}>
                        {arr.map((el, index) => (
                            <StepCard {...el} key={index} />
                        ))}
                    </main>
                </section>
            </div>
        </section>
    )
}

export default HowItGoing