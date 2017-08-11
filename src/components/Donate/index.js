import React, { Component } from 'react'
import PropTypes from "prop-types"
import styles from './DonateOpts.css'

class Donate extends Component {
    render() {
        return (

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
            )
    }
}

Donate.propTypes = {
    donateOpts: PropTypes.array.isRequired
}

export default Donate
