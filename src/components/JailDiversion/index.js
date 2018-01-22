import React from "react"
import styles from "./index.css"
import Test from "../../content/assets/tester.png"
import SomePig from "../../content/assets/newpig.png"
import JailDiverted from "../../content/assets/betterJail.png"


const JailDiversion = () => {
    return (


                            <div className={styles.imgArea}>
                                <div className={styles.infoCard}>
                                        <img src={Test} className={styles.placeholderBox} />
                                    <span className={styles.bigSpanText}>431</span> people
                                </div>
                                <div className={styles.infoCard}>
                                   <div className={styles.placeholderBox}>
                                        <img src={JailDiverted} />
                                    </div>
                                    were <span className={styles.bigSpanText}>Diverted</span> from Jail
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.placeholderBox} >
                                        <img src={SomePig} />
                                    </div>
                                    saving taxpayers <span className={styles.bigSpanText}>$5 million </span>
                                </div>
                            </div>

)
}

export default JailDiversion
