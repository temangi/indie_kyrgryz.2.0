import Link from "next/link";
import styles from "../Header.module.scss";

const Navigation = () => {
  return (
    <div className={styles.headerMenu}>
       <Link className={styles.headerMenuLink} href="/">Home</Link>
      <Link className={styles.headerMenuLink} href="/tours">Tours</Link>
      <Link className={styles.headerMenuLink} href="/#reise">Timetable</Link>
      <Link className={styles.headerMenuLink} href="/#info">About Us</Link>
      <Link className={styles.headerMenuLink} href="/#team">Team</Link>
      <Link className={styles.headerMenuLink} href="/#faq">FAQ</Link>
      <Link className={styles.headerMenuLink} href="/#footer">Contacts</Link>
    </div>
  );
};

export default Navigation;
