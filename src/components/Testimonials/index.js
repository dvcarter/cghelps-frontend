import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import terri from "../../content/assets/terri_thumb.png"
import paul from "../../content/assets/paul_thumb.png"
import YouTube from "../YouTube";
const Testimonials = () => {

    return (
            <div className={styles.bigHolder}> 
                <div className={styles.holder}>
                    <Link to="/success-stories">
                        <h3> Success Stories </h3>
                    </Link>
                    <div className={styles.vidBox}>
                        <YouTube video="ibq3J5wOrJE" autoplay="0" rel="0" modest="1" fs="1" />
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
                                    <img src={paul} alt="nothing here" className={styles.present} />
                                </div>
                            </div>
                            <div className={styles.vid2}> 
                                <div className={styles.vidArea}>
                                    <img src={terri} alt="nothing here" className={styles.present}/>
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
