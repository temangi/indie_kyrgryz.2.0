"use client";

import { useState } from "react";
import styles from "../../../widgets/HowItGoing/HowItGoing.module.scss";
import Image from "next/image";
import type { StepCardType } from "./stepCard.types";

export type { StepCardType, TourDayFields } from "./stepCard.types";

function sanitizeEmbedUrl(raw: string): string | undefined {
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== "https:") return undefined;
    const host = u.hostname.replace(/^www\./, "");
    if (
      host !== "google.com" &&
      host !== "maps.google.com" &&
      !host.endsWith(".google.com")
    ) {
      return undefined;
    }
    return u.toString();
  } catch {
    return undefined;
  }
}

/** First and last stops from `routeSummary` for directions (e.g. "A → B → C" → A→C). */
function splitRouteEndpoints(
  routeSummary: string | undefined
): { origin: string; dest: string } | undefined {
  if (!routeSummary?.trim()) return undefined;
  const normalized = routeSummary
    .replace(/\s*\u2194\s*/g, " → ")
    .replace(/\s+/g, " ")
    .trim();
  const parts = normalized
    .split(/\s*→\s*/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length < 2) return undefined;
  const origin = parts[0];
  const dest = parts[parts.length - 1];
  if (origin.localeCompare(dest, undefined, { sensitivity: "accent" }) === 0) {
    return undefined;
  }
  return { origin, dest };
}

function directionsEmbedUrl(origin: string, dest: string): string {
  return `https://maps.google.com/maps?f=d&saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(dest)}&hl=en&output=embed`;
}

function mapIframeSrc(
  embed?: string,
  routeSummary?: string,
  query?: string
): string | undefined {
  const clean = embed ? sanitizeEmbedUrl(embed) : undefined;
  if (clean) return clean;

  const ends = splitRouteEndpoints(routeSummary);
  if (ends) {
    return directionsEmbedUrl(ends.origin, ends.dest);
  }

  if (query?.trim()) {
    const q = encodeURIComponent(query.trim());
    return `https://maps.google.com/maps?q=${q}&hl=en&z=7&output=embed`;
  }
  return undefined;
}

const StepCard = ({
  title,
  duration,
  desc,
  place,
  id,
  routeSummary,
  mapEmbedSrc,
  mapQuery,
  isOpen: isOpenControlled,
  onToggle,
}: StepCardType) => {
  const [internalOpen, setInternalOpen] = useState(id === 0);
  const isControlled = isOpenControlled !== undefined && onToggle !== undefined;
  const isVisible = isControlled ? isOpenControlled : internalOpen;

  const toggleMain = () => {
    if (isControlled) onToggle();
    else setInternalOpen((prev) => !prev);
  };

  const iframeSrc = mapIframeSrc(mapEmbedSrc, routeSummary, mapQuery);
  const showRouteBlock = Boolean(routeSummary || iframeSrc);
  const dirEnds = splitRouteEndpoints(routeSummary);
  const externalMapHref = dirEnds
    ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(dirEnds.origin)}&destination=${encodeURIComponent(dirEnds.dest)}`
    : mapQuery?.trim()
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery.trim())}`
      : routeSummary?.trim()
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(routeSummary.trim())}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}`;

  return (
    <div
      className={`${styles.tourInfo} ${isVisible ? styles.isActive : ""}`}
    >
      <header
        className={styles.tourInfo__header}
        onClick={toggleMain}
        role="button"
        aria-expanded={isVisible}
      >
        <h3 className={styles.tourInfo__title}>{title}</h3>

        <div
          className={`${styles.questionToggle} ${
            isVisible ? styles.questionToggleActive : ""
          }`}
        >
          <Image
            className={styles.questionIcon}
            src="/images/plus.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </header>

      <div
        className={`${styles.tourInfo__content} ${
          isVisible ? styles.open : ""
        }`}
      >
        <div className={styles.tourInfo__inner}>
          <div className={styles.tourInfo__details}>
            <div className={styles.tourInfo__feature}>
              <span className={styles.tourInfo__icon}>🚗</span>
              <span className={styles.tourInfo__label}>
                <strong>Drive:</strong> {duration}
              </span>
            </div>

            <p className={styles.tourInfo__description}>{desc}</p>

            {showRouteBlock && (
              <div className={styles.tourInfo__routeBlock}>
                {routeSummary && (
                  <div className={styles.tourInfo__feature}>
                    <span className={styles.tourInfo__icon}>🗺️</span>
                    <span className={styles.tourInfo__label}>
                      <strong>Route:</strong> {routeSummary}
                    </span>
                  </div>
                )}
                {iframeSrc && (
                  <div className={styles.tourInfo__map}>
                    <iframe
                      title={`Map — ${title}`}
                      src={iframeSrc}
                      className={styles.tourInfo__mapFrame}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                    <p className={styles.tourInfo__mapNote}>
                      Open in{" "}
                      <a
                        href={externalMapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Maps
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className={styles.tourInfo__feature}>
              <span className={styles.tourInfo__icon}>🏠</span>
              <span className={styles.tourInfo__label}>
                <strong>Accommodation:</strong> {place}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
