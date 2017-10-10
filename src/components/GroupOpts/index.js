import React from 'react'
import PropTypes from "prop-types"
import styles from './GroupOpts.css'
import sty from "./groupHero.css"

const GroupOpts = ({ getGroupInfo }) => {
    return (
            <div className={styles.superHolder}>
                <div 
                    className={sty.hero3}
                    style={ {background: `#111 url(${getGroupInfo[0].hero}) -10% -10% / cover no-repeat`} }
                >
                    <div className={sty.header3}>
                        <div className={sty.wrapper3}>
                            <div className={sty.heading3}>
                                <div className={sty.textBox3}>
                                    <div className={sty.purpleTitle3}> {getGroupInfo[0].bigTitle } </div>
                                    <div className={sty.lowerTitleHolder3}>
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
