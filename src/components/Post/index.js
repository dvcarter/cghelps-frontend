import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./findIndexHelper.js";
import styles from "./index.css"
import sty_post from "./postStyles.css"

class Post extends Component {
    
        render() {
            const { slug } = this.props.match.params;
            const i = this.props.posts.findIndex((post) =>  post.slug === slug)
            const post = this.props.posts[i]

            return (
                <div className={styles.superHolder_Post}>
                    { (post == undefined) ? 
                        <div>
                                <p>This post does not exist.
                                   Please <Link to="/posts">Click here</Link> to see our list of posts.
                                </p>    
                        </div>
                        :
                        <div className={styles.bigHolder}>
                            { (post.acf.hero.sizes === undefined) ? <div className={sty_post.heading_0}> {post.title.rendered}</div> :
                             
                                <div
                                    className={ sty_post.hero_0 } 
                                    style={ {background: `#111 url(${post.acf.hero.sizes.large}) 50% 50% / cover`}}
                                >   
                                    <div className={ sty_post.header_0 }>
                                        <div className={ sty_post.wrapper_0 }>
                                            <div className={ sty_post.heading_0 }>
                                                {post.title.rendered} 
                                            </div>
                                            <div className={ sty_post.lowerTitleHolder_0}>
                                                {/*{getHelps.heroSubtitle} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                            <div className={styles.title}> {post.title.rendered} </div>
                           <div className={styles.holder}>
                            <h4> {post.date.replace(/T.*/, '')} </h4>
                             <div className={styles.description} dangerouslySetInnerHTML={{__html:post.content.rendered}} /> 
                        
                               <Link to="/posts" className={styles.button}> Back to Posts </Link>
                            </div>
                        </div>
                        }
                    </div>
        )
    }
}

export default Post
