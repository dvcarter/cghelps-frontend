import React, { PropTypes } from 'react'
import styles from './ShowCase.css'
import ListHolder from "../../components/ListHolder"
import heather from "../../content/assets/tinyheart.png"

const Leadership = () => {
    return (
            <div className={styles.superHolder}>
                <div className={styles.title}> Leadership </div>
                <div className={styles.holder}>
                            <div className={styles.options}> 
                                <div className={styles.topics}>
                                    <img className={styles.imgs} src={ heather}/>
                                    <div className={styles.descriptor}>
                                        <h3 className={styles.pair}> Heather Rae </h3>
                                        <h5 className={styles.pair}> <em>President & Chief Executive Officer </em></h5>
                                    </div>
                                </div>
                                <div className={styles.copy}>
                                    <div className={styles.description}>
                                        Rae currently provides strategic direction and leadership to the organization while overseeing day-to-day operations, including the management of our contract to provide mental health services to all of Oakland County. Her prior contributions to Common Ground include being Vice President of Programs & Services, as well as leading the programmatic design of our community crisis center, which helps more than 80,000 people each year through phone calls, texts, online chat, and walk-in services. Rae holds a BS in Psychology focused on Applied Behavioral Analysis from Western Michigan University, and a MA in Clinical and Humanistic Psychology from the Center for Humanistic Studies. She has over 25 years of clinical and administrative experience within both the public and private sectors.

                                    </div>
                                </div>
                            </div>
                            <div className={styles.options}> 
                                <div className={styles.topics}>
                                    <img className={styles.imgs} src={heather}/>
                                    <div className={styles.descriptor}>
                                        <h3 className={styles.pair}> Vickie Krigner </h3>
                                        <h5 className={styles.pair}> <em>Vice President of Business Operations</em></h5>
                                    </div>
                                </div>
                                <div className={styles.copy}>
                                    <div className={styles.description}>
                                        Krigner currently coordinates the management of our finance, budget, accounting, facilities, medical records, human resources, patient information, quality improvement, and IT departments. She also sees that contractual obligations are met and recommends changes in policies, procedures, and services as needed. Prior to joining us in 1995, Krigner was chief reimbursement officer at Oakland County Community Mental Health Authority. She holds a BS in health care administration and an MBA both from Eastern Michigan University, as well as a Master Certificate in Healthcare Leadership from Cornell University, and a Certificate in Non-Profit Management from the University of Illinois at Chicago.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.options}> 
                                <div className={styles.topics}>
                                    <img className={styles.imgs} src={ heather}/>
                                    <div className={styles.descriptor}>
                                        <h3 className={styles.pair}> Aimee Nimeh, LMSW </h3>
                                        <h5 className={styles.pair}> <em>Vice President of Programs & Services</em></h5>
                                    </div>
                                </div>
                                <div className={styles.copy}>
                                    <div className={styles.description}>
                                          Nimeh is currently responsible for the administration and clinical oversight of every program and service Common Ground provides, including our psychiatric services, runaway and homeless youth services, and crime victim services. She has been dedicated to our mission since joining the organization as Director of Quality Assurance in 2011. Nimeh holds a BA and an MSW, both from the University of Michigan, and is also a graduate of the Arabic Language Institute at Jordan University. 
                                    </div>
                                </div>
                            </div>
                </div>
                <div className={styles.standIn}> 
                    <h3 className={styles.pair}> Senior Leadership </h3>
                    <ul className={styles.leadership}>
                        <li> <strong>Diane Cartwright</strong>, <em> Director of Crisis & Advocacy </em></li>
                        <li> <strong>Jeff Kapuscinski</strong>, <em> Director of Business Development & Advancement</em></li>
                        <li> <strong>Curtis Cooper</strong>, <em> Director of Information Technology </em></li>
                        <li> <strong>Veronica Brown</strong>, <em> Director of Health Information </em></li>
                        <li> <strong>Marc Wiliford</strong>, <em> Director of Finance </em></li>
                        <li> <strong>Todd Reid</strong>, <em> Director of OACIS </em></li>
                        <li> <strong>Kyle Glasgow</strong>, <em> Director of Mission Impact/Data Analysis </em></li>
                        <li> <strong>Kathryn Burgess</strong>, <em> Director of Nursing </em></li>
                        <li> <strong>Dr. Carmen Serpa</strong>, <em> Director of Medical Services </em></li>
                    </ul>
                </div>
                
                <ListHolder />
            </div>
        )
}

export default Leadership
