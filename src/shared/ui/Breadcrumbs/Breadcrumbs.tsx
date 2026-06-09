import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className={styles.bar}>
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className={styles.list}>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={`${item.label}-${index}`} className={styles.item}>
                  {!isLast && item.href ? (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className={styles.current} aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
