import React, {Component, PropTypes} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


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

class App extends Component { 
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Router>
                        <PropsRoute exact path="/" component={HomePage}/>
                        <PropsRoute path="/get-help" component={GetHelp}/>
                        <PropsRoute path="/get-involved" component={GetInvolved}/>
                        <PropsRoute path="/resources" component={Resources} />
                        <PropsRoute path="/donate" component={Donate} />
                        <PropsRoute path="/about-us" component={AboutUs} />
                    </Router>
                </Content>
                <Footer />
            </Container>
        )
    }
}


App.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object
}

export default App;
