import React from 'react'
import PropTypes from "prop-types"
import styles from './OurStory.css'
//import OurStory from './ourstory.jpg'

const OurStory = () => {
    return (
            <div className={styles.bigHolder}>
            <h2> Our Story </h2>
                <div className={styles.title}>
                    <h5> Past</h5>
                </div>
                <div className={styles.aboutText}>
                   Common Ground is the product of a 1998 merger of two agencies, Common Ground and The Sanctuary, Inc., that had served Oakland County since the early 1970s. The merger allowed those in the community experiencing a crisis a single source of help. The unified approach to meeting community needs enabled both organizations to expand their services significantly. Common Ground was founded in 1971 by a group of students, parents and community leaders who were concerned about an increase in substance abuse and suicide among young people. United Community Services volunteers began The Sanctuary, Inc. in response to the growing number of runaway youth in Oakland County. The residential counseling program for runaway and homeless youth, ages 10-17, opened in 1974. The program offered youth two weeks in which to resolve the conflicts that led them to leave home. Today, Common Ground is a 24-hour crisis services agency dedicated to helping youths, adults and families in crisis. Through its crisis line and in person, Common Ground provides professional and compassionate service to more than 80,000 people a year. 
                </div>
                <div className={styles.title}>
                    <h5> Present  </h5>
                </div>
                <div className={styles.aboutText}>
                    Today, Common Ground is a 24-hour crisis services agency dedicated to helping 
                    youths, adults, and families in crisis. Through our crisis line and in person, we
                    provide professional and compassionate service to more than 80,000 people
                    each year. Every member of our team is dedicated to our core purpose and guided
                    by our core values.
                    
                    <h4> Core Purpose </h4>
                    Helping People Move from Crisis to Hope
                    <h4> Core Values </h4>
                     <ul>
                        <li> Integrity </li>
                        <li> Respect </li>
                        <li> Compassion </li>
                        <li> Excellence </li>
                        <li> Collaboration </li>
                        <li> Helpful </li>
                        <li> Wellness </li>
                    </ul>
                </div>

                <div className={styles.title}>
                    <h5> Future </h5>
                </div>
                <div className={styles.aboutText}>
                    Our vision for the future is that our efforts will continue to result in 
                    positive changes in people's lives and throughout their communities,
                    which will lead more people to feel safe asking for help. As a result,
                    demand for our services will continue to grow, thus driving the further
                    growth of Common Ground.
                    <br />
                    <br />
                    As a nationally recognized crisis services organization - one respected for
                    its quality, reliability, and collaborative spirit - our reputation will help us
                    attract and retain highly qualified staff, volunteers, and board members, 
                    thereby better equipping us to continue helping people move from crisis to hope.
                    <br />
                    <br />
                    We are dedicated to developing and implementing the innovative strategies 
                    required to achieve our vision.
                </div>
            </div>
    )
}

OurStory.propTypes = {
    OurStory: PropTypes.array.isRequired,
}

export default OurStory
