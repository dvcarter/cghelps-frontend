import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import "./index.global.css";
import "./highlight.global.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


class App extends Component { 
    {/*
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }*/}
    componentDidMount() {
        let dataURL = "http://cghelps.dev/wp-json/wp/v2/posts?"
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }
    
    render() {
        let posts = this.state.posts.map((post, index) => {
            return <div key={index}>
                {post.id}
                {post.date}
                {post.title.rendered}
                {post.content.rendered}
            </div>
        });
        return (
            <Container>
                <Header />
                <Content>
                    <div>
                        {posts}
                    </div>
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
