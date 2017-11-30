import React, {Component} from "react"
import ReactDOM from "react-dom"
import { Carousel } from "react-responsive-carousel"
import BoA from "../../content/assets/bank_of_ann_arbor.png"
import styles from "./index.css"

class HeroCarousel extends Component {
    render() {
        return (
            <Carousel width="800px" dynamicHeight autoPlay showThumbs={false} infiniteLoop={true} showArrows={false} centerSlidePercentage="10" className={styles.carouselHolder}>
                        <div className={styles.box1}>
                            <a className={styles.linkHolder} href="https://google.com">
                                <img src={BoA} />
                            </a>
                        </div>
                        <div className={styles.box2}> 
                            <a className={styles.linkHolder} href="https://google.com">
                                <img src={BoA} />
                            </a>
                        </div>
                        <div className={styles.box3}> 
                            <a className={styles.linkHolder} href="https://google.com">
                                <img src={BoA} />
                            </a>
                        </div>
                        <div className={styles.box4}> 
                            <a className={styles.linkHolder} href="https://google.com">
                                <img src={BoA} />
                            </a>
                        </div>
                         <div className={styles.box4}> 
                            <a className={styles.linkHolder} href="https://google.com">
                                <img src={BoA} /> 
                            </a>                        
</div>
                        <div className={styles.box4}> 
                            <a className={styles.linkHolder} href="https://google.com"><img src={BoA} /></a>
                        </div>
            </Carousel>
        )
    }
}

export default HeroCarousel
