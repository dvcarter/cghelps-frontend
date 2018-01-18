import React from 'react'
import {Link} from "react-router-dom"
import styles from './GetInvolved.css'
import sty from "./getInvolvedHero.css"

const GetInvolvedOpts = ( {getInvolved} ) => {
        let getInv = getInvolved[0];
        return (
                <div className={styles.superHolder}>
                   <div
                        className={ sty.hero } 
                        style={ {background: `#111 url(${getInv.hero}) 50% 50% / cover`}}
                    >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <div className={ sty.heading }>
                                    <div className={sty.textBox}>
                                        <div className={sty.purpleTitle}> Get Involved </div>
                                        <p>
                                            Take a tour of our Resource & Crisis Center to learn how you can <em> help move people from crisis to hope. </em></p>
                                        <div className={sty.datePlacement}>
                                                <ul> 
                                                    <li> Tour Dates:</li>
                                                    <li> February 6<sup>th</sup> 6-7pm </li>
                                                    <li> February 20<sup>th</sup> 9-10am </li>
                                                </ul>
                                        </div>
                                        <button className={sty.button}><Link to="/get-involved/crisis-to-hope"> Register for a 'Crisis to Hope' Tour! </Link></button>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.title}>
                        Give a Hand
                    </div>
                    <div className={styles.holder}>
                        {getInvolved.map((involver) => (
                            <div className={styles.options}>
                                <img className={styles.imgs} src={involver.image} alt="" />
                                <div className={styles.topics}>
                                    <h3 className={styles.subtitle}> {involver.subtitle} </h3>
                                    <div className={styles.description}>{involver.description} </div>
                                </div>
                                    <a href={`/get-involved/${involver.btn.link} `}>
                                        <button className={styles.button}>   
                                            {involver.btn.label}
                                        </button>
                                    </a>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }

GetInvolvedOpts.propTypes = {
}

export default GetInvolvedOpts
