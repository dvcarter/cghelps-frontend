import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../../postActions";
import PostList from "../PostList";

class Posts extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }

    render() {
        return (
        <div>
            <p> This is where the posts go </p>
            <div>
            <PostList posts={this.props.posts} />
            </div>
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
