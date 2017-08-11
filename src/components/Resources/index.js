import React, { Component } from 'react'
import PropTypes from "prop-types"
import styles from './ResourceOpts.css'


class Resources extends Component {
    render () {
        return (
                <div>
                    <div className={styles.title}>
                        Find Support
                    </div>
                    <div className={styles.holder}>
                        {this.props.dataGetter.resourceOpts.map((resourcer) => (
                            <div className={styles.options}>
                                    <img className={styles.imgs} src={resourcer.image}/>
                                    <div className={styles.topics}>
                                        <h3 className={styles.subtitle}>{ resourcer.subtitle }</h3>
                                        <div className={styles.description}>{resourcer.description}</div>
                                        <a className={styles.resourcer} href = {resourcer.btn.link}> {resourcer.btn.label} </a>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
        ) 
    }
}

Resources.propTypes = {
    resourceOpts: PropTypes.array.isRequired,
}

export default Resources
