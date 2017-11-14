import React from 'react'
import PropTypes from "prop-types"
import styles from "./CrisisToHope.css"
import sty from "./crisisToHopeHero.css"
import GetInvolved from "../../content/assets/getinvolved.jpg"
import C2HForm from "../C2HForm"

const CrisisToHope = () => {
    return (
            <div className={styles.superHero}>
            {/* <div
                        className={ sty.hero } 
                        style={ {background: `#111 url(${GetInvolved}) 50% 50% / cover`}}
                    >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <div className={ sty.heading }>
                                    <div className={sty.textBox}>
                                        <div className={sty.purpleTitle}> Crisis To Hope </div>
                                        <p> 
                                            Take a tour of our Resource & Crisis Center to learn how you can <em> help move people from crisis to hope. </em></p>
                                        <div className={sty.datePlacement}>
                                                <ul> 
                                                    <li> Tour Dates:</li>
                                                    <li> November 21<sup>st</sup> 9-10am </li>
                                                    <li> December 5<sup>th</sup> 6-7pm</li>
                                                    <li> December 19<sup>th</sup> 9-10am </li>
                                                </ul>
                                        </div>
                                        <button className={sty.button}><a href="#"> Register for a 'Crisis to Hope' Tour! </a></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                    <div className={styles.explanationHolder}>
                        <C2HForm />
                    </div>
            </div>
    )
}

CrisisToHope.propTypes = {
}

export default CrisisToHope
