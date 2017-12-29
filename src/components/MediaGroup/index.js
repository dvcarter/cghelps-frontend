import React from 'react'
import {Link} from "react-router-dom";
import styles from "./VideoGroup.css"
import YouTube from "../YouTube"

const VideoGroup =() => {
    return (
            <div className={styles.divHolder_0_2}>
                <div className={styles.title_0_2}> News and Media </div>
                <div className={styles.videoGroup_0_2}>
                    <div className={styles.video_0_2}>
                        <YouTube className={styles.video_0_2_} video="2UiCeUdRLXg" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            Common Ground's Runaway and Homeless Youth Program Manager, Heather McNutt, discusses services that we provide for the community.
                            <br />
                        <Link to="/news-and-media/mcnutt">
                            Watch Here
                        </Link>
                        </p>
                    </div>
                    <div className={styles.video_0_2}> 
                        <YouTube className={styles.video_0_2_} video="A45NwdnVT00" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            We developed this announcement with our community in mind, and we hope to reach those who are unfamiliar with our services.

                            When life becomes too much, Common Ground is there to help you move from crisis to hope.

                            If you know someone who's in a crisis, share this video.

                            You could save a life.
                           <br /> 
                        <Link to="/news-and-media/psa">
                            Watch Here
                        </Link>
                        </p>
                    </div>
                    {/*<div className={styles.video_0_2}>
                        <YouTube video="WRYJ8HSo2pw" autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            When Terri’s 24-year old son, Nate died by suicide, her world fell apart. Faced with this unthinkable loss, Terri struggled to make it through each day. That is when she found Common Ground. <br />
                        <Link to="/success-stories/terri">
                            Watch Here
                        </Link>
                        </p>
                    </div> 
                    */}
                </div>
          </div>
    )

}

VideoGroup.propTypes = {
}

export default VideoGroup
