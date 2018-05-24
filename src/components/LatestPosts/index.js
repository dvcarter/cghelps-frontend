import React  from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import bird from "../../content/assets/calendar.jpeg";

const LatestPosts = () => {
        return (
                <div className={styles.bigHolder}>
                    <div className={styles.holder}> 
                        <Link to='/posts'>
                            <h3> News & Events </h3>
                        </Link>
                        <div className={styles.postHolder}>
                            {/* {posts.title.rendered} */}
                                <img className={styles.standInImg} src={bird} alt="" />
                                <div className={styles.textArea}> 
                                    <h4 className={styles.subtitle}>Volunteers needed!</h4>
                                    <div className={styles.descriptionArea}> 
                                    We host an informational orientation on the 1st Wednesday of every month at 6pm. Stop in at the Resource and Crisis Center (address listed below) to find out more about volunteering...
                                    </div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }

export default LatestPosts
