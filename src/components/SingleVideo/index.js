import React from 'react'
import styles from "./SingleVideo.css"
import YouTube from "../YouTube"

const SingleVideo =({getVideo}) => {
    return (
            <div className={styles.divHolder_0_2_1}>
                <div className={styles.title_0_2_1}> Success Stories </div>
                <div className={styles.videoGroup_0_2_1}>
                    <div className={styles.video_0_2_1}>
                        <YouTube className={styles.video_0_2_1} video={getVideo.video} autoplay="0" rel="0" modest="1" fs="1" />
                        <p>
                            {getVideo.description}
                        </p>
                    </div>
                </div>
          </div>
    )

}

SingleVideo.propTypes = {
}

export default SingleVideo
