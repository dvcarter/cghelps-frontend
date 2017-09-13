import React, { Component } from 'react'
import { BrowserRouter as Link, Router, Route, Switch } from "react-router-dom"
import PropTypes from "prop-types"
import styles from './GetInvolved.css'
import GetInvolvedOpts from "../../components/GetInvolvedOpts"
import Volunteer from "../../components/VolunteerApplication"

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
                    </Switch>
                </Route>
        )
    }
}

GetInvolved.propTypes = {
}

export default GetInvolved
