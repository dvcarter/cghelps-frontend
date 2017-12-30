import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import Slider from "react-slick"
import styles from "./index.css"
import PSA from "../../content/assets/psa.png"
import seekHelp from "../../content/assets/seekhelp.jpg"
import getHelp from "../../content/assets/gethelp.jpg"
import health from "../../content/assets/health.jpg"
import SSU from "../../content/assets/grouphero.jpg"
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
                dots: true,
                infinite: true,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 8000,
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
                                style={ {background: `#111 url(${PSA}) 50% 50% / cover `}}
                                className={styles.heroImg}>
                                <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBoxFirst}>
                                                <h1 className={sty.donateH1}>Helping People Move from Crisis to Hope</h1>
                                                    <p className={sty.donateP}>
                                                       We developed this announcement with our community in mind, and we hope to reach those who are unfamiliar with our services.
</p>
                                                    <Link className={sty.button} to="/news-and-media">  Find out more </Link>       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div
                                style={ {background: `#111 url(${seekHelp}) 50% 50% / cover `} }
                                className={styles.heroImg}>
                                    <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox_carousel}>
                                                <h1 className={sty.donateH1}> Donate </h1>
                                                    <ul className={sty.donateUl}><em> <span className={sty.movR}> Your gift can help us:</span></em>
                                                        <li className={sty.donateLi}>
                                                            Expand the hours of our Text and Chat Helpline services
                                                        </li>
                                                        <li className={sty.donateLi}> Offer more of our specialized Support Groups </li>
                                                        <li className={sty.donateLi}> Add a Resource & Crisis Center location in southern Oakland County </li>
                                                    </ul>
                                                    <a className={sty.button} href="https://commongroundhelps.z2systems.com/np/clients/commongroundhelps/donation.jsp?campaign=1096&"
                                                        >             Give Now 
                                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box3}>
                            <div 
                                style={ {background: `#111 url(${SSU}) 50% 50% / cover` } }
                                className={styles.heroImg} >
                                   <div className={ sty.header }>
                                    <div className={ sty.wrapper }>
                                        <div className={ sty.heading }>
                                            <div className={sty.textBox3}>
                                                <h1 className={sty.donateH1}> The Sober Support Unit (SSU)</h1>
                                                    <p className={sty.donateP}> The Sober Support Unit is a 23-hour program designed to monitor individuals who need detoxification services and have no health risks associated with the withdrawal process. </p>

                                                    <Link className={sty.button} to="/program-list"> Find out more </Link>
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
                                                <h1 className={sty.donateH1}> Get Involved </h1>
                                                    <p className={sty.donateP}> 
                                                        Take a tour of our Resource & Crisis Center to learn how you can <em> help move people from crisis to hope. </em></p>
                                                    <div className={sty.datePlacement}>
                                                        <ul className={sty.dateHolder} style ={ {position:`static`, backgroundColor: `none`}}> 
                                                                <li className={sty.dateLine}> Tour Dates:</li>
                                                                <li className={sty.dateLine}> Tuesday, January 9<sup>th</sup> 6-7pm </li>
                                                                <li className={sty.dateLine}> Tuesday, January 23<sup>rd</sup> 9-10am </li>
                                                                <li className={sty.dateLine}> Tuesday, February 6<sup>th</sup> 6-7pm</li>
                                                        </ul>
                                                    </div>
                                                    <Link className={sty.button} to="/get-involved/crisis-to-hope"> Register for a 'Crisis to Hope' Tour! </Link>
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
