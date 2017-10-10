import React, { Component } from 'react'
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import ResourceOpts from "../../components/ResourceOpts"
import GroupOpts from "../../components/GroupOpts"

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
        const suicidePrevention = this.props.preventionInfo.suicidePrevention
        const youthAndFamily = this.props.youthInfo.youthAndFamily
        const victimsOfCrime = this.props.victimInfo.victimsOfCrime
        const physicalAndMentalHealth = this.props.healthInfo.physicalAndMentalHealth
        
        return (
            <Route>
                <Switch>
                    <PropsRoute exact path="/resources" component={ResourceOpts} resourceOpts={resourceOpts} />
                    <PropsRoute path="/resources/suicide-prevention" component={GroupOpts} getGroupInfo={suicidePrevention} />
                    <PropsRoute path="/resources/youth-and-family" component={GroupOpts} getGroupInfo={youthAndFamily} />
                    <PropsRoute path="/resources/victims-of-crime" component={GroupOpts} getGroupInfo={victimsOfCrime} />
                    <PropsRoute path="/resources/physical-and-mental-health" component={GroupOpts} getGroupInfo={physicalAndMentalHealth} />
                </Switch>
            </Route>
        ) 
    }
}

export default Resources
