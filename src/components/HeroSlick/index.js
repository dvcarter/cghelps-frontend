import React, {Component} from "react"
import ReactDOM from "react-dom"
import Slider from "react-slick"
import styles from "./index.css"

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}

class HeroSlick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            useTransform: true,
cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <Slider {...settings} className={styles.carouselHolder}>
                        <div className={styles.box1}> 
                            <img src="https://placeholdit.co//i/500x500?&bg=595A5F&fc=fff&text=img" />
                        </div>
                        <div className={styles.box2}> 
                            <img src="https://placeholdit.co//i/500x500?&bg=595A5F&fc=fff&text=img" />
                        </div>
                        <div className={styles.box3}> 
                            <img src="https://placeholdit.co//i/500x500?&bg=595A5F&fc=fff&text=img" />
                        </div>
                        <div className={styles.box4}> 
                            <img src="https://placeholdit.co//i/500x500?&bg=595A5F&fc=fff&text=img" />
                        </div>
            </Slider>
        )
    }
}

export default HeroSlick
