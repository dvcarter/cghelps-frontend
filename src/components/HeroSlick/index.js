import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import Slider from "react-slick"
import styles from "./index.css"
import seekHelp from "../../content/assets/seekhelp.jpg"
import getHelp from "../../content/assets/gethelp.jpg"
import health from "../../content/assets/health.jpg"
import getInvolved from "../../content/assets/getinvolved.jpg"
import sty from "./heroSliderIdentifier.css"

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={styles.nextArr}
      style={{...style, display: 'block', height: '57vh'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={styles.prevArr}
      style={{...style, display: 'block', height: '57vh'}}
      onClick={onClick}
    ></div>
  );
}

class HeroSlick extends Component {


 render() {
        var settings = {
                dots: false,
                infinite: false,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                useTransform: true,
                cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
            
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <Slider ref="slick" {...settings} className={styles.carouselHolder}>
                        <div className={styles.box1}
                            >
                            <div
                                style={ {background: `#111 url(${seekHelp}) 50% 50% / cover `}}
                                className={styles.heroImg}>
                                <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox}>
                                                <div className={sty.purpleTitle}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div
                                style={ {background: `#111 url(${getHelp}) 50% 50% / cover `} }
                                className={styles.heroImg}>
                                    <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox}>
                                                <div className={sty.purpleTitle}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box3}>
                            <div 
                                style={ {background: `#111 url(${health}) 50% 50% / cover` } }
                                className={styles.heroImg} >
                                   <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox}>
                                                <div className={sty.purpleTitle}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box4}>
                            <div 
                                style={ {background: `#111 url(${getInvolved}) 50% 50% / cover ` } }
                                className={styles.heroImg} >
                                  <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox}>
                                                <div className={sty.purpleTitle}> Get Involved </div>
                                                    <p> 
                                                        Take a tour of our Resource & Crisis Center to learn how you can <em> help move people from crisis to hope. </em></p>
                                                    <div className={sty.datePlacement}>
                                                        <ul className={sty.dateHolder} style ={ {position:`static`, backgroundColor: `none`}}> 
                                                            <li className={sty.dateLine}> Tour Dates:</li>
                                                            <li className={sty.dateLine}> November 21</li>
                                                            <li className={sty.dateLine}> December 5</li>
                                                            <li className={sty.dateLine}> December 19</li>
                                                        </ul>
                                                    </div>
                                                    <button className={sty.button}><Link to="/get-involved/crisis-to-hope"> Register for a 'Crisis to Hope' Tour! </Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                         </div>
            </Slider>
        )
    }
}

export default HeroSlick
