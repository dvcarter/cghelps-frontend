import React, { PropTypes} from 'react';
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


const App = (props) => (
      <Container>
        <Header />
        <Content>
            { props.children }
        </Content>
        <Footer />
      </Container>
)


App.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object
}

export default App;
