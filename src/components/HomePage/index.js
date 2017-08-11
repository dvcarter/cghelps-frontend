import React, {Component} from "react";
import styles from  "../HelpOpts/HelpOpts.css";

class HomePage extends Component {
    render() {
        return (

            <div>
                <p> This is the homepage </p>
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

