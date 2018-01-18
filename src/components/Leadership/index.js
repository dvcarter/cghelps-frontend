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
                        <li> <strong>Kathryn Burdess</strong>, <em> Director of Nursing </em></li>
                        <li> <strong>Dr. Carmen Serpa</strong>, <em> Director of Medical Services </em></li>
                        <li> <strong>Rosa Thomas</strong>, <em> Director of Innovation </em></li>
                    </ul>
                </div>
                <div className={styles.standIn2}>
                    <ul className={styles.leadership2}>
                        <h3 className={styles.pair}> Board of Trustees </h3>
                        <li><strong> Douglas Wright</strong>, <em> Board Chair </em> </li>
                        <li><strong> Don Campbell</strong>, <em> Chair-Elect </em> </li>
                        <li><strong> Judy Christie</strong>, <em> Secretary </em> </li>
                        <li><strong> Gary Robb</strong>, <em> Treasurer </em> </li>
                        <li><strong> Kay White</strong>, <em> Immediate Past Chair </em></li>
                        <li><strong> Barbara Belkiewicz</strong></li>
                        <li><strong>David Boudreau</strong></li>
                        <li><strong>Lyle Dahlberg</strong></li>
                        <li><strong>Eric Dobrusin</strong></li>
                        <li><strong>Fred Fechheimer</strong></li>
                        <li><strong>James Kohlenberg, MD</strong></li>
                        <li><strong>Darren Lubbers, PhD</strong></li>
                        <li><strong>Lisa Mason</strong></li>
                        <li><strong>Sharon R. McMurray</strong></li>
                        <li><strong>Gregory Moore</strong></li>
                        <li><strong>Tawana Nettles-Robinson</strong></li>
                        <li><strong>Chris Ruen</strong></li>
                        <li><strong>Doug Smith</strong></li>
                        <li><strong>Alexandra Stan</strong></li>
                        <li><strong>Colette Stimmell</strong></li>
                        <li><strong>Kathy Walgren</strong></li>
                        <li><strong>Kevin B. Williams</strong></li>
                    </ul>
                    <ul className={styles.leadership3}>
                        <h3 className={styles.pair}> Advisory Board </h3>
                        <li><strong>Maggie Allesee</strong></li>
                        <li><strong>Richard Astrein</strong></li>
                        <li><strong>Sheriff Michael Bouchard</strong></li>
                        <li><strong>Jerry Cavellier</strong></li>
                        <li><strong>Gary Dembs</strong></li>
                        <li><strong>Joe Donovan</strong></li>
                        <li><strong>John Erb</strong></li>
                        <li><strong>Maxine Frankel</strong></li>
                        <li><strong>Eugene Hartwig</strong></li>
                        <li><strong>Eric Hawkins</strong></li>
                        <li><strong>Howard Hertz</strong></li>
                        <li><strong>Rita Margherio</strong></li>
                        <li><strong>Hon. Fred Mester</strong></li>
                        <li><strong>John Roberts</strong></li>
                        <li><strong>Shelley Roberts</strong></li>
                        <li><strong>Hon. Edward Sosnick</strong></li>
                    </ul>
                </div>
            </div>
        )
}

export default Leadership
