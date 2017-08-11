import React, {Component} from "react";
import HelpOpts from "../HelpOpts";

class HomePage extends Component {
    render() {
        return (

            <div>
                <p> This is the homepage </p>
                 <div className="bigHolder">
                    <div className="title"> Get Help</div>
                    {/* <hr className={styles.topline} /> */}
                    <div className="help">
                        {/*<HelpOpts dataGetter={this.props}/>*/}
                         { this.props.dataGetter.getHelpOpts.map((helps, i) => (
                            <div className="options">
                                <img className="svgClass" src={helps.image} />
                                <div className="subtitle"> {helps.title}</div>
                                <div className="descriptions"> {helps.description}</div>
                                <a href={helps.btn.link}>
                                    <button className="button">{helps.btn.label}</button>
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

