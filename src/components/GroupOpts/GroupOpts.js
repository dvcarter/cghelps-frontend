import React from 'react'
import PropTypes from "prop-types"
import styles from './GroupOpts.css'

const GroupOpts = ({ getGroupInfo }) => {
    return (
            <div>
                <div className={styles.holder}>
                    {getGroupInfo.map((grouper) => (
                            <div className={styles.options}>
                                <h3 className={styles.subtitle}>{grouper.subtitle}</h3>
                                <div className={styles.topics}>
                                    <h4 className={styles.subsubtitle}>{grouper.sub.subsubtitle}</h4>
                                    <div className={styles.description}>{grouper.sub.description}</div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    )
}

GroupOpts.propTypes = {
    getGroupInfo: PropTypes.array.isRequired,
}

export default GroupOpts
