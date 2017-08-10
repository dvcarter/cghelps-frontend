import React, { PropTypes } from 'react'
import styles from './HelpOpts.css'

const HelpOpts = ({ info, i }) => {
        return (

            <div className={styles.bigHolder}>
                <div className= {styles.title}> Get Help</div>
                {/* <hr className={styles.topline} /> */}
                <div className= {styles.help}>
                    { info.map((helps) => (
                        <div className={styles.options}>
                            <img className={styles.svgClass} src={helps.image} />
                            <div className={styles.subtitle}> {helps.title}</div>
                            <div className={styles.descriptions}> {helps.description}</div>
                            <a href={helps.btn.link}>
                                <button className={styles.button}>{helps.btn.label}</button>
                            </a>
                        </div>
                    ))}
                </div>
                {/*<hr className={styles.bottomline}/>*/}
            </div>
            )
}

HelpOpts.propTypes = {
    info: PropTypes.array.isRequired,
}

export default HelpOpts;
