"use client";

import styles from "../SignTour.module.scss";
import { PhoneInput } from "@/src/shared/ui/phone-input";

type ContactMethodFieldsProps = {
  showEmail: boolean;
  isExiting: boolean;
  phone: string;
  email: string;
  phoneError?: string;
  onPhoneChange: (value: string) => void;
  onPhoneValidationChange?: (error: string | undefined) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: () => void;
  phoneInputId?: string;
  emailInputId?: string;
};

export const ContactMethodFields = ({
  showEmail,
  isExiting,
  phone,
  email,
  phoneError,
  onPhoneChange,
  onPhoneValidationChange,
  onEmailChange,
  onToggle,
  phoneInputId = "phone",
  emailInputId = "email",
}: ContactMethodFieldsProps) => (
  <div
    className={`${styles.animatedField} ${isExiting ? styles.fadeOut : styles.fadeIn}`}
  >
    {!showEmail ? (
      <>
        <PhoneInput
          id={phoneInputId}
          value={phone}
          onChange={onPhoneChange}
          onValidationChange={onPhoneValidationChange}
          label="WhatsApp Number"
          error={phoneError}
          required
        />
        <button type="button" className={styles.switchLink} onClick={onToggle}>
          Don&apos;t have WhatsApp? Use Email
        </button>
      </>
    ) : (
      <div className={styles.inputGroup}>
        <input
          id={emailInputId}
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          required
          placeholder=" "
        />
        <label htmlFor={emailInputId} className={styles.label}>
          Your Email
        </label>
        <button type="button" className={styles.switchLink} onClick={onToggle}>
          Back to WhatsApp
        </button>
      </div>
    )}
  </div>
);
