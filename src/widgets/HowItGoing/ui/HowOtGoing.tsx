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
import arrow from "@/public/images/aroow.png"
import Image from "next/image";

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
            <TourInfo days={arr.length} {...forEx}/>

            <section className={styles["tour-details"]} aria-labelledby="tour-title">
                <div className="container">
                    <header className={styles["tour-details__main"]}>
                        <p className={styles["tour-details__unTitle"]}>{chapter}</p>
                        <h1 id="tour-title" className={styles["tour-details__title"]}>
                            {title}
                        </h1>
                        <p className={styles["tour-details__desc"]}>{desc}</p>
                    </header>
                    <div className={styles["tour-details__aside"]}>
                        <div className={styles["tour-details__grid"]}>
                                {arr.map((el, index) => (
                                    <StepCard {...el} id={index} key={index} />
                                ))}

                        </div>
                    </div>
                </div>
            </section>
        
            <section className={styles["related"]} aria-labelledby="tour-related-title">
                <div className="container">
                    <div className={styles["related-tours"]}>
                        <div className={styles["related-tours__head"]}>
                            <h2 id="tour-related-title" className={styles["related-tours__title"]}>
                                Related Tours
                            </h2>
                            <Link className={styles["related-tours__link"]} href={"/tours"}>
                                Watch All Tours{" "}
                                <Image src={arrow} alt="" aria-hidden="true" className={styles["related-tours__arrow"]} />
                            </Link>

                        </div>
                        <div className={styles["related-tours__list"]}>
                            {tours.slice(0, 3).map((el, index) => <ToursCard {...el} key={index} />)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItGoing