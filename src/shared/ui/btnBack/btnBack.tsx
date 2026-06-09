"use client";

import { useRouter } from "next/navigation";
import { Breadcrumbs, type BreadcrumbItem } from "@/src/shared/ui/Breadcrumbs";
import styles from "./style.module.scss";

type BackButtonProps = {
  breadcrumbs?: BreadcrumbItem[];
};

export const BackButton = ({ breadcrumbs }: BackButtonProps) => {
  const router = useRouter();

  return (
    <div className={styles.backBtnContainer}>
      <div className="container">
        <div className={styles.row}>
          {breadcrumbs ? (
            <Breadcrumbs items={breadcrumbs} inline />
          ) : null}
          <button className={styles.backBtn} onClick={() => router.back()}>
            <span className={styles.arrow}>←</span>
            <span className={styles.text}>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
