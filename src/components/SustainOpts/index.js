import React from "react"
import styles from "./SustainOpts.css"
import Calendar from "./small-calendar.png"

const SustainOpts = () => (
    <div className={styles.holder}>
        <div className={styles.sustainTitle}> Consider a Sustaining Gift </div>    
            <div className={styles.options}>
                <img className={styles.imgs} src={Calendar}/>
                <div className={styles.text}> 
                
                    <span><strong>MONTHLY - </strong></span>
                    When you pledge a recurring monthly gift, it adds up to a significant
                    contribution. Just $10 per month = $120 in a year.
                    
                </div>
            </div>
            <div className={styles.options}>
                <img className={styles.imgs} src={Calendar}/>
                <div className={styles.text}> 
                    <span><strong>YEARLY - </strong></span>
                    By pledging an annual gift of $1,000 or more for 5 years, you'll
                    become a member of the Common Ground Legacy Society.
                </div>
            </div>
    </div>

)

export default SustainOpts


