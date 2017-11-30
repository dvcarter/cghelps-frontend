import React from 'react'
import PropTypes from "prop-types"
import {HashLink as Link} from "react-router-hash-link"
import styles from './About.css'
//import OurStory from './ourstory.jpg'
//import HeroSlick from "../HeroSlick"

const About = () => {
    return (
            <div className={styles.bigHolder}>
                <div className={styles.title}>
                    <h5> About Us</h5>
                </div>
                <div className={styles.aboutText}>
                    At Common Ground, we're dedicated to helping people move from crisis to hope.
                </div>
                <div className={styles.holder}>
                    <div className={styles.boxes}>
                        <a href='/about-us/our-story' className={styles.box}>
                            <div className={styles.headline}>
                                <span>Our Story</span>
                            </div>
                        </a>
                        <a href='/posts' className={styles.box}>
                            <div className={styles.headline}>
                                News & Events
                            </div>
                        </a>
                        <a href='/get-help' className={styles.box}>
                            <div className={styles.headline}>
                                Programs & Services
                            </div>
                        </a>
                        <a href='/about-us/leadership' className={styles.box}>
                            <div className={styles.headline}>
                                Leadership
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles.title}>
                    <h5> Contact Us  </h5>
                </div>
                <div className={styles.aboutText}>
                    <div className={styles.aboutDescriptor}>
                        To reach our administrative staff, please call 248-456-8150 or email <span style={{color: 'red'}}><strong><a href="mailto:akscommonground@commongroundhelps.org">askcommonground@commongroundhelps.org</a></strong></span>
                    </div>
                </div>
                <div className={styles.title}>
                    <h5> Locations </h5>
                </div>
                <div className={styles.locationLinks} id="Careers">
                    <Link to="/visit#rcc" id={styles.locaLink}> Resource & Crisis Center > </Link>
                    <Link to="/visit#sanct" id={styles.locaLink}> The Sanctuary > </Link>
                    <Link to="/visit#admin" id={styles.locaLink}> Administration Building (Legal Clinic) > </Link>


                </div>
                <div className={styles.title}>
                    <h5>Careers </h5>
                </div>
                <div className={styles.aboutText}>
                        Want to help people move from crisis to hope? Join our team at Common Ground. In addition to
                        the rewards of positively impacting your local community, employee benefits include:
                        medical and dental insurance, life insurance, short and long-term disability insurance,
                        flexible spending account, paid time off, paid holidays, training and opportunities for
                        advancement, and retirement savings (403b).
                    <p>
                        <a href="https://csscg.sentrichr.com/" className={styles.careerlink}>
                        View our current openings >
                        </a>
                    </p>
                </div>
                {/*<div className={styles.heroArea}>
                    <HeroSlick />
                </div>*/}
            </div>
    )
}

About.propTypes = {
    about: PropTypes.array.isRequired,
}

export default About
