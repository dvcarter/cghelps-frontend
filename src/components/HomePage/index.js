import React, {Component} from "react";
import styles from  "../HelpOpts/HelpOpts.css";
import Hero from "../Hero";
import sty from "../Content/newPage.css";

class HomePage extends Component {
    render() {

        let getHelps = this.props.dataGetter.getHelpOpts[0];
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
                 <div className={styles.bigHolder}>
                    <div className={styles.title}> Get Help</div>
                    {/* <hr className={styles.topline} /> */}
                    <div className={styles.help}>
                        {/*<HelpOpts dataGetter={this.props}/>*/}
                         { this.props.dataGetter.getHelpOpts.map((helps, i) => (
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
                </div>
            </div>
        )
    }

}

export default HomePage

