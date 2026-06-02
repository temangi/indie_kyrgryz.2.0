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
  /** Generic CTA when there is no single packaged tour on the page */
  const useSignUpLabel =
    pathname === "/" ||
    pathname === "/tours" ||
    pathname === "/about" ||
    pathname === "/contacts" ||
    pathname === "/privacy-policy";
  const buttonText = useSignUpLabel ? "sign up for a tour" : "book this tour";
  const isHomePage = pathname === "/";
  const isVisible = !isHomePage || scrollTop > 900;

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
                sizes="48px"
                quality={75}
              />
            </Link>
            <div className={`${styles.headerControllers}`}>
              <div className={styles.headerControllersWrapper}>
                <Navigation />
                <div className={styles.headerActions}>
                  <button
                    type="button"
                    className={styles.headerButton}
                    onClick={() => openModal()}
                  >
                    <span className={styles.headerButtonLink}>
                      {buttonText}
                    </span>
                  </button>
                  <Link
                    href="https://wa.me/996555203101?text=Hi%20Indie%20Kyrgyz%20Travel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.headerButton} ${styles.whatsAppButton}`}
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.hamburger} ${styles["hamburger--slider"]} ${isOpenBurger ? styles["is-active"] : ""}`}
              onClick={() => (isOpenBurger ? closeBurger() : openBurger())}
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
            onClick={() => (isOpenBurger ? closeBurger() : openBurger())}
            aria-label="Toggle navigation"
            aria-expanded={isOpenBurger}
          >
            <span className={styles["hamburger-box"]}>
              <span className={styles["hamburger-inner"]}></span>
            </span>
          </button>
          <Link
            href="/"
            className={`${styles.mainLogo} ${styles.mainLogoBurger}`}
            aria-label="Indie Kyrgyz Travel"
          >
            <Image
              src={logoS}
              alt="Indie Kyrgyz Travel logo"
              className={`${styles.logo}`}
              sizes="48px"
              quality={75}
            />
          </Link>
          <Navigation />
          <footer className={styles.mainFooter}>
            <nav className={styles.mainSocialLinks}>
              {navSocialLinks.map(({ href, icon }, index) => (
                <Link key={index} href={href}>
                  <Image height={30} width={30} src={icon} alt={href} />
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className={styles.headerButton}
              onClick={() => openModal()}
            >
              <span className={styles.headerButtonLink}>
                {buttonText}
              </span>
            </button>
            <Link
              href="https://wa.me/996555203101?text=Hi%20Indie%20Kyrgyz%20Travel"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.headerButton} ${styles.whatsAppButton}`}
            >
              WhatsApp
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Header;
