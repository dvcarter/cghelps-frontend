import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import Svg from "react-svg-inline"
import num from "../../content/assets/88000.svg"
import JailDiversion from "../JailDiversion"
import EmergencyBoarding from "../EmergencyBoarding"
import ImprovingOutcomes from "../ImprovingOutcomes"
import ReducingDistress from "../ReducingStress"

const Impact = () => {

    return (
            <div className={styles.bigHolder}>
               <div className={styles.holder}> 
                    <Link to='/posts'>
                        <h3> Our Impact </h3>
                    </Link>
                    <div className={styles.infoHolder}>
                        <div className={styles.numbers}> 
                        {/*<Svg
                                svg={num}
                                draggable='false'
                                height="55vh"
                                width="55vw"
                            />*/}
                            <div className={styles.smallNum}>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                88,000
                            </div>
                        </div>
                        <div>
                            Common Ground helps over <strong>88,000</strong> people each year
                        </div>
                        <div className={styles.infographic}> 
                             <JailDiversion />
                            {/*<EmergencyBoarding /> */}
                            {/*<ImprovingOutcomes /> */}
                            {/* <ReducingDistress /> */}
                            <Link to="/donate" className={styles.donateButton}>
                                {"DONATE NOW"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Impact
