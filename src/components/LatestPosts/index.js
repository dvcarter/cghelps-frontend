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
                                    <h5 className={styles.subtitle}>Businesswoman’s Death Highlights Mental Health Risks for Women </h5>
                                    <div className={styles.descriptionArea}> 
           We're saddened to hear of Kate Spade's death and our condolences go out to her friends, family, and coworkers. We encourage everyone to be kind, to check in on your loved ones... 
                                    </div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }

export default LatestPosts
