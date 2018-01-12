import React, { PropTypes } from 'react'
import styles from "./DocumentHolder.css"

const Governance = ({ getGovernanceInfo }) => {
    return (
            <div className={styles.superHolder}>
                <div className={styles.title}> Governance </div>
            <div className={styles.holder}>
                {getGovernanceInfo.map((dochold) => (
                        <div className={styles.options}>
                            <h3 className={styles.subtitle}> {dochold.subtitle}</h3>
                            <div className={styles.description}> {dochold.description}</div>
                            <a href={dochold.btn0.link} className={styles.docLink}>
                            
                                <div>
                                    {dochold.btn0.label}
                                </div>
                            </a>
                            <a href={dochold.btn1.link} className={styles.docLink}>
                                <div> 
                                    {dochold.btn1.label}
                                </div>
                            </a>
                        </div>
                ))}
                </div>
            </div>
    )
}

Governance.propTypes = {
    getGovernanceInfo: PropTypes.array.isRequired,
}

export default Governance
