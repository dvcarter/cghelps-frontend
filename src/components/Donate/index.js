import React, { Component } from 'react'
import PropTypes from "prop-types"
import styles from './DonateOpts.css'
import sty from "./donateHero.css"
import SustainOpts from "../SustainOpts"

class Donate extends Component {
    render() {
        let donate = this.props.dataGetter.donateOpts[0];
        return (
            <div className={styles.donationHolder}>
                  <div
                        className={ sty.hero }
                        style={ {background: `#111 url(${donate.hero}) 50% 50% / cover`}}
                    >
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <div className={ sty.heading }>
                                        <div className={sty.textBox}>
                                            <h1> Donate </h1>
                                            <ul><em> Your gift can help us:</em>
                                                <li>
                                                    Expand the hours of hour Text and Chat Helpline services
                                                </li>
                                                <li> Offer more of our specialized Support Groups </li>
                                                <li> Add a Resource & Crisis Center location in southern Oakland County </li>
                                            </ul>
                                            <button className={sty.button}><a href="https://commongroundhelps.z2systems.com/np/clients/commongroundhelps/donation.jsp?campaign=1096&"> Give Now </a></button>
                                        </div>
                                     
                                </div>
                                {/*<div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {donate.heroSubtitle}
                                    </h4>
                                </div>*/}
                            </div>
                        </div>
                    </div>
            <div className={styles.bigHolder}>
                <div className= {styles.title}> 3 Easy Ways to Donate</div>
                <div className= {styles.help}>
                    { this.props.dataGetter.donateOpts.map((donates) => (
                        <div className={styles.optionsHolder}>
                            <div className={styles.options}>
                                <img className={styles.svgClass} src={donates.image} />
                                <div className={styles.subtitle}> {donates.title}</div>
                                <div className={styles.descriptions}> {donates.description}</div>
                                <a href={donates.btn.link}>
                                    <button className={styles.button}>{donates.btn.label}</button>
                                </a>
                            </div>
                            <div className={styles.newLine} />
                        </div>
                    ))}
                </div>
            </div>
            <SustainOpts />
            <div className={styles.line} />
            <div className={styles.line} />
        </div>
            )
    }
}

Donate.propTypes = {
    donateOpts: PropTypes.array.isRequired
}

export default Donate
