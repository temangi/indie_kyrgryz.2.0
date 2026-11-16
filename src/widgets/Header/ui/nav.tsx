"use client";

import Link from "next/link";
import styles from "../Header.module.scss";
import {
  useOpenBurgerStore,
  useNavStore,
} from "@/src/shared/model/useModalStore";
import { usePathname } from "next/navigation";
import insta from "@/public/images/insta.svg";
import whats from "@/public/images/whats.svg";
import tiktok from "@/public/images/tiktok.svg";
import youtube from "@/public/images/youtube.svg";

const navLinks = [
  { href: "/tours", label: "Tours" },
  { href: "/#reise", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contacts", label: "Contacts" },
];

export const navSocialLinks = [
  {
    href: "https://wa.me/996555203101?text=Hi%20Jake",
    icon: whats,
    label: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/indie_kyrgyz_travel",
    icon: insta,
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@indie.kyrgyz.travel",
    icon: tiktok,
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/watch?v=ibWlBWMoIxU",
    icon: youtube,
    label: "YouTube",
  },
];

const Navigation = () => {
  const closeModal = useOpenBurgerStore((state) => state.closeModal);
  const activeSection = useNavStore((state) => state.activeSection);
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.includes("#")) {
      const anchor = href.split("#")[1]; 
      const elem = document.getElementById(anchor);

      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeModal();
  };

  return (
    <nav className={styles.headerMenu} aria-label="Primary">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname === "/" && link.href.endsWith(`#${activeSection}`));

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleAnchorClick}
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
