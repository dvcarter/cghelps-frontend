import React, {Component} from 'react'
import PropTypes from "prop-types"
import styles from "./SingleVideo.css"
import ytSty from "./SingleYouTube.css"

const SingleVideo =({getVideo}) => {
    return (
            <div className={styles.divHolder_0_2_1_0}>
                <div className={styles.title_0_2_1_0}> Success Stories </div>
                <div className={styles.videoGroup_0_2_1_0}>
                    <div className={styles.video_0_2_1_0}>
                        <YouTube className={styles.videoPt_0_2_1_0} video={getVideo.video} autoplay="0" rel="0" modest="1" fs="1" />
                        <p className={styles.videoDescription_0_2_1_0} >
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


class YouTube extends Component {
    render() {

       let videoSrc = "https://www.youtube.com/embed/" +
           this.props.video + "?autoplay=" +
           this.props.autoplay + "&rel=" +
           this.props.rel +
           "&modestbranding=" +
           this.props.modest +
           "&fs=" +
           this.props.fs;

       return (
               <div className={ytSty.container_video_0_2_1_0}>
                <iframe className={ytSty.player_video_0_2_1_0} type="text/html" width="600em"
                        height="500em"
                        src={videoSrc}
                        frameBorder="0"
                        allowFullScreen
                        />  
                </div>      
        )           
    }       
}

YouTube.propTypes = {
    video: PropTypes.string,
    autoplay: PropTypes.integer,
    rel: PropTypes.integer,
    modest: PropTypes.integer,
    fs: PropTypes.integer,
}
