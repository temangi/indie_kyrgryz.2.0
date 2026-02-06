"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./nav";
import styles from "../Header.module.scss";
import {
  useModalStore,
  useOpenBurgerStore,
} from "@/src/shared/model/useModalStore";
import { usePathname } from "next/navigation";
import logo from "@/public/images/whiteLogo.png";
import logoS from "@/public/images/logo.png";
import { navSocialLinks } from "./nav";

const Header = () => {
  const pathname = usePathname();
  const [scrollTop, setScrollTop] = useState(0);

  const openModal = useModalStore((state) => state.openModal);
  const isOpenBurger = useOpenBurgerStore((state) => state.isOpen);
  const closeBurger = useOpenBurgerStore((state) => state.closeModal);
  const openBurger = useOpenBurgerStore((state) => state.openModal);

  const isHomePage = pathname === "/";
  const isVisible = !isHomePage || scrollTop > 300;

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (isOpenBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenBurger]);

  return (
    <>
      <header
        className={`${styles.header} ${isVisible ? styles.isVisible : ""} ${isOpenBurger ? styles["is-active"] : ""}`}
      >
        <div className={styles.headerBlock}>
          <div className={styles.headerInner}>
            <Link
              href="/"
              className={styles.mainLogo}
              aria-label="Indie Kyrgyz Travel"
            >
              <Image
                src={logo}
                alt="Indie Kyrgyz Travel logo"
                className={`${styles.logo} ${scrollTop > 100 ? styles.scrolled : ""}`}
                priority
                quality={100}
              />
            </Link>
            <div className={`${styles.headerControllers}`}>
              <div className={styles.headerControllersWrapper}>
                <Navigation />
                <button
                  type="button"
                  className={styles.headerButton}
                  onClick={openModal}
                >
                  <span className={styles.headerButtonLink}>
                    sign up for a tour
                  </span>
                </button>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.hamburger} ${styles["hamburger--slider"]} ${isOpenBurger ? styles["is-active"] : ""}`}
              onClick={isOpenBurger ? closeBurger : openBurger}
              aria-label="Toggle navigation"
              aria-expanded={isOpenBurger}
            >
              <span className={styles["hamburger-box"]}>
                <span className={styles["hamburger-inner"]}></span>
              </span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`${styles.headerControllersMobile} ${isOpenBurger ? styles["is-active"] : ""}`}
        onClick={closeBurger}
      >
        <div
          className={styles.headerControllersWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className={`${styles.hamburger} ${styles.closeIconf} ${styles["hamburger--slider"]} ${isOpenBurger ? styles["is-active"] : ""}`}
            onClick={isOpenBurger ? closeBurger : openBurger}
            aria-label="Toggle navigation"
            aria-expanded={isOpenBurger}
          >
            <span className={styles["hamburger-box"]}>
              <span className={styles["hamburger-inner"]}></span>
            </span>
          </button>
          <Link
            href=""
            className={`${styles.mainLogo} ${styles.mainLogoBurger}`}
            aria-label="Indie Kyrgyz Travel"
          >
            <Image
              src={logoS}
              alt="Indie Kyrgyz Travel logo"
              className={`${styles.logo}`}
              priority
              quality={100}
            />
          </Link>
          <Navigation />
          <footer className={styles.mainFooter}>
            <nav className={styles.mainSocialLinks}>
              {navSocialLinks.map(({href,icon} , index) => <Link key={index} href={href}><Image height={30} width={30} src={icon} alt={href}/></Link>)}
            </nav>
            <button
              type="button"
              className={styles.headerButton}
              onClick={openModal}
            >
              <span className={styles.headerButtonLink}>
                sign up for a tour
              </span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Header;
