import React, { PropTypes } from 'react'
import styles from './FaqQ.css'

const FaqQ = ({ getFaqInfo }) => {
    return (
            <div className={styles.superHolder}>
                <div className={styles.title}>
                    Frequently Asked Questions
                </div>
                <div className={styles.holder}>
                    {getFaqInfo.map((faqr) => (
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.question}> {faqr.question}</h2>
                                    <div className={styles.description}> {faqr.description} </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    )

}

FaqQ.propTypes = {
    askFaq: PropTypes.array.isRequired,
}

export default FaqQ
