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
    <section id="faq" className={styles.answer}>
      <div className="container">
        <section className={styles.menu}>
          <h1 className={styles.title}>FAQ</h1>
          <main className={styles.questions}>
            {faqData.map((item, index) => (
              <article key={index} className={styles.item}  onClick={() => toggleItem(index)}>
                <div
                  className={styles.questionHeader}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <button className={`${styles.questionToggle} ${openIndex === index ? styles.questionToggleActive : ""}`}>
                    <Image
                      className={styles.questionIcon}
                      src="/images/plus.svg"
                      alt="plus"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <p className={`${styles.answerText} ${openIndex === index ? styles.answerTextHidden : ""}`}>
                  {item.answer}
                </p>
              </article>
            ))}
          </main>
        </section>
      </div>
    </section>
  );
};

export default FAQ;
