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
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [scrollbar, setScrollbar] = useState({
    visible: false,
    thumbHeight: 0,
    thumbTop: 0,
  });

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

  const likelyScrollable = filtered.length > 5;
  const showScrollbar = likelyScrollable || scrollbar.visible;

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

  const updateScrollbar = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const { scrollHeight, clientHeight, scrollTop } = list;
    const canScroll = scrollHeight > clientHeight + 1;

    if (!canScroll) {
      setScrollbar({ visible: false, thumbHeight: 0, thumbTop: 0 });
      return;
    }

    const trackHeight = clientHeight;
    const thumbHeight = Math.max(
      (clientHeight / scrollHeight) * trackHeight,
      32,
    );
    const maxThumbTop = trackHeight - thumbHeight;
    const scrollRatio =
      scrollHeight - clientHeight > 0
        ? scrollTop / (scrollHeight - clientHeight)
        : 0;

    setScrollbar({
      visible: true,
      thumbHeight,
      thumbTop: scrollRatio * maxThumbTop,
    });
  }, []);

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

    const frame = requestAnimationFrame(updateScrollbar);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isOpen, updateScrollbar]);

  useEffect(() => {
    if (!isOpen) return;

    const list = listRef.current;
    if (!list) return;

    updateScrollbar();
    const observer = new ResizeObserver(updateScrollbar);
    observer.observe(list);

    return () => observer.disconnect();
  }, [filtered, isOpen, updateScrollbar]);

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
          <div className={styles.listContainer}>
            <ul
              id={listId}
              ref={listRef}
              className={styles.list}
              role="listbox"
              onScroll={updateScrollbar}
            >
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
            {showScrollbar ? (
              <div className={styles.scrollTrack} aria-hidden>
                <div
                  className={styles.scrollThumb}
                  style={{
                    height: scrollbar.thumbHeight || 32,
                    transform: `translateY(${scrollbar.thumbTop}px)`,
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
