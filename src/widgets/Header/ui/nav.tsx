'use client';

import Link from "next/link";
import styles from "../Header.module.scss";
import { useOpenBurgerStore, useNavStore } from "@/src/shared/model/useModalStore";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/#reise", label: "Destinations" },
  { href: "/#info", label: "About Us" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#footer", label: "Contacts" },
];

const Navigation = () => {
  const closeModal = useOpenBurgerStore((state) => state.closeModal);
  const activeSection = useNavStore((state) => state.activeSection);
  const pathname = usePathname(); 

  return (
    <nav className={styles.headerMenu} aria-label="Primary">
      {navLinks.map((link) => {
        if (pathname === "/" && link.href === "/") return null;
        if (pathname !== "/" && link.href.startsWith("/#")) return null;
        const isActive =
          (pathname === "/tours" && link.href === "/tours") ||
          (pathname === "/" && link.href === `/#${activeSection}`);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeModal}
            className={`${styles.headerMenuLink} ${
              isActive ? styles.isActive : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
