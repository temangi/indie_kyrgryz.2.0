"use client"

import { useState } from 'react';
import styles from './style.module.scss';


export type AsideT = {
    title : string,
    arr : {
        name : string,
        type : string,
        title : string,
        placeholder : string
    }[]
}

export const AsideTour = ({ title, arr } : AsideT) => {

    const [formData, setFormData] = useState({});

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
    };

    return (
        <aside className={styles.asideWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                {arr.map((item, index) => {
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
                <button type="submit" className={styles.submitBtn}>
                    Book Now
                </button>
            </form>
        </aside>
    );
};