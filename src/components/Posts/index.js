import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../../postActions";
import PostList from "../PostList";
import Post from "../Post";
import styles from "./index.css";

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
        const posts = this.props.posts
        return (
        <Router>
            <div className={styles.posts}>
                <Switch>
                    <PropsRoute exact path='/posts' component={PostList} posts={posts} />
                    <PropsRoute path='/posts/:slug' component={Post} posts={posts}/> 
                </Switch>
            </div>
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
