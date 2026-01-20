"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../SignTour.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";


const SignTour = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
    <section className={`${styles.signTour} ${isOpen ? styles.isOpen : ""}`}>
      <Image
        src="/images/close.png"
        alt="close window"
        className={styles.close}
        width={30}
        height={30}
        onClick={closeModal}
      />
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Sign Up for a Tour :</h2>
        <p className={styles.description}>
          Leave your contact information and we will contact you shortly :)
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="What's your name?"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="datetime-local"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.button}>
            SEND
          </button>
        </form>
        <p className={styles.policy}>
          By clicking the "SEND" button, you agree to the privacy policy and
          consent to the processing of personal data.
        </p>
      </div>
    </section>
  );
};

export default SignTour;
