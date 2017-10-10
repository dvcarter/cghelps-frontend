import React, {Component} from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import GetHelp from "../../components/GetHelp"
import Chat from "../../components/ChatHolder"

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

class GetHelpHolder extends Component {
   render() {
       const getHelp = this.props.dataGetter.getHelp
       return (
               <Route>
                    <Switch>
                        <PropsRoute exact path="/get-help" component={GetHelp} getHelp={getHelp} />
                        <PropsRoute path="/get-help/chat-with-us" component={Chat} />
                    </Switch>
                </Route>
        )
   }
}

export default GetHelpHolder
