import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.global.css";
import "./highlight.global.css";
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import HomePage from "./components/HomePage";
import Success from "./components/VideoHolder";
import GetHelpHolder from "./components/GetHelpHolder";
import Chat from "./components/ChatHolder";
import Locations from "./components/Locations";
import GetInvolved from "./components/GetInvolved";
import CrisisToHope from "./components/CrisisToHope";
import Resources from "./components/Resources";
import Donate from "./components/Donate";
import AboutUsHolder from "./components/AboutUsHolder";
import Posts from "./components/Posts";
import Accreditation from "./components/Accreditation";
import Volunteer from "./components/VolunteerPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CodeOfEthics from "./components/CodeOfEthics";
import Copyright from "./components/Copyright";
import TermsOfService from "./components/TermsOfService";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import ThankYou from "./components/ThankYou";
import Thanks from "./components/C2HThankYou";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import {selectGetHelpOptsInfo} from "./selectors/getHelpOptsSelectors";
import {selectGetHelpInfo} from "./selectors/getHelpSelectors";
import {selectLocationInfo} from "./selectors/locationsSelectors";
import {selectGetInvolvedInfo} from "./selectors/getInvolvedSelectors";
import {selectResourceInfo} from "./selectors/resourceSelectors";
import {selectDonateInfo} from "./selectors/donateSelectors";
import {selectAboutInfo} from "./selectors/aboutSelectors";
import {selectPreventionGroupInfo} from "./selectors/preventionSelectors";
import {selectYouthGroupInfo} from "./selectors/youthSelectors";
import {selectVictimGroupInfo} from "./selectors/victimsSelectors";
import {selectHealthGroupInfo} from "./selectors/healthSelectors";
import {selectVideoInfo} from "./selectors/videoSelectors";
import {selectFaqInfo} from "./selectors/faqSelectors";
import {selectGovernanceInfo} from "./selectors/governanceSelectors";

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
    getLocationInfo: selectLocationInfo(state),
    getInvolvedInfo: selectGetInvolvedInfo(state),
    resourceInfo: selectResourceInfo(state),
    donateInfo: selectDonateInfo(state),
    aboutInfo: selectAboutInfo(state),
    preventionInfo: selectPreventionGroupInfo(state),
    youthInfo: selectYouthGroupInfo(state),
    victimInfo: selectVictimGroupInfo(state),
    healthInfo: selectHealthGroupInfo(state),
    videoInfo: selectVideoInfo(state),
    faqInfo: selectFaqInfo(state),
    governanceInfo: selectGovernanceInfo(state)
});

class App extends Component { 
    render() {
        const { 
            getHelpOptsInfo,
            getHelpInfo,
            getLocationInfo,
            getInvolvedInfo,
            resourceInfo,
            donateInfo,
            aboutInfo,
            preventionInfo,
            youthInfo,
            victimInfo,
            healthInfo,
            videoInfo, 
            faqInfo,
            governanceInfo

        } = this.props;

        return (
        <Router>
            <Container>
                <Header />
                <Content>
                    <ScrollToTop>
                    <Switch>
                        <PropsRoute exact path="/" component={HomePage} dataGetter={getHelpOptsInfo} />
                        <PropsRoute path="/success-stories" component={Success} dataGetter={videoInfo} />
                        <PropsRoute path="/get-help" component={GetHelpHolder} dataGetter={getHelpInfo} {...this.props} />
                        <PropsRoute path="/get-help/chat-with-us" component={Chat} />
                        <PropsRoute path="/visit" component={Locations} dataGetter={getLocationInfo} />
                        <PropsRoute path="/get-involved" component={GetInvolved} dataGetter={getInvolvedInfo} />
                        <PropsRoute path="/crisis-to-hope" component={CrisisToHope} dataGetter={getInvolvedInfo} />
                        <PropsRoute path="/resources" component={Resources} dataGetter={resourceInfo} {...this.props} />
                        <PropsRoute path="/donate" component={Donate} dataGetter={donateInfo}>
                        
                        </PropsRoute>
                        <PropsRoute path="/about-us" component={AboutUsHolder} {...this.props} />
                        <PropsRoute path="/posts" component={Posts} />
                        <PropsRoute path="/accreditation" component={Accreditation} />
                        <PropsRoute path="/get-involved/volunteer" component={Volunteer} />
                        <PropsRoute path="/terms-of-service" component={PrivacyPolicy} />
                        <PropsRoute path="/code-of-ethics" component={CodeOfEthics} />
                        <PropsRoute path="/copyright" component={Copyright} />
                        <PropsRoute path="/privacy-policy" component={TermsOfService} />
                        <PropsRoute path="/contact" component={Contact} />
                        <PropsRoute path="/thank-you" component={ThankYou} />
                        <PropsRoute path="/thanks-for-registering" component={Thanks} />
                        <PropsRoute component={NoMatch} />
                    </Switch>
                    </ScrollToTop>
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
