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
                                    <h4 className={styles.subtitle}>Legal Clinic is closed today</h4>
                                    <div className={styles.descriptionArea}> 
                                       The Legal Clinic is closed today, April 10<sup>th</sup>, due to scheduling issues, but it will be in session on Thursday, April 12<sup>th</sup>  
            
            
            
                                    ...</div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }

export default LatestPosts
