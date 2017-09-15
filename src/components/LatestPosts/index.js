import React, {Component} from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from "../../postActions";
import PostList from "../PostList";

{/*class LatestPosts extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }

    render() {
        const posts = this.props.posts;
        
*/}

const LatestPosts = () => {
        return (
                <div className={styles.bigHolder}>
                    <div className={styles.holder}> 
                        <Link to='/posts'>
                            <h3> News & Events </h3>
                        </Link>
                        <div className={styles.postHolder}>
                            {/* {posts.title.rendered} */}
                                <div className={styles.standInImg}> image </div>
                                <div className={styles.textArea}> 
                                    <h4 className={styles.subtitle}>Subtitle to Come </h4>
                                    <div className={styles.descriptionArea}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </div>
                                <Link to="/posts"> Read more </Link>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
{/*
function mapStateToProps(state, ownProps) {
    // state = {posts: [id:1, ..., ] }
    return {
        posts: state.posts[0]
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}
*/}

export default LatestPosts
{/*export default connect(mapStateToProps, mapDispatchToProps)(LatestPosts) 
    */}
