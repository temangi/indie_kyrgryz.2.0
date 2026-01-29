"use client"

import { useState } from 'react';
import styles from './style.module.scss';
import { useEffect } from 'react';
import { BookATour } from './constants/constansts';
import { useModalBookATourStore } from "@/src/shared/model/useModalStore";
import Image from 'next/image';

export const BookTour = () => {
    const [formData, setFormData] = useState({});
    const isOpen = useModalBookATourStore((state) => state.isOpen);
    const closeModal = useModalBookATourStore((state) => state.closeModal);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    const clickBook = () => {
        closeModal()
        localStorage.setItem("formData" , JSON.stringify(formData))
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <section
            className={`${styles.asideWrapper} ${isOpen && styles.isActive} `}
            onClick={() => closeModal()}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isOpen}
        >
            <div className={styles.main} onClick={(e) => e.stopPropagation()} >
                <h2 className={styles.title}>Book This Tour</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    {BookATour.map((item, index) => {
                        const inputId = `input-${index}`;
                        return (
                            <div key={inputId} className={styles.inputGroup}>
                                <label htmlFor={inputId} className={styles.label}>
                                    {item.title}
                                </label>
                                <input
                                    id={inputId}
                                    name={item.name || `field_${index}`}
                                    type={item.type || 'text'}
                                    placeholder={item.placeholder || item.title}
                                    className={styles.input}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        );
                    })}
                    <button type="submit" className={styles.submitBtn} onClick={clickBook}>
                        Book Now
                    </button>
                </form>
            </div>
            <button
                type="button"
                className={styles.close}
                onClick={closeModal}
                aria-label="Close booking form"
            >
                <Image
                    src="/images/close.png"
                    alt=""
                    aria-hidden="true"
                    width={30}
                    height={30}
                />
            </button>
        </section>
    );
};