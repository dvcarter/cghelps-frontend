import React from "react"

import styles from "./index.css"
import FaceBook from "./facebook-logo.png"
import LinkedIn from "./linkedin-logo.png"
import Twitter from "./twitter-logo.png"
import mcStyles from "../../index.global.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <div className={styles.footerItems}>
        <div className={styles.socialItems}>
            <div className={styles.footText}></div>
            {<a 
                href={'https://www.facebook.com/commongroundhelps/'}
                className={styles.socialItem}>
                    <span><img src={FaceBook} alt="facebook icon"/></span>
            </a>
            } 
            { <a
                href={'https://www.linkedin.com/company/commongroundhelps'}
                className={styles.socialItem}>
                    <span><img src={LinkedIn} alt="linkedIn icon" /></span>
            </a>
            }
            { <a
                href={'https://twitter.com/cghelps'}
                className={styles.socialItem}>
                    <span><img src={Twitter} alt="twitter icon" /></span>
            </a>
            }
        </div>
        <div className={styles.greatDivide} />
    </div>
    <div className={styles.accreditation}>
        <div className={styles.column1}>
            <p>
                <h4><strong>Subscribe to our Newsletter</strong></h4>
                Sign-up to have our quarterly communications delivered right to your inbox
                
                <div id={mcStyles.mc_embed_signup}>
                <form action="//commongroundhelps.us13.list-manage.com/subscribe/post?u=782d883598807592a7afafd27&amp;id=6ae736da35" method="post" id={mcStyles.mc_embedded_subscribe_form} name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id={mcStyles.mc_embed_signup_scroll}>
                            <input type="email"  name="EMAIL"  id={mcStyles.mce_EMAIL} placeholder="email address" required/>
                                    <input type="submit" value="Subscribe" name="subscribe" className={mcStyles.mc_button}/>
                                        </div>
                                        </form>
                                        </div>

                
            </p>
        
        
        </div>
        <div className={styles.column2}>
            <p>
                <h4><a href="http://www.commongroundhelps.org/contact/"><strong>Contact Information</strong></a></h4>
                To reach our administrative office for not crisis situations or if you would like to file a complaint,
                please call <strong><a href="tel:2484568150">248.456.8150</a></strong> or
                email <strong><a href="mailto:askcommonground@commongroundhelps.org">askcommonground@commongroundhelps.org</a></strong>
                </p>
        
        
        </div>
        <div className={styles.column3}>
            {/*<a
                href="/media-toolkit"
                className={styles.columnLinks}>
                    Media Toolkit
            </a>*/}
            {<a
                href="/accreditation"
                className={styles.columnLinks}>
                    Accreditation
            </a>}
            {<a 
                href="/contact"
                className={styles.columnLinks}>
                    Contact
            </a>}
            {<a
                href="/code-of-ethics"
                className={styles.columnLinks}>
                    Code of Ethics
            </a>}
            {<a
                href="/terms-of-service"
                className={styles.columnLinks}>
                    Terms of Service
            </a>}
            {<a
                href="/privacy-policy"
                className={styles.columnLinks}>
                    MSHMIS Privacy Policy
            </a>}
            {<a
                href="https://www.1800runaway.org/"
                className={styles.columnLinks}>
                    National Runaway Safeline
             </a>}
            {<a
                href="/copyright"
                className={styles.columnLinks}>
                    Copyright
            </a>}
        </div>
    </div>
  </footer>
)

export default Footer
