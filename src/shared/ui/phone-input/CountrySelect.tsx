"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CountryCode } from "libphonenumber-js";
import { COUNTRIES, findCountry, type CountryOption } from "./countries";
import styles from "./CountrySelect.module.scss";

type CountrySelectProps = {
  value: CountryCode;
  onChange: (code: CountryCode) => void;
  disabled?: boolean;
};

export const CountrySelect = ({
  value,
  onChange,
  disabled,
}: CountrySelectProps) => {
  const listId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selected = findCountry(value) ?? COUNTRIES[0];

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return COUNTRIES;

    return COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(query) ||
        country.dialCode.includes(query) ||
        country.code.toLowerCase().includes(query),
    );
  }, [search]);

  const close = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  const open = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
  }, [disabled]);

  const selectCountry = useCallback(
    (country: CountryOption) => {
      onChange(country.code);
      close();
    },
    [close, onChange],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    searchRef.current?.focus();

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isOpen]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
        onClick={() => (isOpen ? close() : open())}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listId : undefined}
      >
        <span className={styles.flag} aria-hidden>
          {selected.flag}
        </span>
        <span className={styles.dialCode}>{selected.dialCode}</span>
        <span
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          aria-hidden
        />
      </button>

      {isOpen ? (
        <div className={styles.dropdown}>
          <div className={styles.searchWrap}>
            <input
              ref={searchRef}
              type="search"
              className={styles.search}
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search country"
              autoComplete="off"
            />
          </div>
          <ul id={listId} className={styles.list} role="listbox">
            {filtered.length === 0 ? (
              <li className={styles.empty}>No countries found</li>
            ) : (
              filtered.map((country) => (
                <li key={country.code} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={country.code === value}
                    className={`${styles.option} ${country.code === value ? styles.optionSelected : ""}`}
                    onClick={() => selectCountry(country)}
                  >
                    <span className={styles.flag} aria-hidden>
                      {country.flag}
                    </span>
                    <span className={styles.optionName}>{country.name}</span>
                    <span className={styles.optionDial}>{country.dialCode}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
