import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../postActions";
import {Link} from "react-router-dom";
import "./findIndexHelper.js";
import styles from "./index.css"

class Post extends Component {
    
        render() {
            const { slug } = this.props.match.params;
            const i = this.props.posts.findIndex((post) =>  post.slug === slug)
            const post = this.props.posts[i]
            return (
                <div>
                        <div>
                            <h2> {post.title.rendered} </h2>
                           <div>
                           {/* <h1> { posts[0].title.rendered} </h1> */}
                           </div>
                           <div> 
                             <img className={styles.imgs} src={post.acf.hero.sizes.large}/>
                             <div className={styles.description} dangerouslySetInnerHTML={{__html:post.content.rendered}} /> 
                             <div> {post.categories} </div>
                           </div>
                        </div>
                        <div>
                               <Link to="/posts"> Back to Posts </Link>
                        </div>
                    </div>
        )
    }
}

export default Post
