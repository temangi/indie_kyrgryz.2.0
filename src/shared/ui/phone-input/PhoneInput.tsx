"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import {
  AsYouType,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import { detectUserCountry } from "@/src/shared/lib/detectUserCountry";
import { getPhoneValidationError } from "@/src/shared/lib/phoneValidation";
import { CountrySelect } from "./CountrySelect";
import styles from "./PhoneInput.module.scss";

const FALLBACK_COUNTRY: CountryCode = "KG";
const VALIDATE_DEBOUNCE_MS = 700;

type PhoneInputProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onValidationChange?: (error: string | undefined) => void;
  label: string;
  error?: string;
  required?: boolean;
  defaultCountry?: CountryCode;
};

function formatNationalInput(country: CountryCode, input: string): string {
  const formatter = new AsYouType(country);
  return formatter.input(input);
}

function buildE164(country: CountryCode, nationalInput: string): string {
  const digits = nationalInput.replace(/\D/g, "");
  if (!digits) return "";

  const formatter = new AsYouType(country);
  formatter.input(`+${getCountryCallingCode(country)}${digits}`);
  return formatter.getNumberValue() ?? "";
}

export const PhoneInput = ({
  id,
  value,
  onChange,
  onValidationChange,
  label,
  error,
  required,
  defaultCountry,
}: PhoneInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const lastExternalValue = useRef(value);
  const hasAutoDetected = useRef(false);

  const [detectedCountry, setDetectedCountry] = useState<CountryCode | undefined>();
  const effectiveDefault =
    defaultCountry ?? detectedCountry ?? FALLBACK_COUNTRY;

  const [country, setCountry] = useState<CountryCode>(
    defaultCountry ?? FALLBACK_COUNTRY,
  );
  const [nationalInput, setNationalInput] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (defaultCountry !== undefined || value || hasAutoDetected.current) return;

    const detected = detectUserCountry();
    hasAutoDetected.current = true;

    if (detected) {
      setDetectedCountry(detected);
      setCountry(detected);
    }
  }, [defaultCountry, value]);

  const syncFromValue = useCallback(
    (nextValue: string) => {
      if (!nextValue) {
        setCountry(effectiveDefault);
        setNationalInput("");
        return;
      }

      const parsed = parsePhoneNumberFromString(nextValue);
      if (parsed?.country) {
        setCountry(parsed.country);
        setNationalInput(parsed.formatNational());
        return;
      }

      setNationalInput(nextValue.replace(/^\+\d+\s*/, ""));
    },
    [effectiveDefault],
  );

  useEffect(() => {
    if (value === lastExternalValue.current) return;
    lastExternalValue.current = value;
    syncFromValue(value);
  }, [syncFromValue, value]);

  const emitChange = useCallback(
    (nextCountry: CountryCode, nextNational: string) => {
      const e164 = buildE164(nextCountry, nextNational);
      lastExternalValue.current = e164;
      onChange(e164);
      return e164;
    },
    [onChange],
  );

  const runValidation = useCallback(
    (e164: string) => {
      onValidationChange?.(getPhoneValidationError(e164));
    },
    [onValidationChange],
  );

  const handleCountryChange = (nextCountry: CountryCode) => {
    setCountry(nextCountry);
    const reformatted = formatNationalInput(nextCountry, nationalInput);
    setNationalInput(reformatted);
    const e164 = emitChange(nextCountry, reformatted);
    if (nationalInput.trim()) {
      runValidation(e164);
    }
  };

  const handleNationalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNationalInput(country, event.target.value);
    setNationalInput(formatted);
    emitChange(country, formatted);
  };

  const handleBlur = () => {
    setFocused(false);
    runValidation(buildE164(country, nationalInput));
  };

  useEffect(() => {
    if (!onValidationChange) return;

    if (!nationalInput.trim()) {
      onValidationChange(undefined);
      return;
    }

    const e164 = buildE164(country, nationalInput);
    const timer = window.setTimeout(
      () => runValidation(e164),
      VALIDATE_DEBOUNCE_MS,
    );

    return () => window.clearTimeout(timer);
  }, [country, nationalInput, onValidationChange, runValidation]);

  const hasValue = Boolean(nationalInput.trim());
  const isLabelActive = focused || hasValue;

  return (
    <div className={styles.inputGroup}>
      <div
        className={`${styles.phoneField} ${error ? styles.phoneFieldError : ""}`}
      >
        <CountrySelect value={country} onChange={handleCountryChange} />
        <input
          id={inputId}
          className={styles.numberInput}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={nationalInput}
          onChange={handleNationalChange}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          required={required}
          placeholder=" "
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>
      <label
        htmlFor={inputId}
        className={`${styles.label} ${isLabelActive ? styles.labelActive : ""}`}
      >
        {label}
      </label>
      {error ? (
        <span id={`${inputId}-error`} className={styles.error} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
};
