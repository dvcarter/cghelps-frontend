import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";

const Impact = () => {

    return (
            <div className={styles.bigHolder}>
               <div className={styles.holder}> 
                    <Link to='/posts'>
                        <h3> Our Impact </h3>
                    </Link>
                    <div className={styles.infoHolder}>
                        <div className={styles.numbers}> 
                            88,000
                        </div>
                        <div>
                            Common Ground helps over <strong>88,000</strong> people each year
                        </div>
                        <div className={styles.infographic}> 
                            infographic 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Impact
