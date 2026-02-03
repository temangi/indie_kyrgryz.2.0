"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../SignTour.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";
import emailjs from "emailjs-com";
import { trackEvent } from "@/src/shared/lib/analytics";

type SignTourProps = {
  title: string;
};  

const SignTour = ({title}: SignTourProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('submit_form', 'header_signup_button');

    try {
      await emailjs.send(
        "service_v70ds7p", 
        "template_nfoc636", 
        {
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
        },
        "ZEvlreN1jxAnXvcQx", 
      );

      alert("Message sent successfully 🚀");
      closeModal();

      setFormData({
        name: "",
        phone: "",
        date: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong 😢");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      className={`${styles.signTour} ${isOpen ? styles.isOpen : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className={styles.overlay} onClick={closeModal}></div>

      <div className={styles.content}>
        <button
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="Close sign-up form"
        >
          <Image
            src="/images/close.png"
            alt=""
            aria-hidden="true"
            width={30}
            height={30}
          />
        </button>
        <h2 className={styles.title}>{title}</h2>
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
