import React, { Component } from 'react'
import {Link, Route } from "react-router-dom"
import PropTypes from "prop-types"
import styles from './GetInvolved.css'
import sty from "../Content/newPage.css"

const GetInvolvedOpts = ( {getInvolved} ) => {
        let getInv = getInvolved[0];
        return (
                <Route>
                <div>
                   <div
                        className={ sty.hero } 
                        style={ {background: `#111 url(${getInv.hero}) 50% 50% / cover`}}
                    >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <h1 className={ sty.heading }>{getInv.heroTitle}</h1>
                                <div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {getInv.heroSubtitle}
                                    </h4>
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
                                <img className={styles.imgs} src={involver.image}/>
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
            </Route>
        )
    }

GetInvolvedOpts.propTypes = {
}

export default GetInvolvedOpts
