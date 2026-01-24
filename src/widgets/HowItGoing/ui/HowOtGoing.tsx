"use client";

import StepCard from "@/src/shared/ui/step-card/StepCard"
import styles from "../HowItGoing.module.scss"
import { stepsTours } from "../model/constants/step"
import { useParams } from 'next/navigation';
import { TourSlider } from "@/src/shared/ui/Slider";
import { TourInfo } from "@/src/shared/ui/TourInfo/TourInfo"
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { tours } from "../../Tours/constants/constants";
import Link from "next/link";

const forEx = {
    duration : 300,
    price : 1000 
}

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
                        <article className={styles["tour-details__aside"]}>
                            <main className={styles["tour-details__grid"]}>
                                {arr.map((el, index) => (
                                    <StepCard {...el} id={index} key={index} />
                                ))}

                            </main>
                        </article>
                    </section>
                </div>
            </section>
            <TourInfo days={arr.length} {...forEx}/>
            <section className={styles["related"]}>
                <div className="container">
                    <section className={styles["related-tours"]}>
                        <div className={styles["related-tours__head"]}>
                            <h1 className={styles["related-tours__title"]}>Related Tours</h1>
                            <Link className={styles["related-tours__link"]} href={"/tours"}>See All Tours</Link>

                        </div>
                        <main className={styles["related-tours__list"]}>
                            {tours.slice(0, 3).map((el, index) => <ToursCard {...el} key={index} />)}
                        </main>
                    </section>
                </div>
            </section>
        </>
    )
}

export default HowItGoing