import Link from "next/link";
import type { Metadata } from "next";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "@/src/shared/seo/pageCopy";

export const metadata: Metadata = {
  title: { absolute: NOT_FOUND_TITLE },
  description: NOT_FOUND_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p style={{ margin: "16px auto 28px", maxWidth: 520, lineHeight: 1.6 }}>
        That address is not on Indie Kyrgyz Travel. Open the tour list, or
        write to us and we will help you find the right route.
      </p>
      <p
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "#4f7b6b" }}>
          Home
        </Link>
        <Link href="/tours" style={{ color: "#4f7b6b" }}>
          All tours
        </Link>
        <Link href="/contacts" style={{ color: "#4f7b6b" }}>
          Contact
        </Link>
      </p>
    </section>
  );
}
