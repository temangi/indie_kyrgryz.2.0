"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../FAQ.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}



const FAQ = ({ faqData }: { faqData: FAQItem[] })  => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" data-section className={styles.answer} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.menu}>
          <h2 id="faq-title" className={styles.title}>
            FAQ
          </h2>
          <div className={styles.questions}>
            {faqData.map((item, index) => (
              <article key={index} className={styles.item}>
                <button
                  type="button"
                  className={styles.questionHeader}
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={`${styles.questionToggle} ${openIndex === index ? styles.questionToggleActive : ""}`}>
                    <Image
                      className={styles.questionIcon}
                      src="/images/plus.svg"
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                    />
                  </span>
                </button>
                <p className={`${styles.answerText} ${openIndex === index ? styles.answerTextHidden : ""}`}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
