import React, {Component, PropTypes} from 'react';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import GetHelp from "./components/GetHelp/GetHelp";
import Footer from "./components/Footer";
import {selectGetHelpInfo} from "./getHelpSelectors";

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
            React.createElement(component, finalProps)
    );
}


const PropsRoute = ({ component, ...rest}) => {
    return (
            <Route {...rest} render={routeProps =>{ 
                return renderMergedProps(component, routeProps, rest);
            }}/>
    );  
}

const mapState = (state) => ({
    getHelpInfo : selectGetHelpInfo(state)
});

class Main extends Component { 
    render() {
        const { getHelpInfo } = this.props;
        const { getHelp } = getHelpInfo;
        return (
            <Router>
                <Container>
                    <Header/>
                    <Content>
                        <PropsRoute exact path="/" component={GetHelp} dataGetter={getHelp}/>
                    </Content>
                    <Footer />
                </Container>
            </Router>
        )
    }
}


Main.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object
}

export default connect(mapState)(Main);
