import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../../postActions";
import PostList from "../PostList";
import Post from "../Post";

class Posts extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }

    render() {
        return (
        <div>
            <h2> This is where posts go </h2>
            <Switch>
                <Route exact path='/posts' component={PostList} />
                <Route path='/posts/:slug' component={Post} />
            </Switch>
            <PostList posts={this.props.posts}/>
        </div>

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
