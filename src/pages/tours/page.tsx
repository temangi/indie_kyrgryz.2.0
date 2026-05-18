import { Reise } from "@/src/widgets/Reise"
import { OutdoorActivities } from "@/src/widgets/OutdoorActivities"
import { MainHero } from "@/src/widgets/MainHero"
import styles from "@/src/widgets/Tours/Tours.module.scss"
import { ToursCard } from "@/src/shared/ui/ToursCard/Card"
import { GROUP_TOUR_2026_SLUG, tours } from "@/src/widgets/Tours/constants/constants"
import { Application } from "@/src/widgets/Application"
import toursHeroImg from "@/public/images/slide10.webp"

const EXCLUDED_FROM_ALL_TOURS_PAGE = new Set()

const allToursPageItems = tours
    .filter((t) => !EXCLUDED_FROM_ALL_TOURS_PAGE.has(t.slug))
    .map((t) => ({
        tour: t,
        listingFormat:
            t.slug === GROUP_TOUR_2026_SLUG
                ? ("group" as const)
                : ("private" as const),
    }))

const ToursPage = () => {
    return (
        <>
            <MainHero
                title="ALL TOURS"
                titleId="tours-page-title"
                img={toursHeroImg}
                unTitle="Discover the heart of Central Asia with our hand-picked expeditions."
            />
            <section className={styles["tour-page-list-container"]}>
                <div className="container">
                    <div className={styles["tour-page-list"]}>
                        <div className={styles["tour-page-list__intro"]}>
                            <h2 className={styles["tour-page-list__intro-title"]}>
                                Browse routes
                            </h2>
                            <p className={styles["tour-page-list__intro-text"]}>
                                Indie Kyrgyz Travel runs small-group and private tours
                                across Kyrgyzstan for guests from Europe, the US, and
                                beyond. Multi-day journeys and shorter trips — each card
                                shows length, price, and whether the run is a{" "}
                                <strong>private tour</strong> on your dates or our{" "}
                                <strong>group tour</strong> with fixed departure. Open a
                                tour for the full itinerary, nomadic stays, and booking
                                details.
                            </p>
                        </div>
                        <div className={styles["tour-page-list__main"]}>
                            {allToursPageItems.map(({ tour, listingFormat }, index) => (
                                <ToursCard
                                    {...tour}
                                    key={tour.id}
                                    listingFormat={listingFormat}
                                    isFirstInList={index === 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <OutdoorActivities />
            <Application />
            <Reise />
        </>
    )
}

export default ToursPage