import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GetInvolvedOpts from "../../components/GetInvolvedOpts"
import Volunteer from "../../components/VolunteerApplication"
import CrisisToHope from "../../components/CrisisToHope"

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


class GetInvolved extends Component {
    render() {
        const getInvolved = this.props.dataGetter.getInvolved
        return (
                <Route>
                    <Switch>
                        <PropsRoute exact path="/get-involved" component={GetInvolvedOpts} getInvolved={getInvolved} />
                        <PropsRoute path="/get-involved/volunteer" component={Volunteer} />
                        <PropsRoute path="/get-involved/crisis-to-hope" component={CrisisToHope} />
                    </Switch>
                </Route>
        )
    }
}


export default GetInvolved
