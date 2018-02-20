import React from "react"
import styles from "./index.css"
import Test from "../../content/assets/tester.png"
import SomePig from "../../content/assets/newpig.png"
import JailDiverted from "../../content/assets/betterJail.png"
import TestSVG from "../../content/assets/tester.svg"
import Svg from "react-svg-inline"

const JailDiversion = () => {
    return (


                            <div className={styles.imgArea}>
                                <div className={styles.infoCard}>
                                {/*<Svg
                                        svg={TestSVG}
                                        draggable='false'
                                        className={styles.placeholderBox}
                                        height='100%'
                                        /> */}
                                    <img src={Test} className={styles.placeholderBox} />
                                    <p className={styles.JDtext}> <span className={styles.bigSpanText}>431</span> <br />people</p>
                                </div>
                                <div className={styles.infoCard}>
                                   <div className={styles.placeholderBox}>
                                        <img src={JailDiverted} />
                                    </div>
                                    were<span className={styles.bigSpanText}>Diverted</span> from jail to more appropriate services
                                </div>
                                <div className={styles.infoCard}>
                                    <div className={styles.placeholderBox} >
                                        <img src={SomePig} />
                                    </div>
                                    saving <span className={styles.bigSpanText}>$5 million </span>
                                </div>
                            </div>

    )
}

export default JailDiversion
