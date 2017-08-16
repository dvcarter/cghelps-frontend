import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../postActions";

const Post = () => {
    const {items=[]} = this.props;
    const i = this.props.params.id;
        return (
            <div> 
                <p> another phrase </p>
                    <div key={i}>
                        something here
                           <div> <img src={items[i].acf.hero.sizes.thumbnail}/></div>
                    </div>
            </div>
        )
    }



export default Post
