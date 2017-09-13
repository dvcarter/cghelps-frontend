import React, { Component } from 'react'
import PropTypes from "prop-types"
import styles from './DonateOpts.css'
import sty from "../Content/newPage.css"

class Donate extends Component {
    render() {
        let donate = this.props.dataGetter.donateOpts[0];
        return (
            <div>
                  <div
                        className={ sty.hero }
                        style={ {background: `#111 url(${donate.hero}) 50% 50% / cover`}}
                    >
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <h1 className={ sty.heading }>{donate.heroTitle}</h1>
                                <div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {donate.heroSubtitle}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className={styles.bigHolder}>
                <div className= {styles.title}> 3 Easy Ways to Donate</div>
                <div className= {styles.help}>
                    { this.props.dataGetter.donateOpts.map((donates) => (
                        <div className={styles.options}>
                            <img className={styles.svgClass} src={donates.image} />
                            <div className={styles.subtitle}> {donates.title}</div>
                            <div className={styles.descriptions}> {donates.description}</div>
                            <a href={donates.btn.link}>
                                <button className={styles.button}>{donates.btn.label}</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            )
    }
}

Donate.propTypes = {
    donateOpts: PropTypes.array.isRequired
}

export default Donate
