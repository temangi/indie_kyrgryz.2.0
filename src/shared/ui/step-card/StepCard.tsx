"use client";
import { useState } from 'react';
import styles from "../../../widgets/HowItGoing/HowItGoing.module.scss"
import Image from 'next/image';

export type StepCardType = {
    title: string,
    duration: string,
    desc: string,
    place: string
    id : number
}


const StepCard = ({ title, duration, desc, place ,id}: StepCardType) => {
    const [isVisible, setIsVisible] = useState(id === 0 ? true : false );

    const toggleMain = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles['tour-info']} onClick={toggleMain}>
            <header className={styles['tour-info__header']}>
                <h3 className={`${styles['tour-info__title']} ${isVisible ? styles['isActive'] : ''}`}>
                    {title}
                </h3>
                <button
                    type="button"
                    className={`${styles.questionToggle} ${isVisible ? styles.questionToggleActive : ""}`}
                    aria-expanded={isVisible}
                >
                    <Image
                        className={styles.questionIcon}
                        src="/images/plus.svg"
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                    />
                </button>
            </header>

            <div className={`${styles['tour-info__content']} ${isVisible ? styles['isActive'] : ''}`}>
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
            </div>

        </div>
    )
}

export default StepCard