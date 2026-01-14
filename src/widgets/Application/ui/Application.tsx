"use client";

import Image from "next/image";
import styles from "../Application.module.scss";
import { useModalStore } from "@/src/shared/model/useModalStore";


const Application = () => {

  const openModal = useModalStore(state => state.openModal)

  return (
    <section id="application" className={styles.application}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.offer}>
            <h1 className={styles.title}>
              Couldn't find <br />
              the perfect tour?
            </h1>
            <p className={styles.subtitle}>
              <span className={styles.accent}> LET US KNOW</span>
            </p>
          </article>
          <article className={styles.details}>
            <main className={styles.advantages}>
              <figure className={styles.advantage}>
                <Image
                  className={styles.icon}
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <figcaption className={styles.description}>
                  Get a tour perfectly matched to your budget
                </figcaption>
              </figure>
              <figure className={styles.advantage}>
                <Image
                  className={styles.icon}
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <figcaption className={styles.description}>
                  Enjoy a trip designed around your needs and preferences
                </figcaption>
              </figure>
              <figure className={styles.advantage}>
                <Image
                  className={styles.icon}
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <figcaption className={styles.description}>
                  Experience an itinerary tailored to your pace and interests
                </figcaption>
              </figure>
              <figure className={styles.advantage}>
                <Image
                  className={styles.icon}
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <figcaption className={styles.description}>
                  Add exclusive, unforgettable moments to your journey
                </figcaption>
              </figure>
            </main>
            <button className={styles.button} onClick={openModal}>
              Submit application
            </button>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Application;
