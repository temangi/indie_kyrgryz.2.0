"use client";
import { useState } from 'react';
import styles from "../../../widgets/HowItGoing/HowItGoing.module.scss"

export type StepCardType = {
    title: string,
    duration: string,
    desc: string,
    place: string
}


const StepCard = ({ title, duration, desc, place }: StepCardType) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMain = () => {
        setIsVisible(!isVisible);
        console.log(isVisible)
    };

    return (
        <div className={styles['tour-info']} onClick={toggleMain}>
            <h1 className={`${styles['tour-info__title']} ${isVisible ? styles['isActive'] : ''}`}>{title}</h1>
            <main className={`${styles['tour-info__content']} ${isVisible ? styles['isActive'] : ''}`}>
                <div className={styles['tour-info__feature']}>
                    <span className={styles['tour-info__label']}>
                        <b className={styles['tour-info__accent']}>Drive</b> : {duration}
                    </span>
                </div>

                <p className={styles['tour-info__description']}>{desc}</p>

                <div className={styles['tour-info__feature']}>
                    <span className={styles['tour-info__label']}>
                        Accommodation : {place}
                    </span>
                </div>
            </main>

        </div>
    )
}

export default StepCard