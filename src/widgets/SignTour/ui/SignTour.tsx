"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../SignTour.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";
import { trackEvent } from "@/src/shared/lib/analytics";
import { trackConversion } from "@/src/shared/lib/googleAds";
import toast from "react-hot-toast";
import {
  isPhoneValid,
  PHONE_INVALID_MESSAGE,
} from "@/src/shared/lib/phoneValidation";
import { ContactMethodFields } from "./ContactMethodFields";

type SignTourProps = {
  title: string;
  tour?: string;
  description?: string;
};

const SignTour = ({ title, tour: tourProp, description }: SignTourProps) => {
  const LOCATIONS = [
    "Issyk-Kul",
    "Song-Kul",
    "Kel-Suu",
    "Ala-Kul",
    "Altyn-Arashan",
    "Tash Rabat",
    "Jeti-Oguz",
    "Sary-Chelek",
    "Arslanbob",
    "Horse riding",
    "Tracking",
  ];

  const [showEmail, setShowEmail] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [phoneError, setPhoneError] = useState<string | undefined>();
  const CUSTOM_STEPS = 3;
  const GROUP_OPTIONS = [
    { value: "1", label: "1 person" },
    { value: "2", label: "2 people" },
    { value: "3-4", label: "3-4 people" },
    { value: "5-8", label: "5-8 people" },
    { value: "9+", label: "9+ people" },
  ] as const;

  const [step, setStep] = useState(1);
  const [stepMotion, setStepMotion] = useState<"forward" | "back">("forward");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
    partySize: "",
  });

  const isOpen = useModalStore((state) => state.isOpen);
  const modalType = useModalStore((state) => state.modalType);
  const bookingTour = useModalStore((state) => state.bookingTour);
  const closeModal = useModalStore((state) => state.closeModal);
  const resolvedTour = tourProp ?? bookingTour ?? undefined;
  const isCustomMode = modalType === "custom";

  const resetModalState = () => {
    setStep(1);
    setStepMotion("forward");
    setSelectedLocations([]);
    setShowEmail(false);
    setPhoneError(undefined);
    setFormData({
      name: "",
      phone: "",
      email: "",
      destination: "",
      date: "",
      partySize: "",
    });
  };

  const handleClose = () => {
    closeModal();
    resetModalState();
  };

  const toggleMethod = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowEmail(!showEmail);
      setPhoneError(undefined);
      setIsExiting(false);
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!showEmail && !isPhoneValid(formData.phone)) {
      setPhoneError(PHONE_INVALID_MESSAGE);
      return;
    }

    setPhoneError(undefined);

    trackEvent("submit_form", {
      label: "header_signup_button",
      method: showEmail ? "email" : "whatsapp",
    });

    const locationsText = isCustomMode ? selectedLocations.join(", ") : "";
    const tourTitle = isCustomMode
      ? locationsText
        ? `Custom tour: ${locationsText}`
        : "Custom tour request"
      : resolvedTour ||
        (locationsText ? `Custom tour: ${locationsText}` : "General Inquiry");

    const travelersLabel =
      isCustomMode && formData.partySize
        ? GROUP_OPTIONS.find((o) => o.value === formData.partySize)?.label ??
          formData.partySize
        : "";

    const sendEmail = async () => {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          title: tourTitle,
          destination: formData.destination || locationsText,
          locations: selectedLocations,
          travelers: travelersLabel,
          contact: showEmail ? formData.email : formData.phone,
        }),
      });

      if (!response.ok) throw new Error("Failed");
      return response;
    };

    toast.promise(sendEmail(), {
      loading: "Sending your application...",
      success: () => {
        const userIdentifier = formData.email || formData.phone || "guest";
        if (resolvedTour && resolvedTour !== "General Inquiry") {
          trackConversion(userIdentifier);
        }
        handleClose();

        return <b>Application sent! We will contact you soon.</b>;
      },
      error: <b>Error sending message. Please try again.</b>,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (phoneError && (value === "" || isPhoneValid(value))) {
      setPhoneError(undefined);
    }
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location],
    );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      className={`${styles.signTour} ${isOpen ? styles.isOpen : ""}`}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={handleClose}>
          <Image src="/images/close.png" alt="Close" width={30} height={30} />
        </button>

        <h2 className={styles.title}>
          {isCustomMode
            ? "Create your tour"
            : resolvedTour
              ? "Book this Tour:"
              : title}
        </h2>
        <p className={styles.description}>
          {isCustomMode
            ? "Build your own tour in a few steps: pick places, tell us your group size, then leave your contact and preferred date."
            : resolvedTour
            ? "Have questions about the route? Drop your contact info — let’s chat and make your dream journey a reality."
            : "Let’s start your journey! Leave a request, and we’ll get back to you shortly with the best offers"}
        </p>

        {isCustomMode && (
          <div className={styles.stepBadge}>
            Step {step} of {CUSTOM_STEPS}
          </div>
        )}

        {isCustomMode ? (
          <div
            key={step}
            className={`${styles.stepPanel} ${stepMotion === "forward" ? styles.stepPanelForward : styles.stepPanelBack}`}
          >
            {step === 1 && (
              <div className={styles.form}>
                <div className={styles.locationsGrid}>
                  {LOCATIONS.map((location) => {
                    const isSelected = selectedLocations.includes(location);
                    return (
                      <button
                        key={location}
                        type="button"
                        className={`${styles.locationButton} ${isSelected ? styles.locationButtonActive : ""}`}
                        onClick={() => toggleLocation(location)}
                      >
                        {location}
                      </button>
                    );
                  })}
                </div>

                <p className={styles.selectedHint}>
                  {selectedLocations.length > 0
                    ? `Selected: ${selectedLocations.join(", ")}`
                    : "Choose one or more locations to continue."}
                </p>

                <button
                  type="button"
                  className={styles.button}
                  onClick={() => {
                    setStepMotion("forward");
                    setStep(2);
                  }}
                  disabled={selectedLocations.length === 0}
                >
                  Continue
                </button>
              </div>
            )}
            {step === 2 && (
              <div className={styles.form}>
                <p className={styles.stepIntro}>How many people will travel?</p>
                <div className={styles.locationsGrid}>
                  {GROUP_OPTIONS.map(({ value, label }) => {
                    const isSelected = formData.partySize === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        className={`${styles.locationButton} ${isSelected ? styles.locationButtonActive : ""}`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, partySize: value }))
                        }
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={styles.button}
                  onClick={() => {
                    setStepMotion("forward");
                    setStep(3);
                  }}
                  disabled={!formData.partySize}
                >
                  Continue
                </button>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => {
                    setStepMotion("back");
                    setStep(1);
                  }}
                >
                  Back
                </button>
              </div>
            )}
            {step === 3 && (
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

                <ContactMethodFields
                  showEmail={showEmail}
                  isExiting={isExiting}
                  phone={formData.phone}
                  email={formData.email}
                  phoneError={phoneError}
                  onPhoneChange={handlePhoneChange}
                  onPhoneValidationChange={setPhoneError}
                  onEmailChange={handleChange}
                  onToggle={toggleMethod}
                  phoneInputId="phone-custom"
                  emailInputId="email-custom"
                />

                <div className={styles.inputGroup}>
                  <input
                    id="date"
                    className={styles.input}
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="date" className={styles.label}>
                    Preferred Date
                  </label>
                </div>

                <button type="submit" className={styles.button}>
                  SEND
                </button>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => {
                    setStepMotion("back");
                    setStep(2);
                  }}
                >
                  Back
                </button>
              </form>
            )}
          </div>
        ) : (
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

          <ContactMethodFields
            showEmail={showEmail}
            isExiting={isExiting}
            phone={formData.phone}
            email={formData.email}
            phoneError={phoneError}
            onPhoneChange={handlePhoneChange}
            onPhoneValidationChange={setPhoneError}
            onEmailChange={handleChange}
            onToggle={toggleMethod}
          />

          <div className={styles.inputGroup}>
            <input
              id="date"
              className={styles.input}
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label htmlFor="date" className={styles.label}>
              Preferred Date
            </label>
          </div>

          <button type="submit" className={styles.button}>
            SEND
          </button>
        </form>
        )}

        {(!isCustomMode || step === CUSTOM_STEPS) && (
          <p className={styles.policy}>
            By clicking the "SEND" button, you agree to the{" "}
            <Link href="/privacy-policy" className={styles.policyLink}>
              privacy policy
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default SignTour;
