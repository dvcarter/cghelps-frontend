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
                        <YouTube className={styles.video_0_2_} video="ibq3J5wOrJE" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            When damage to his brain and both shoulders ended his hopes for a college wrestling scholarship, Anthony fell into a major depression and started struggling with self-harm issues – until Common Ground helped him find new hope. <br />
                        <Link to="/success-stories/grupido">
                            Watch Here
                        </Link>
                        </p>
                    </div>
                    <div className={styles.video_0_2}> 
                        <YouTube className={styles.video_0_2_} video="_J4u7Ygbudo" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            After suffering with paranoid delusions, racing thoughts and misdiagnoses for over 20 years, Paul became homeless, and he lost all hope. That’s when he found Common Ground. <br />
                        <Link to="/success-stories/lyons">
                            Watch Here
                        </Link>
                        </p>
                    </div>
                    <div className={styles.video_0_2}>
                        <YouTube video="WRYJ8HSo2pw" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            When Terri’s 24-year old son, Nate died by suicide, her world fell apart. Faced with this unthinkable loss, Terri struggled to make it through each day. That is when she found Common Ground. <br />
                        <Link to="/success-stories/terri">
                            Watch Here
                        </Link>
                        </p>
                    </div>    
                </div>
          </div>
    )

}

VideoGroup.propTypes = {
}

export default VideoGroup
