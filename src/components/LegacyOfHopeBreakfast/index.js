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
						      <p> 
                            Join us at our <em>Legacy of Hope Breakfast</em>
                            <br/>Oakland Hills Country Club
                            <br/>May 1<sup>st</sup>, 2018
                            <br/>Doors open at 7:30am
                            <br/>
                            <br/>3951 W. Maple Rd
                            <br/>Bloomfield Hills, MI 48301 
                            </p>
							<p> If you're not redirected to our registration page, please click the link below </p>
				</div>
        </ReactRedirect>
    )
}

LegacyOfHopeBreakfast.propTypes = {
    LegacyOfHopeBreakfast: PropTypes.array.isRequired,
}

export default LegacyOfHopeBreakfast
