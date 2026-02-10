"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../SignTour.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";
import { trackEvent } from "@/src/shared/lib/analytics";

type SignTourProps = {
  title: string;
  tour?: string;
};

const SignTour = ({ title, tour }: SignTourProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("submit_form", { label: "header_signup_button" });

    const tourTitle = tour
      ? tour
      : "General Inquiry (User hasn't chosen a tour)";

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          title: tourTitle,
        }),
      });

      if (response.ok) {
        alert("Application sent! We will contact you soon.");
        closeModal();
        setFormData({ name: "", phone: "", date: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const phoneHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+")) value = "+" + value;

    setFormData((prev) => ({ ...prev, phone: value }));
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
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              id="name"
              className={styles.input}
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              WhatsApp Number
            </label>
            <input
              id="phone"
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="+996 700 123 456"
              value={formData.phone}
              onChange={phoneHandleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="date" className={styles.label}>
              Preferred Date
            </label>
            <input
              id="date"
              className={styles.input}
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

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
