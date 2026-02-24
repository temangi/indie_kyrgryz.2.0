"use client";

import styles from "../TourInfo/style.module.scss";
import { useModalStore } from "../../model/useModalStore";

function BookTour() {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <button className={styles.mainButton} onClick={() => openModal()}>
      BOOK THIS TOUR
    </button>
  );
}

export default BookTour;
