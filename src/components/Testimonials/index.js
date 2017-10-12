import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import terri from "../../content/assets/terri_thumb.png"
import paul from "../../content/assets/paul_thumb.png"
import YouTube from "../YouTube";
const Testimonials = () => {

    return (
            <div className={styles.bigHolder_0_2_0}> 
                <div className={styles.holder_0_2_0}>
                    <Link to="/success-stories">
                        <h3> Success Stories </h3>
                    </Link>
                    <div className={styles.vidBox_0_2_0}>
                        <YouTube video="ibq3J5wOrJE" autoplay="0" rel="0" modest="1" fs="1" />
                    {/*<div className={styles.bigVid}>
                            <YouTube video="mYFaghHyMKc" autoplay="0" rel="0"
                            modest="1" />
                        </div> */}
                        <div className={styles.smallVids_0_2_0}> 
                            <div className={styles.vid1_0_2_0}>
                                <div className={styles.textArea_0_2_0}>
                                    <em>Our Crisis Residential Unit
                                    helped Paul get his life back.</em>
                                </div>
                                <div className={styles.vidArea_0_2_0}>
                                    <img src={paul} alt="nothing here" className={styles.present_0_2_0} />
                                </div>
                            </div>
                            <div className={styles.vid2_0_2_0}> 
                                <div className={styles.vidArea_0_2_0}>
                                    <img src={terri} alt="nothing here" className={styles.present_0_2_0}/>
                                </div>
                                <div className={styles.textArea_0_2_0}>
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
