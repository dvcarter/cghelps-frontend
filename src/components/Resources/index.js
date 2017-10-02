import React, { Component } from 'react'
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import ResourceOpts from "../../components/ResourceOpts"

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



class Resources extends Component {
    render () {
        const resourceOpts = this.props.dataGetter.resourceOpts
        return (
            <Route>
                <Switch>
                    <PropsRoute exact path="/resources" component={ResourceOpts} resourceOpts={resourceOpts} />
                    <PropsRoute path="/resources/suicide-prevention-and-survivors" />
                    <PropsRoute path="/resources/youth-and-family" />
                    <PropsRoute path="/resources/victims-of-crime" />
                    <PropsRoute path="/resources/physical-and-mental-health" />
                </Switch>
            </Route>
        ) 
    }
}

export default Resources
