import React, {  Component } from 'react'
import PropTypes from "prop-types"
import styles from './GetHelp.css'
//import MoreText from './../MoreText'
import './findHelper.js'
import sty from "./getHelpHero.css"

export default class ProgramList extends Component {
    render() {
        const getHelp = this.props.dataGetter.getHelp;
        return ( 
                <div className={ styles.superHolder1} >
                        <div className={styles.title}>
                            List of Programs and Services
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
ProgramList.propTypes = {
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
                                    {!this.state.isHidden && <div className={styles.moreText}>
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
                            </div>
                </div>
        )
    }
}   
MoreText.propTypes = {
    children: PropTypes.array.isRequired,
}
