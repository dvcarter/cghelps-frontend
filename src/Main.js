import React, {Component, PropTypes} from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
import Post from "./components/Post";
import Accreditation from "./components/Accreditation";
import Volunteer from "./components/VolunteerPage";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";

import {selectGetHelpOptsInfo} from "./selectors/getHelpOptsSelectors";
import {selectGetHelpInfo} from "./selectors/getHelpSelectors";
import {selectGetInvolvedInfo} from "./selectors/getInvolvedSelectors";
import {selectResourceInfo} from "./selectors/resourceSelectors";
import {selectDonateInfo} from "./selectors/donateSelectors";
import {selectAboutInfo} from "./selectors/aboutSelectors";

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
    getHelpInfo: selectGetHelpInfo(state),
    getInvolvedInfo: selectGetInvolvedInfo(state),
    resourceInfo: selectResourceInfo(state),
    donateInfo: selectDonateInfo(state),
    aboutInfo: selectAboutInfo(state),
});

class App extends Component { 
    render() {
        const { 
            getHelpOptsInfo,
            getHelpInfo,
            getInvolvedInfo,
            resourceInfo,
            donateInfo,
            aboutInfo
        } = this.props;
        const { getHelpOpts } = getHelpOptsInfo;

        return (
        <Router>
            <Container>
                <Header />
                <Content>
                    <Switch>
                        <PropsRoute exact path="/" component={HomePage} dataGetter={getHelpOptsInfo} />
                        <PropsRoute path="/get-help" component={GetHelp} dataGetter={getHelpInfo} />
                        <PropsRoute path="/get-involved" component={GetInvolved} dataGetter={getInvolvedInfo} />
                        <PropsRoute path="/resources" component={Resources} dataGetter={resourceInfo} />
                        <PropsRoute path="/donate" component={Donate} dataGetter={donateInfo}/>
                        <PropsRoute path="/about-us" component={AboutUs} dataGetter={aboutInfo}/>
                        <PropsRoute path="/posts" component={Posts} />
                        <PropsRoute path="/accreditation" component={Accreditation} />
                        <PropsRoute path="/get-involved/volunteer" component={Volunteer} />
                        {/*<PropsRoute path="/contact" component={Contact} />
                        <PropsRoute path="/code-of-ethics" component={LargeText}/>
                        <PropsRoute path="/t-o-s" component={LargeText} />
                        <PropsRoute path="/copyright" component={Copyright} /> */}
                        <PropsRoute component={NoMatch} />
                    </Switch>
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
