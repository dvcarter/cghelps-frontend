import React from "react";
import styles from "./index.css";
//import main from "../../content/assets/grupido.jpg";
//import aux1 from "../../content/assets/not_terri.jpg";
//import aux2 from "../../content/assets/terri.jpg";

import YouTube from "../YouTube";
const Testimonials = () => {

    return (
            <div className={styles.bigHolder}> 
                <div className={styles.holder}>
                    <h3> Success Stories </h3> 
                    <div className={styles.vidBox}>
                        <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" fs="1" />
                    {/*<div className={styles.bigVid}>
                            <YouTube video="mYFaghHyMKc" autoplay="0" rel="0"
                            modest="1" />
                        </div> */}
                        <div className={styles.smallVids}> 
                            <div className={styles.vid1}>
                                <div className={styles.textArea}>
                                    <em>Our Crisis Residential Unit
                                    helped Paul get his life back.</em>
                                </div>
                                <div className={styles.vidArea}>
                                    Time
                                </div>
                            </div>
                            <div className={styles.vid2}> 
                                <div className={styles.vidArea}>
                                    Time
                                </div>
                                <div className={styles.textArea}>
                                    <em>Survivors of Suicide Loss
                                    support group sessions
                                    helped Terri to heal.</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Testimonials
