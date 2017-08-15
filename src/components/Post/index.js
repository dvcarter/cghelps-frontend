import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../postActions";

class Post extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }

    render() {
        const i = this.props.posts;
        return (
            <div> 
                <p> This is where posts go </p>
                    <div key ={i}>
                        something here
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch)}
}

Post.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
