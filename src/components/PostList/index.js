import React from "react";
import PropTypes from 'prop-types';
import "./index.css";

const PostList = ( {posts} ) => {
    return (
            <div className="postListHolder">
                <ul>
                    {posts.map((post, index) => 
                        <li key={post.id}>
                            {post.title.rendered}
                            <div className="postListIndividual">
                                {post.content.rendered}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostList
