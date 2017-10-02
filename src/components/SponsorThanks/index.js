import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./SponsorThanks.css"
// import SponsorSlider from "../SponsorSlider"
import { Carousel } from "react-responsive-carousel"
import style from 'react-responsive-carousel/lib/styles/carousel.min.css'

class SponsorSlider extends Component {
    render() {
        return (
                <Carousel showArrows={true} className={style.carousel}>
                        <img src="http://placekitten.com/g/400/200" alt="3" />
                        <img src="http://placekitten.com/g/400/200" alt="4" />
               </Carousel>
        )                   
    }
}



class SponsorThanks extends Component {

    render() {

        return (
                <div className={styles.bigHolder}> 
                    <div className={styles.title}> Heartfelt Thanks to You and our Corporate Sponsors </div>
                        <SponsorSlider />
                    <div> Call our Community Engagement Specialist at 248-451-3734 to 
                          become a Corporate Sponsor! 
                    </div>
                </div>
        )
    }
}

SponsorThanks.propTypes = {
    sponsorThanks: PropTypes.array.isRequired
}

export default SponsorThanks

