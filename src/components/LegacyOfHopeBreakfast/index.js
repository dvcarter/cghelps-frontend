import React from 'react'
import PropTypes from "prop-types"
import styles from './legacyOfHopeGeneral.css'
import sty from "./legacyOfHope.css"
import legacy from './legacyOfHope2.png'
import ReactRedirect from "react-redirect"

const LegacyOfHopeBreakfast = () => {
    return (
        <ReactRedirect location="https://legacy-of-hope-breakfast-benefit-2018.eventbrite.com">
             <div className={ styles.superHolder1} >
				<div
                   className={ sty.hero_1_0 } 
                    style={ {background: `#111 url(${legacy}) 50% 50% / contain no-repeat`, backgroundColor: `#fff`}}
                 >  
                                            <div className={ sty.header_1_0 }>
                            <div className={ sty.wrapper_1_0 }>
                            </div>
                        </div>
                    </div> 
                            <div className={sty.tinyInfoHold}>
                                <p>Join us at our <em><strong>Legacy of Hope Breakfast </strong></em>
                                 <br/>
                                  at the Oakland Hills Country Club
                                 on May 1<sup>st</sup>, 2018
                                <br/> 
                                 Doors open at <strong>7:30am</strong>
                                 <br/>3951 W. Maple Rd
                                 Bloomfield Hills, MI 48301 
                                <br/>
                            </p>
                            </div>
							 <div className={sty.tinyHolder}>
                                If you're not redirected to our registration page, please click the link below 
                                <button className={sty.button_1_0}><a href="https://www.eventbrite.com/e/legacy-of-hope-breakfast-benefit-2018-tickets-44796387200">Register Here </a></button>
                            </div>
                </div>
        </ReactRedirect>
    )
}

LegacyOfHopeBreakfast.propTypes = {
    LegacyOfHopeBreakfast: PropTypes.array.isRequired,
}

export default LegacyOfHopeBreakfast
