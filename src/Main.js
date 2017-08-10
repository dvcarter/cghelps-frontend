import React, {Component, PropTypes} from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import HomePage from "./components/HomePage";
import HelpOpts from "./components/HelpOpts";
import GetHelp from "./components/GetHelp";
import GetInvolved from "./components/GetInvolved";
import Resources from "./components/Resources";
import Donate from "./components/Donate";
import AboutUs from "./components/AboutUs";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import {selectGetHelpOptsInfo} from "./selectors/getHelpOptsSelectors";

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

const mapState = (state) => ({
    getHelpOptsInfo : selectGetHelpOptsInfo(state),
});

class App extends Component { 
    render() {
        const { getHelpOptsInfo } = this.props;
        const { getHelpOpts } = getHelpOptsInfo;

        return (
        <Router>
            <Container>
                <Header />
                <Content>
                    <PropsRoute exact path="/" component={HomePage} dataGetter={getHelpOptsInfo}>
                    </PropsRoute>
                    <Route path="/get-help" component={GetHelp}/>
                    <Route path="/get-involved" component={GetInvolved}/>
                    <Route path="/resources" component={Resources} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/posts" component={Posts} />
                </Content>
                <Footer />
            </Container>
        </Router>
        )
    }
}


App.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object
}

export default connect(mapState)(App);
