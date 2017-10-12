import React, {Component} from 'react'
import PropTypes from "prop-types"
import styles from "./SingleVideo.css"
import ytStyles from "../YouTube/YouTube.css"

const SingleVideo =({getVideo}) => {
    return (
            <div className={styles.divHolder_0_2_1}>
                <div className={styles.title_0_2_1}> Success Stories </div>
                <div className={styles.videoGroup_0_2_1}>
                    <div className={styles.video_0_2_1}>
                        <YouTube className={styles.videoPt_0_2_1} video={getVideo.video} autoplay="0" rel="0" modest="1" fs="1" />
                        <p className={styles.videoDescription_0_2_1} >
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
               <div className={ytStyles.container_video}>
                <iframe className={ytStyles.player} type="text/html" width="600em"
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
