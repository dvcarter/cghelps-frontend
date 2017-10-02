import React  from 'react'
import PropTypes from "prop-types"
import styles from './ResourceOpts.css'
import sty from "./resourceHero.css"

const ResourceOpts = ( {resourceOpts} ) => {
        let resource = resourceOpts[0];
        return (
                <div className={styles.superHolder}>
                   <div
                        className={ sty.hero } 
                        style={ {background: `#111 url(${resource.hero}) 50% 50% / cover`}}
                    >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <div className={ sty.heading }>
                                    <div className={sty.textBox}>
                                        <div className={sty.purpleTitle}> Find a Community </div>
                                        <div className={ sty.lowerTitleHolder}>
                                            Find a support group that focuses on your emotional and mental needs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>
                        Find Support
                    </div>

                    <div className={styles.holder}>
                        {resourceOpts.map((resourcer) => (
                            <div className={styles.options}>
                                    <img className={styles.imgs} src={resourcer.image} alt=""/>
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

ResourceOpts.propTypes = {
    resourceOpts: PropTypes.array.isRequired,
}

export default ResourceOpts
