"use client";

import styles from "../DestinationTourList.module.scss";
import { useParams } from "next/navigation";
import { destinationTourInfo } from "../constants/constansts";
import BulletList from "@/src/shared/ui/BulletList/BulletList";
import Image from "next/image";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { destiontaionTour } from "../../Reise/constants/constants";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ArrowRight";
import { BackButton } from "@/src/shared/ui/btnBack/btnBack";
import { normalizeSeoTitle } from "@/src/shared/seo/normalizeSeoTitle";
import { CreateCustomTourCta } from "@/src/shared/ui/CreateCustomTourCta";
import { getDestinationSeoIntro } from "@/src/shared/seo/detailPageSeoCopy";
import { MiniSeoIntro } from "@/src/shared/ui/MiniSeoIntro/MiniSeoIntro";

const DESTINATION_PHOTO_ALT: Record<string, string> = {
  "kel-suu": "Kel-Suu lake",
  "issyk-kul": "Issyk-Kul lake",
  "song-kul": "Song-Kul lake",
  // TODO: this page currently reuses Song-Kul photos. Swap in real Nomad Games pictures.
  "world-nomad-games": "Highland landscape in Kyrgyzstan",
};

function destinationPhotoAlt(slug: string) {
  return DESTINATION_PHOTO_ALT[slug] ?? "Landscape in Kyrgyzstan";
}

function DestinationTourList() {
  const params = useParams<{ slug: string }>();
  const currentTour = destinationTourInfo.find(tour => tour.slug === params?.slug);
  if (!currentTour) {
    return (
      <section className={styles.notFound}>
        <div className="container">
          <h2>Tour not found</h2>
        </div>
      </section>
    );
  }

  const { arr, title, desc, geography, imgs, slug: tourSlug } = currentTour;
  const seoIntro = getDestinationSeoIntro(tourSlug);

  return (
    <>
      <section className={styles.destination}>
        <BackButton
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tours", href: "/tours" },
            { label: normalizeSeoTitle(title) },
          ]}
        />
        <div className="container">
          <div className={styles.destination__content}>
            <div className={styles.destination__contentText}>
              <header className={styles.destination__header}>
                <h1 className={styles.destination__title}>{title}</h1>
                <p className={styles.destination__description}>{desc}</p>
                {seoIntro ? (
                  <MiniSeoIntro
                    text={seoIntro}
                    className={styles.destination__seoIntro}
                  />
                ) : null}
              </header>

              <div className={styles.destination__section}>
                <h2 className={styles.destination__subtitle}>Geography</h2>
                <p className={styles.destination__text}>{geography}</p>
              </div>

              <article className={styles.destination__highlights}>
                <h2 className={styles.destination__subtitle}>
                  What You Can See?
                </h2>
                <div className={styles.destination__highlightsList}>
                  {arr.map((el, index) => (
                    <BulletList key={index} {...el} />
                  ))}
                </div>
              </article>
            </div>

            <aside className={styles.destination__contentImg}>
              {imgs.map((img, i) => (
                <div key={i} className={styles.imageWrapper}>
                  <Image
                    src={img}
                    alt={`${destinationPhotoAlt(tourSlug)}, photo ${i + 1}`}
                    sizes="(max-width: 992px) 100vw, 40vw"
                    className={styles.sidebarImg}
                    placeholder="blur"
                  />
                </div>
              ))}
            </aside>
          </div>
          <CreateCustomTourCta className={styles.destination__ctaRow} />
        </div>
      </section>

      <section className={styles.related}>
        <div className="container">
          <div className={styles.relatedTours__head}>
            <h2 className={styles.relatedTours__title}>You might also like</h2>

            <Link
              className={styles.relatedTours__link}
              href="/tours"
              aria-label="View all available tours"
            >
              <span>Watch all tours</span>
              <ArrowRight
                className={styles.relatedTours__arrow}
                size={20}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
        <div className={styles.relatedTours__list}>
          {destiontaionTour
            .filter((el) => el.slug !== params?.slug)
            .map((el) => (
              <ToursCard key={el.id} {...el}/>
            ))}
        </div>
      </section>
    </>
  );
}

export default DestinationTourList;
