import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../postActions";

const Post = ({posts}) => {
    const i = posts[0].id;
        return (
            <div> 
                <p> another phrase </p>
                    <div key={i}>
                        something here
                           <div key={i}>
                                <h1> { posts[0].title.rendered} </h1>
                                <p> {i} </p>
                           </div>
                           <div> <img src={posts[0].acf.hero.sizes.thumbnail}/></div>
                    </div>
            </div>
        )
    }



export default Post
