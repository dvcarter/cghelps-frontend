import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../../postActions";
import PostList from "../PostList";
import Post from "../Post";
import styles from "./index.css";
import ScrollToTop from "../ScrollToTop";

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


class Posts extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }
    

    render() {
            return (
                <Router>
                <ScrollToTop>
                    <div className={styles.posts}>
                    <Switch>
                            <PropsRoute exact path='/posts' component={PostList} posts={this.props.posts} /> 
                            {/* <Route path='/posts/:slug' component={Post} {...this.props} /> */}
                            <Route path={`${this.props.match.url}/:slug`} render={(props) => (
                                <Post {...this.props} {...props} />
                                )} />
                    </Switch>
                </div>
            </ScrollToTop>
            </Router>
            )
    }
}

function mapStateToProps(state, ownProps) {
    // state = {posts: [id:1, ..., ] }
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
