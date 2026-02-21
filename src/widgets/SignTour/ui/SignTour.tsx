"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../SignTour.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";
import { trackEvent } from "@/src/shared/lib/analytics";
import { trackConversion } from "@/src/shared/lib/googleAds";
import toast from "react-hot-toast";

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

    const tourTitle = tour || "General Inquiry (User hasn't chosen a tour)";

    const sendEmail = async () => {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, title: tourTitle }),
      });

      if (!response.ok) throw new Error("Failed");
      return response;
    };
    toast.promise(sendEmail(), {
      loading: "Sending your application...",
      success: () => {
        closeModal();
        setFormData({ name: "", phone: "", date: "" });
        trackConversion();
        return <b>Application sent! We will contact you soon.</b>;
      },
      error: <b>Error sending message. Please try again.</b>,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const phoneHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value && !value.startsWith("+")) value = "+" + value;
    setFormData((prev) => ({ ...prev, phone: value }));
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

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
      className={`${styles.signTour} ${isOpen ? styles.isOpen : ""}`}
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="Close sign-up form"
        >
          <Image src="/images/close.png" alt="Close" width={30} height={30} />
        </button>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          Leave your contact information and we will contact you shortly :)
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              id="name"
              className={styles.input}
              type="text"
              name="name"
              placeholder=" " 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
          </div>
           <div className={styles.inputGroup}>
            <input
              id="phone"
              className={styles.input}
              type="tel"
              name="phone"
              placeholder=""
              value={formData.phone}
              onChange={phoneHandleChange}
              required
            />
            <label htmlFor="phone" className={styles.label}>
             WhatsApp Number
            </label>
          </div>
           <div className={styles.inputGroup}>
            <input
              id="date"
              className={styles.input}
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="date" className={styles.label}>
               Preferred Date
            </label>
          </div>
          <button type="submit" className={styles.button}>
            SEND
          </button>
        </form>

        <p className={styles.policy}>
          By clicking the "SEND" button, you agree to the privacy policy.
        </p>
      </div>
    </section>
  );
};

export default SignTour;
