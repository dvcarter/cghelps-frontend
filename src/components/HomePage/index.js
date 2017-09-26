import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from  "../HelpOpts/HelpOpts.css";
import Hero from "../Hero";
import LatestPosts from "../LatestPosts";
import Testimonials from "../Testimonials";
import Impact from "../Impact";
import sty from "../Content/newPage.css";
import lineStyles from "./index.css";
class HomePage extends Component {

/*    constructor(props) {
       super(props)
    }
    
    componentDidMount() {
        const { id } = this.props.params
        this.fetchFirstPost(id)
    }

    fetchFirstPost = async(id) => {
        try {
            const res = await fetch("http://testcommongroundhelps.org/wp-json/wp/v2/posts/?_embed")
            const postO = await res.json()
            this.setState({ postsO })
        } catch (e) {
            this.setState({ err: e.message })
        }
    }
*/        
    render() {

  //      const postsO = this.props.postsO;

        let getHelps = this.props.dataGetter.getHelpOpts[0];
        return (

            <div>
                 <div
                   className={ sty.hero } 
                    style={ {background: `#111 url(${getHelps.hero}) 50% 50% / cover`}}
                 >   
                        <div className={ sty.header }>
                            <div className={ sty.wrapper }>
                                <h1 className={ sty.heading }>{getHelps.heroTitle}</h1>
                                <div className={ sty.lowerTitleHolder}>
                                    <h4 className={ sty.lowerTitle}>
                                        {getHelps.heroSubtitle}
                                    </h4>
                                </div>
                            </div>
                        </div>
                 </div>
                 <div className={styles.bigHolder}>
                    <div className={styles.title}> Get Help</div>
                    {/* <hr className={styles.topline} /> */}
                    <div className={styles.help}>
                        {/*<HelpOpts dataGetter={this.props}/>*/}
                         { this.props.dataGetter.getHelpOpts.filter(helps => helps.name !== null).map((helps, i) => (
                            <div className={styles.optionsHolder}>
                                <div className={styles.options}>
                                    <img className={styles.svgClass} src={helps.image} />
                                    <div className={styles.subtitle}> {helps.title}</div>
                                    <div className={styles.descriptions}> {helps.description}</div>
                                    <a href={helps.btn.link}>
                                        <button className={styles.button}>{helps.btn.label}</button>
                                    </a>
                                </div>
                                <div className={styles.newLine} />
                            </div>
                        ))} 
                    </div>
                    <div className={lineStyles.center}>
                        <div className={lineStyles.line} />
                    </div>
                    <LatestPosts />
                    <div className={lineStyles.center}>
                        <div className={lineStyles.line}/>
                    </div>
                    <Testimonials />
                    <div className={lineStyles.center}>
                        <div className={lineStyles.line}/>
                    </div>
                    <Impact />
                </div>
            </div>
        )
    }

}


export default HomePage

