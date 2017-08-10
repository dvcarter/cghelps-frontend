import React, {Component} from "react";
import HelpOpts from "../HelpOpts";

class HomePage extends Component {
    render() {
        return (

            <div>
                <p> This is the homepage </p>
                        <div>
                        {/*<HelpOpts dataGetter={this.props}/>*/}
                        {this.props.dataGetter.getHelpOpts.map((item, i) => {
                                return (
                                    <div> {item.description}</div>
                                )
                                                                }) }
                        </div>
            </div>
        )
    }

}

export default HomePage

