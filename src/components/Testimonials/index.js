import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import grupido from "../../content/assets/grupido_thumb.png"
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
                        <div className={styles.bigVid_0_2_0}>
                            <Link to={"success-stories/grupido"} className={styles.linkedOut}>
                                <div className={styles.headline}>
                                    <span> Outpatient Counseling helped Anthony find new hope. </span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.smallVids_0_2_0}> 
                            <div className={styles.vid1_0_2_0}>
                                <div className={styles.textArea_0_2_0}>
                                    <em>Our Crisis Residential Unit 
                                    helped Paul get his life back.</em>
                                </div>
                                <div className={styles.vidArea_0_2_0}>
                                    <Link className={styles.present2_link} to="/success-stories/lyons">
                                        <img src={paul} alt="nothing here" className={styles.present_0_2_0} />
                                    </Link> 
                                </div>
                            </div>
                            <div className={styles.vid2_0_2_0}> 
                                <div className={styles.vidArea_0_2_0}>
                                    <Link className={styles.present3_link} to="/success-stories/terri"> 
                                        <img src={terri} alt="nothing here" className={styles.present_0_2_0}/>
                                    </Link>
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
