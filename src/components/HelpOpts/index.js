import React, { Component, PropTypes } from 'react'
import styles from './HelpOpts.css'

class HelpOpts extends Component {
        render() {
            return (
    
                <div className={styles.bigHolder}>
                    <div className= {styles.title}> Get Help</div>
                    {/* <hr className={styles.topline} /> */}
                    <div className= {styles.help}>
                        { this.props.getHelpOpts.map((helps, i) => (
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
                {   /*<hr className={styles.bottomline}/>*/}
                </div>
            )
        }
}

HelpOpts.propTypes = {
    getHelpOpts: PropTypes.array.isRequired,
}

export default HelpOpts;
