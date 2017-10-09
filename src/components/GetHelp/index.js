import React, {  Component } from 'react'
import PropTypes from "prop-types"
import styles from './GetHelp.css'
//import MoreText from './../MoreText'
import './findHelper.js'
import sty from "./getHelpHero.css"

export default class GetHelp extends Component {
    render() {
        let getHelps = this.props.getHelp[0];
        const getHelp = this.props.getHelp;
        return ( 
                <div className={ styles.superHolder1} >
                 <div
                   className={ sty.hero1 } 
                    style={ {background: `#111 url(${getHelps.hero}) 50% 50% / cover`}}
                 >   
                        <div className={ sty.header1 }>
                            <div className={ sty.wrapper1 }>
                                <div className={ sty.heading1 }>
                                    <div className={sty.textBox1}>
                                        <div className={sty.purpleTitle1}> Get Help </div>
                                        <div className={ sty.lowerTitleHolder1}>
                                            Call us at 1.800.231.1127 to get help right away.
                                            Our Resource & Crisis Helpline is available 24/7.
                                        </div>
                                    </div>
                                </div>
                                <button className={sty.button1}><a href="tel:18002311127">Call Now </a></button>
                            </div>
                        </div>
                    </div>
                        <div className={styles.title}>
                            Help is here
                        </div>
                        <div className={ styles.holdMoreText}>
                            {getHelp.map((getHelp) => (
                                <MoreText getHelp={getHelp} key={getHelp.id}/>
                            ))}
                        </div>
                        <img className={styles.imgs} src={getHelp.image} alt="" />
                    </div>
               )
    }
}
GetHelp.propTypes = {
    getHelp: PropTypes.array.isRequired,
}

class MoreText extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: false
        }
        this.toggleHidden = this.toggleHidden.bind(this);
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }
    // onClick={ () => this.toggleHidden() 
    render() {
        const getHelp  = this.props;
        return (
                <div key = { getHelp.id } className={styles.holder}>
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.subtitle}>{getHelp.getHelp.subtitle}</h2>
                                    <div className={styles.description}>{getHelp.getHelp.description}</div>
                                    <div className={styles.learnMore} onClick={ this.toggleHidden }> Learn More >> </div>
                                    {this.state.isHidden && <div className={styles.moreText}>
                                                                <h3> {getHelp.getHelp.subsubtitle1}</h3>
                                                                <div> {getHelp.getHelp.subdescription1}</div>
                                                                <h3> {getHelp.getHelp.subsubtitle2}</h3>
                                                                <div> {getHelp.getHelp.subdescription2}</div>
                                                                <h3> {getHelp.getHelp.subsubtitle3}</h3>
                                                                <div> {getHelp.getHelp.subdescription3}</div>
                                                                <h3> {getHelp.getHelp.subsubtitle4}</h3>
                                                                <div> {getHelp.getHelp.subdescription4} </div>
                                                                <h3> {getHelp.getHelp.subsubtitle5}</h3>
                                                                <div> {getHelp.getHelp.subdescription5}</div>
                                                                <h3>{getHelp.getHelp.subsubtitle6}</h3>
                                                                <div>{getHelp.getHelp.subdescription6}</div>
                                                                <h3>{getHelp.getHelp.subsubtitle7}</h3>
                                                                <div>{getHelp.getHelp.subdescription7}</div>
                                                            </div>
                                    }
                                    </div>
                                    <a href={getHelp.getHelp.btn.link} className={styles.onlybtn}>
                                        <img className={styles.imgs} src={getHelp.getHelp.image} alt="" />
                                        {getHelp.getHelp.btn.label}
                                    </a>
                            </div>
                </div>
        )
    }
}   
MoreText.propTypes = {
    children: PropTypes.array.isRequired,
}
