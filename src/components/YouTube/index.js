import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./YouTube.css";

export default class YouTube extends Component {
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
               <div className="container_video">
                <iframe className="player" type="text/html" width="300em"
                        height="300em"
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
