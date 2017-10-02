import React, {Component} from "react";
import Slider from "react-slick";
import styles from "./SponsorSlider.css"


function NextArrow(props) {
    const {className, style, onClick} = props
        return (
                <div
                    className={className}
                    style={{...style, display: 'block', background: '#3d3d3d'}}
                    onClick={onClick}
                ></div>
        )
}

function PrevArrow(props) {
    const {className, style, onClick} = props
        return (
                <div
                    className={className}
                    style={{...style, display: 'block', backgroound: '#3d3d3d'}}
                    onClick={onClick}
                ></div>
        )
}



class SponsorSlider extends Component {

    render() {
        var settings = {
            dots: false,
            arrows: true,
        }

        return (
                <div className={styles.container}>
                    <Slider {...settings}>
                        <div> <img src="http://placekitten.com/g/400/200" alt="1" /> </div>
                        <div> <img src="http://placekitten.com/g/400/200" alt="2" /> </div>
                        <div> <img src="http://placekitten.com/g/400/200" alt="3" /> </div>
                        <div> <img src="http://placekitten.com/g/400/200" alt="4" /> </div>
                    </Slider>
                </div>
        )
    }
}

export default SponsorSlider
