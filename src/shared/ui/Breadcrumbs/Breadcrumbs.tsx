import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Renders without outer bar — for use next to BackButton. */
  inline?: boolean;
};

export function Breadcrumbs({ items, inline = false }: BreadcrumbsProps) {
  const nav = (
    <nav aria-label="Breadcrumb">
      <ol className={`${styles.list} ${inline ? styles.list_inline : ""}`}>
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
  );

  if (inline) return nav;

  return (
    <div className={styles.bar}>
      <div className="container">{nav}</div>
    </div>
  );
}
