import React from 'react'
import PropTypes from "prop-types"
import styles from './GroupOpts.css'
import sty from "./groupHero.css"

const GroupOpts = ({ getGroupInfo }) => {
    return (
            <div className={styles.superHolder}>
                <div 
                    className={sty.hero}
                    style={ {background: `#111 url(${getGroupInfo[0].hero}) 50% 50% / cover`}}
                >
                    <div className={sty.header}>
                        <div className={sty.wrapper}>
                            <div className={sty.heading}>
                                <div className={sty.textBox}>
                                    <div className={sty.purpleTitle}> {getGroupInfo[0].bigTitle } </div>
                                    <div className={sty.lowerTitleHolder}>
                                        {getGroupInfo[0].lowerTitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
