import { Reise } from "@/src/widgets/Reise"
import styles from "@/src/widgets/Tours/Tours.module.scss"
import { ToursCard } from "@/src/shared/ui/ToursCard/Card"
import { tours } from "@/src/widgets/Tours/constants/constants"
import { Application } from "@/src/widgets/Application"


const ToursPage = () => {
    return (
        <>
            <div className="container">
                <section className={styles["tour-page-list"]} aria-labelledby="tours-page-title">
                    <h1 id="tours-page-title" className={styles["tour-page-list__title"]}>
                        ALL TOURS
                    </h1>
                    <div className={styles["tour-page-list__main"]}>
                        {tours.map((el, index) => <ToursCard {...el} key={index} />)}
                    </div>
                </section>
            </div>
            <Application />

            <Reise />
        </>
    )
}

export default ToursPage