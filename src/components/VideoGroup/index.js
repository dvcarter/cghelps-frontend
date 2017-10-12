import React from 'react'
import {Link} from "react-router-dom";
import styles from "./VideoGroup.css"
import YouTube from "../YouTube"

const VideoGroup =() => {
    return (
            <div className={styles.divHolder_0_2}>
                <div className={styles.title_0_2}> Success Stories </div>
                <div className={styles.videoGroup_0_2}>
                    <div className={styles.video_0_2}>
                        <YouTube className={styles.video_0_2} video="ibq3J5wOrJE" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <Link to="/success-stories/grupido">
                            Click Here
                        </Link>
                    </div>
                    <div className={styles.video_0_2}> 
                        <YouTube className={styles.video_0_2} video="_J4u7Ygbudo" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <Link to="/success-stories/lyons">
                            Click Here
                        </Link>
                    </div>
                    <div className={styles.video_0_2}>
                        <YouTube video="WRYJ8HSo2pw" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <Link to="/success-stories/terri">
                            Click Here
                        </Link>
                    </div>    
                </div>
          </div>
    )

}

VideoGroup.propTypes = {
}

export default VideoGroup
