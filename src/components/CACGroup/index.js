import React from 'react'
import PropTypes from "prop-types"
import styles from './CACGroup.css'
//import OurStory from './ourstory.jpg'

const CACGroup = () => {
    return (
            <div className={styles.bigHolder_5_1}>
            <div className={styles.title}> The Common Ground Consumer Advisory Council </div>
                <div className={styles.title_5_1}>
                    <h5> Who we are </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                    We are past and present recipients
                    of help (or a family member) from one of Common Ground’s services, with a desire to do something more to help others in crisis
                </div>
                <div className={styles.title_5_1}>
                    <h5> What we do  </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                   We provide input, guidance and recommendations to the
                   Common Ground Board of Trustees and the Administration to continuously improve our services.
                {/* <h4> Core Purpose </h4>
                    Helping People Move from Crisis to Hope
                    <h4> Core Values </h4>
                     <ul>
                        <li> <strong>Empowerment</strong> - maximizing the potential of all </li>
                        <li> <strong>Collaboration</strong> - always working toward shared goals</li>
                        <li><strong>Innovation</strong> - exploring new ways to positively impact our community </li>
                        <li><strong> Diversity and Inclusivity</strong> - welcoming and respectful of people and ideas </li>
                    </ul> */}
                </div>

                <div className={styles.title_5_1}>
                    <h5> Why we meet </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                    Because the unique perspective of someone who has received services matters! We have been there and know first hand the challenges of moving from a crisis to hope.
                    We make a difference!
                </div>

                <div className={styles.title_5_1}>
                    <h5> When do we meet </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                    We meet on the
                    &nbsp;<strong>First Wednesday of the month </strong>.
                    From 11:00 am to 1:00 pm
                </div>
                <div className={styles.title_5_1}>
                    <h5> Where do we meet </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                    Resource & Crisis Center
                    <br />
                    1200 N. Telegraph Rd, Building 32E 
                    <br />
                    Pontiac, MI 48341
                    <br />
                    <a href="http://commongroundhelps.org/visit"> Click here to view map </a>
                </div>
                <div className={styles.title_5_1}>
                    <h5> How to become involved </h5>
                </div>
                <div className={styles.aboutText_5_1}>
                    To join or for more information, please contact Sean Sylvester at
                    248-451-3789
                    or email at <a href="mailto:ssylvester@commongroundhelps.org"> ssylvester@commongroundhelps.org</a>
                </div>
            </div>
    )
}

CACGroup.propTypes = {
    CACGroup: PropTypes.array.isRequired,
}

export default CACGroup
