import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../postActions";

const Post = (props) => {
        return (
            <div> 
                <p> another phrase </p>
                    <div key ={props.post.id}>
                        something here
                           <div> <img src={props.post.acf.hero.sizes.thumbnail}/></div>
                    </div>
            </div>
        )
    }



export default Post
