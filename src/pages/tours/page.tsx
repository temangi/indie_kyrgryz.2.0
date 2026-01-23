import { Reise } from "@/src/widgets/Reise"
import styles from "@/src/widgets/Tours/Tours.module.scss"
import { ToursCard } from "@/src/shared/ui/ToursCard/Card"
import { tours } from "@/src/widgets/Tours/constants/constants"


const ToursPage = () => {
    return (
        <>
            <div className="container">
                <section className={styles["tour-page-list"]}>
                    <h1 className={styles["tour-page-list__title"]} >ALL TOURS</h1>
                    <main className={styles["tour-page-list__main"]}  >
                        {tours.map((el, index) => <ToursCard {...el} key={index} />)}
                    </main>
                </section>
            </div>
            <Reise />
        </>
    )
}

export default ToursPage