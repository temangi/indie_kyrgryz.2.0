"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./nav";
import styles from "../Header.module.scss";
import { useModalStore ,useOpenBurgerStore} from "@/src/shared/model/useModalStore";
import { usePathname } from 'next/navigation';
import logo from "../logoW.png"

const Header = () => {
  const pathname = usePathname();
  const [scrollTop, setScrollTop] = useState(0);

  const openModal = useModalStore((state) => state.openModal);
  const isOpenBurger = useOpenBurgerStore((state) => state.isOpen);
  const closeBurger = useOpenBurgerStore((state) => state.closeModal);
  const openBurger = useOpenBurgerStore((state) => state.openModal);

  const isHomePage = pathname === "/";
  const isVisible = !isHomePage || scrollTop > 500;



  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <section className={`${styles.header} ${isVisible ? styles.isVisible : ""} ${isOpenBurger ? styles["is-active"] : ""}`} style={{display : isHomePage ?  scrollTop < 450  ? "none" : "flex" : "flex" }}>
      <div className="container">
        <div className={styles.headerBlock}>
          <header className={styles.headerInner}>
            <Link href="/" className={styles.mainLogo}>
              <Image
                src={logo}
                alt="Logo"
                className={styles.logo}

              />
            </Link>
            <article className={`${styles.headerControllers} ${isOpenBurger ? styles["is-active"] : ""}`}>
              <Navigation />
              <div
                className={styles.headerButton}
                onClick={openModal}
              >
                <p className={styles.headerButtonLink}>
                  sign up for a tour
                </p>
              </div>
            </article>
            <div className={`${styles.hamburger} ${styles["hamburger--slider"]} ${isOpenBurger ? styles["is-active"] : ""}`} onClick={isOpenBurger ? closeBurger : openBurger} >
              <div className={styles["hamburger-box"]}>
                <div className={`${styles["hamburger-inner"]}`}></div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Header;
