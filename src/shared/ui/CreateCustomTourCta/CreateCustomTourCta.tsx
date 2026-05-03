"use client";

import Link from "next/link";
import { useModalStore } from "@/src/shared/model/useModalStore";
import styles from "./CreateCustomTourCta.module.scss";

type CreateCustomTourCtaProps = {
  className?: string;
};

const CreateCustomTourCta = ({ className }: CreateCustomTourCtaProps) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <aside
      className={`${styles.root} ${className ?? ""}`}
      aria-label="Customize your itinerary"
    >
      <div className={styles.inner}>
        <h3 className={styles.title}>Couldnt find the perfect tour?</h3>
        <p className={styles.lead}>
          Build your own tour in a few steps: pick places, tell us your group size, then leave your contact and preferred date.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={() => openModal("custom")}
          >
            Create your tour
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CreateCustomTourCta;
