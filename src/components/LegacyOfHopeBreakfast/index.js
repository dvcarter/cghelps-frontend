import React from 'react'
import PropTypes from "prop-types"
import styles from './legacyOfHopeGeneral.css'
import sty from "./legacyOfHope.css"
import legacy from './legacyOfHope.png'

const LegacyOfHopeBreakfast = () => {
    return (
		<div className={ styles.superHolder1} >
                 <div
                   className={ sty.hero_1_0 } 
                    style={ {background: `#111 url() 5% 5% / cover`}}
                 >   
                        <div className={ sty.header_1_0 }>
                            <div className={ sty.wrapper_1_0 }>
                                <div className={ sty.heading_1_0 }>
                                    <div className={sty.textBox_1_0}>
                                        <div className={sty.purpleTitle_1_0}> Get Help </div>
                                        <div className={ sty.lowerTitleHolder_1_0}>
                                            Call us at 1.800.231.1127 to get help right away.
                                            Our Resource & Crisis Helpline is available 24/7.
                                        </div>
                                    </div>
                                </div>
        {/*<button className={sty.button_1_0}><a href="tel:18002311127">Call Now </a></button>*/}
                            </div>
                        </div>
                    </div>
                        <div className={styles.title}>
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
					</div>

    )
}

LegacyOfHopeBreakfast.propTypes = {
    LegacyOfHopeBreakfast: PropTypes.array.isRequired,
}

export default LegacyOfHopeBreakfast
