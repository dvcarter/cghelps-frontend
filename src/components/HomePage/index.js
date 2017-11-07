import React, {Component} from "react";
import styles from  "../HelpOpts/HelpOpts.css";
import LatestPosts from "../LatestPosts";
import Testimonials from "../Testimonials";
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

            <div className={styles.superHolder_0}>
                 <div
                   className={ sty.hero_0 } 
                    style={ {background: `#111 url(${getHelps.hero}) 50% 50% / cover`}}
                 >   
                        <div className={ sty.header_0 }>
                            <div className={ sty.wrapper_0 }>
                                <div className={ sty.heading_0 }>{getHelps.heroTitle}</div>
                                <div className={ sty.lowerTitleHolder_0}>
                                        {getHelps.heroSubtitle}
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
                                    <img className={styles.svgClass} src={helps.image} alt="" />
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
                    {/* 
                        <div className={lineStyles.center}>
                            <div className={lineStyles.line}/>
                        </div>
                        <Impact />
                    */}
                </div>
            </div>
        )
    }

}


export default HomePage

