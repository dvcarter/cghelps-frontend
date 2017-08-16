import React from "react";
import PropTypes from 'prop-types';
import styles from "./index.css";
import { Link } from "react-router-dom";

const PostList = ( {posts} ) => {
    return (
            <div className="postListHolder">
                <div className={styles.title}>
                    Posts
                </div>
                <div className={styles.holder}>
                    {posts.map((post, index) => 
                        <div className={styles.options} key={post.id}>
                                <img className={styles.img} src={post.acf.hero.sizes.thumbnail} alt="nothing here" />
                            <div className={styles.topics}>
                                <h3 className={styles.subtitle}>{post.title.rendered}</h3>
                                <div className={styles.description}>{post.content.rendered}</div>
                                <Link to={`/posts/${post.slug}`} className={styles.resourcer}>
                                    {post.slug}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostList
