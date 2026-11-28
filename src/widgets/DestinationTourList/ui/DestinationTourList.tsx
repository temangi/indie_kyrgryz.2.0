"use client";

import styles from "../DestinationTourList.module.scss";
import { useParams } from "next/navigation";
import { destinationTourInfo } from "../constants/constansts";
import BulletList from "@/src/shared/ui/BulletList/BulletList";
import Image from "next/image";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { destiontaionTour } from "../../Reise/constants/constants";
import { tours } from "../../Tours/constants/constants";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ArrowRight";
import { BackButton } from "@/src/shared/ui/btnBack/btnBack";
import { normalizeSeoTitle } from "@/src/shared/seo/normalizeSeoTitle";
import { CreateCustomTourCta } from "@/src/shared/ui/CreateCustomTourCta";
import { getDestinationSeoIntro } from "@/src/shared/seo/detailPageSeoCopy";
import { MiniSeoIntro } from "@/src/shared/ui/MiniSeoIntro/MiniSeoIntro";

const SONG_KUL_PHOTO_ALTS = [
  "Three people ride horses across a green mountain pasture toward snowy ridges",
  "A musician in a white kalpak plays bagpipes beside yurts on a highland pasture",
  "A traveler sits on the grass beside a yurt, with horses grazing on the pasture behind",
  "A dark horse grazes on the shore of a high lake at sunset, with ridges across the water",
  "A saddled white horse grazes on a green highland pasture",
];

const DESTINATION_PHOTO_ALTS: Record<string, string[]> = {
  "kel-suu": [
    "Yaks graze on a dry highland pasture",
    "Two riders on horseback follow a dirt track toward snowy peaks",
    "A rider stands on a grey horse in a green pasture, with snowy peaks behind",
    "Turquoise water meets a cliff at the edge of Kel-Suu",
    "Kel-Suu, a deep blue lake between steep rock walls",
    "Turquoise water at Kel-Suu stretches between pale cliffs",
  ],
  "issyk-kul": [
    "A river runs through a spruce forest toward a green mountain peak",
    "A group of travelers on red rock above a wide blue lake",
    "Hikers with trekking poles on a forest trail",
    "Red canyon walls beside a stream, seen from above at dusk",
    "Layered red canyon walls in warm light, with ridges beyond",
  ],
  "song-kul": SONG_KUL_PHOTO_ALTS,
  // TODO: this page currently reuses Song-Kul photos. Swap in real Nomad Games pictures.
  "world-nomad-games": SONG_KUL_PHOTO_ALTS,
};

const TOURS_VISITING_PLACE: Record<string, readonly string[]> = {
  "song-kul": [
    "song-kul",
    "kyrgyz-week",
    "best-of-kyrgyzstan",
    "mountain-adventure",
    "kyrgyzstan-kazakhstan",
  ],
  "kel-suu": ["mountain-adventure", "kyrgyzstan-kazakhstan"],
  "issyk-kul": [
    "kyrgyz-week",
    "best-of-kyrgyzstan",
    "mountain-adventure",
    "kyrgyzstan-kazakhstan",
    "altyn-arashan",
  ],
};

function toursVisitingPlace(slug: string) {
  const slugs = TOURS_VISITING_PLACE[slug];
  if (!slugs) return [];
  return slugs.flatMap((tourSlug) => {
    const tour = tours.find((item) => item.slug === tourSlug);
    return tour ? [tour] : [];
  });
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
            { label: "Destinations", href: "/destinations" },
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
                    alt={
                      DESTINATION_PHOTO_ALTS[tourSlug]?.[i] ??
                      "Landscape in Kyrgyzstan"
                    }
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

      <section className={styles.related} aria-labelledby="tours-visiting-place">
        <div className="container">
          <div className={styles.relatedTours__head}>
            <h2 id="tours-visiting-place" className={styles.relatedTours__title}>
              Tours that visit this place
            </h2>
            {tourSlug === "world-nomad-games" ? (
              <Link
                className={styles.relatedTours__link}
                href="/tours"
              >
                <span>Watch all tours</span>
                <ArrowRight
                  className={styles.relatedTours__arrow}
                  size={20}
                  aria-hidden="true"
                />
              </Link>
            ) : null}
          </div>
        </div>
        {tourSlug !== "world-nomad-games" ? (
          <div className={styles.relatedTours__list}>
            {toursVisitingPlace(tourSlug).map((tour) => (
              <ToursCard key={tour.id} {...tour} />
            ))}
          </div>
        ) : null}
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
