import React, { Component } from 'react'
import PropTypes from "prop-types"
import styles from './ResourceOpts.css'
import sty from "../Content/newPage.css"

class Resources extends Component {
    render () {
        let resource = this.props.dataGetter.resourceOpts[0];
        return (
                <div>
                   <div
                        className={ sty.hero } 
                        style={ {background: `#111 url(${resource.hero}) 50% 50% / cover`}}
                    >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <h1 className={ sty.heading }>{resource.heroTitle}</h1>
                                <div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {resource.heroSubtitle}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
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
