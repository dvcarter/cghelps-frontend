import React, {Component} from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import AboutUs from "../../components/AboutUs"
import OurStory from "../../components/OurStory"

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
            React.createElement(component, finalProps)
    );
}

const PropsRoute = ({ component, ...rest}) => {
    return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
    );
}

class AboutUsHolder extends Component {
   render() {
       return (
               <Route>
                    <Switch>
                        <PropsRoute exact path="/about-us" component={AboutUs}/>
                        <PropsRoute path="/about-us/our-story" component={OurStory} />
                    </Switch>
                </Route>
        )
   }
}

export default AboutUsHolder
