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
                                    <h4 className={styles.subtitle}>Legal Clinic Closed Today</h4>
                                    <div className={styles.descriptionArea}>Due to construction at the Administration building, the legal clinic will not be held on Tuesday, November 7<sup>th</sup>. It is still scheduled to occur at the Oakland County Law Library on Thursday, November 9<sup>th</sup>... </div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }

export default LatestPosts
