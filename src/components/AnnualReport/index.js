import React, { Component } from 'react'
import FlippyThing from "react-flip-page"
import PropTypes from "prop-types"
import styles from './DonateOpts.css'
import sty from "./donateHero.css"
import SustainOpts from "../SustainOpts"
import MoreWays from "../MoreWays"
//import SponsorThanks from "../SponsorThanks"
 import SponsorThanks from "../HeroCarousel";
import annualReportPdf from "../../content/assets/2016-17_annual_report_Common_Ground.pdf"



const baseUrl = 'http://159.203.172.53/wp-content/uploads/2018/05/';
const images = [1, 2, 3, 4, 5, 6, 7, 8];
const theEndStyle = {
  alignItems: 'flex-end',
  backgroundColor: '#000',
  color: '#000',
  display: 'flex',
  justifyContent: 'center',
  padding: 10
};
const theEnd = <div style={theEndStyle}>The End!</div>;





class AnnualReport extends Component {
    render() {
        return (
            <div className={styles.donationHolder}>
                <div className= {styles.title}> 3 Easy Ways to Donate</div>
               		 <FlippyThing 
                        lastComponent={theEnd}
                        orientation={"horizontal"}
                        height={700}
                        width={1000}
                        showSwipeHint
                        flipOnTouch
                        flipOnLeave
                        > 
            {images.map((n, i) =>
 
               <img key={i} className={styles.flipperOne} src={`${baseUrl}${n}.png`} />
            )}  
            </FlippyThing> 

            <div>
                <a href={annualReportPdf}> Click here to view our latest annual report </a>
            </div>
            
            </div>
            )
    }
}

AnnualReport.propTypes = {
}

export default AnnualReport
