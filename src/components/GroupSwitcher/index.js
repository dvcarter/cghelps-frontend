import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GroupOpts from "../../components/GroupOpts"
/*import PreventionSurvivorGroup from "../../components/PreventionSurvivorGroup"
import YouthGroup   from "../../components/YouthGroup"
import VictimsGroup from "../../components/VictimsGroup"
import HealthGroup from "../../components/HealthGroup"*/

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


class GroupSwitcher extends Component {
    render() {
        const suicidePrevention = this.props.dataGetter.suicidePrevention
        const youthAndFamily = this.props.dataGetter.youthAndFamily
        const victimsOfCrime = this.props.dataGetter.victimsOfCrime
        const physicalAndMentalHealth = this.props.dataGetter.physicalAndMentalHealth

        return (
                <Route>
                    <Switch>
                        <PropsRoute exact path="/groups" component={GetInvolvedOpts} getInvolved={getInvolved} />
                        <PropsRoute path="/get-involved/volunteer" component={Volunteer} />
                        <PropsRoute path="/resources/suicide-prevention" component={GroupOpts} getGroupInfo={suicidePrevention} />
                        <PropsRoute path="/resources/youth-and-family" component={GroupOpts} getGroupInfo={youthAndFamily} />
                        <PropsRoute path="/resources/victims-of-crime" component={GroupOpts} getGroupInfo={victimsOfCrime} />
                        <PropsRoute path="/resources/physical-and-mental-health" component={GroupOpts} getGroupInfo={physicalAndMentalHealth} />
                    </Switch>
                </Route>
        )   
    }   
}


export default GroupSwitcher
