import React, { PropTypes, Component } from 'react'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'
import './findHelper.js'
import sty from "../Content/newPage.css"

export default class GetHelp extends Component {
    render() {
        let getHelps = this.props.dataGetter.getHelp[0];
        return ( 
                <div>
                 <div
                   className={ sty.hero } 
                    style={ {background: `#111 url(${getHelps.hero}) 50% 50% / cover`}}
                 >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <h1 className={ sty.heading }>{getHelps.heroTitle}</h1>
                                <div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {getHelps.heroSubtitle}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.title}>
                            <h1> Help is here</h1>
                    </div>
                    <div className={ styles.holdMoreTex}>
                        {this.props.dataGetter.getHelp.map((getHelp) => (
                            <MoreText getHelp={getHelp} key={getHelp.id}/>
                        ))}
                    </div>
                    <img className={styles.imgs} src={this.props.dataGetter.getHelp.image} />
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
                                        <img className={styles.imgs} src={getHelp.getHelp.image}/>
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
