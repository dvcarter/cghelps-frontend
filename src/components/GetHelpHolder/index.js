import React, {Component} from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import GetHelp from "../../components/GetHelp"
import Chat from "../../components/ChatHolder"
import Faq from "../../components/Faq"

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
       const askFaq = this.props.faqInfo.askFaq

       return (
               <Route>
                    <Switch>
                        <PropsRoute exact path="/get-help" component={GetHelp} getHelp={getHelp} />
                        <PropsRoute path="/get-help/chat-with-us" component={Chat} />
                        <PropsRoute path="/get-help/faq" component={Faq} getFaqInfo={askFaq} />
                    </Switch>
                </Route>
        )
   }
}

export default GetHelpHolder
