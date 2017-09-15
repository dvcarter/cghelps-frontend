import React from "react";
import styles from "./index.css";

const Testimonials = () => {

    return (
            <div className={styles.bigHolder}> 
                <div className={styles.holder}>
                    <h3> Success Stories </h3> 
                    <div className={styles.vidBox}>
                        <div className={styles.bigVid}> 
                            left box 
                        </div>
                        <div className={styles.smallVids}> 
                            <div className={styles.vid1}>
                                top
                            </div>
                            <div className={styles.vid2}> 
                                bottom 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Testimonials
