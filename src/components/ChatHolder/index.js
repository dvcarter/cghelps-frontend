import React, { PropTypes } from 'react'
import styles from "./ChatHolder.css"

const ChatHolder =() => {
    return (
            <div className={styles.divHolder}>
                <div className={styles.title2}> Chat </div>
               <div className={styles.availHolder}>
                     <div className={styles.iframeHolder}>
                        <iframe id="iCarolMessagingBadge" src="https://webapp.icarol.com/pub/Messaging/StatusBadge.aspx?orgNum=2194&pid=204&cc=en-US&RIF1=291382" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div className={styles.newAvail}> 
                             <ul> Availability
                                <li> 24/7, excluding holidays <em>(Please be aware that chat may be intermittently unavailable as we transition to 24/7 coverage)</em> </li>
                                <li> Based on Staff/Volunteer Availability </li>
                            </ul>
                    </div>
            </div>
            <div className={styles.holder}>
                    <div className={styles.midHolder}>
                        <div className={styles.availability}>
                            If chat is offine, please email
                                       chat@commongroundhelps.org or click on one of the options below 
                                                                              for further assistance.
                        </div>
                        <div className={styles.lowHolder}>
                            <div className={styles.options}>
                                <a href="tel:18002311127">
                                    <ul>
                                        <li className={styles.betterVersion}> Common Ground's Resource and Crisis Hotline
                                            <ul>
                                                <li className={styles.contactInfo}> 1-800-231-1127</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>    
                            <div className={styles.options}>    
                                <a href="tel:18002738255">
                                    <ul>
                                        <li className={styles.betterVersion}>National Suicide Prevention Hotline
                                            <ul>
                                                <li className={styles.contactInfo}>1-800-273-TALK [8255] </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className={styles.options}>
                                <a href="http://www.suicidepreventionlifeline.org">
                                    <ul>
                                        <li className={styles.betterVersion}> Lifeline Crisis Chat-National Suicide Prevention Lifeline
                                            <ul>
                                                <li className={styles.contactInfo}>Click Here</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className={styles.options}>
                                <a href="sms:741741">    
                                    <ul>
                                        <li className={styles.betterVersion}>Crisis Text Line (National Service)
                                            <ul>
                                                <li className={styles.contactInfo}>Text "Hello" to 741741</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
    )

}

ChatHolder.propTypes = {
    chatHolder: PropTypes.array.isRequired,
}

export default ChatHolder
