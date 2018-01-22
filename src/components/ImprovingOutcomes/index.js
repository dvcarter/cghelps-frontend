import React from "react"
import styles from "./index.css"
import Test from "../../content/assets/tester.png"

const ImprovingOutcomes = () => {
    return (


                            <div className={styles.imgArea}>
                                <div className={styles.infoCard}>
                                    <img src={Test} className={styles.placeholderBox} />
                                    Common Ground treated <span className={styles.bigSpanText}>3,850</span>  people for mental health and crisis issues
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.placeholderBox} />
                                    averting the cost of <span className={styles.bigSpanText}>$5.3 million </span> had they been seen in an behavioral inpatient unit
                                </div>
                            </div>

)
}

export default ImprovingOutcomes
