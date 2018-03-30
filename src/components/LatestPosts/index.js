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
                                    <h4 className={styles.subtitle}>Support for Parents of Nassar Survivors</h4>
                                    <div className={styles.descriptionArea}> 
                                    	Common Ground is offering a free support group for the parents of Larry Nassar survivors. Nassar was recently convicted of multiple counts of criminal sexual conduct (CSC) for the abuse he inflicted on more than 265 women and girls 
            
            
            
            
                                    ...</div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }

export default LatestPosts
