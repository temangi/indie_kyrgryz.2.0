import styles from "@/src/widgets/Tours/Tours.module.scss"
import Link from "next/link"
import { ITour } from "@/src/widgets/Tours/constants/constants"

export const ToursCard = ({id , title ,day, img}  : ITour ) => {
    return (
        <div className={styles.cardMain} >
        <Link href={`/tour/${id}`} className={styles.card} style={{backgroundImage : `url(${img.src})`}}>
          <div className={styles.cardHead}>
            <p className={styles.cardTitle}>{title}</p>
            <span className={styles.cardDuration}>{day}</span>
          </div>
          <button className={styles.cardButton}>
            tour program
          </button>
        </Link>
      </div>
    )
}