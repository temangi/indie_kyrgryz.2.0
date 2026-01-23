"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./nav";
import styles from "../Header.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";
import { usePathname } from 'next/navigation';
import logo from "../logoW.png"


const Header = () => {
  const pathname = usePathname();
  const [scrollTop, setScrollTop] = useState(0);
  const [openBurger, setOpenBurger] = useState(false)
  const openModal = useModalStore((state) => state.openModal);


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
    <section className={`${styles.header} ${isVisible ? styles.isVisible : ""} ${openBurger ? styles["is-active"] : ""}`} style={{display : scrollTop < 450 ? "none" : "flex" }}>
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
            <article className={`${styles.headerControllers} ${openBurger ? styles["is-active"] : ""}`}>
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
            <div className={`${styles.hamburger} ${styles["hamburger--slider"]} ${openBurger ? styles["is-active"] : ""}`} onClick={() => setOpenBurger(!openBurger)} >
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
