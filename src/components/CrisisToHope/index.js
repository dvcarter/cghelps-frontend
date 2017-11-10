import React from 'react'
import PropTypes from "prop-types"
import styles from "./CrisisToHope.css"
import sty from "./crisisToHopeHero.css"
import GetInvolved from "../../content/assets/getinvolved.jpg"

const CrisisToHope = () => {
    return (
            <div className={styles.superHero}>
                       <div
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
                                                    <li> October 24<sup>th</sup> 9-10am </li>
                                                    <li> November 7<sup>th</sup> 6-7pm</li>
                                                    <li> November 21<sup>st</sup> 9-10am </li>
                                                </ul>
                                        </div>
                                        <button className={sty.button}><a href="#"> Register for a 'Crisis to Hope' Tour! </a></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>            
                    <div>
                        <p>
                            We invite you to get to know Common Ground a little better!

The presentation consists of inspirational stories that get to the heart of Common Ground's key impact areas: Responding to Crisis, Providing Safety and Advocacy, and Building Communities of Support.

You will come away with a better understanding of how critical Common Ground is to our community. We Are not asking for contributions, but we will follow up with you a few days after the presentation to gather comments and feedback. It will easily be the best hour of your day.

                        </p>
                    </div>
            </div>
    )
}

CrisisToHope.propTypes = {
}

export default CrisisToHope
