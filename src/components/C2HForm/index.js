import React, {Component} from "react"
import styles from "./index.css"
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { DOM: {input, select, textarea} } = React


//let VolunteerApplication = props => {

class C2HForm extends Component {
    render() {
    return (
        <div className={styles.formHolder }>
            <form className={styles.formFit} action="https://formspree.io/vkennedy@cghelps.org"  method="POST" >
            {/* Form Description */}
                <div className={styles.description}> 
                    <h1 className={styles.title_2_2}> Crisis to Hope Registration Form</h1>
                    <p>
                          We invite you to get to know Common Ground a little better!

The presentation consists of inspirational stories that get to the heart of Common Ground's key impact areas: Responding to Crisis, Providing Safety and Advocacy, and Building Communities of Support.

You will come away with a better understanding of how critical Common Ground is to our community. We are not asking for contributions, but we will follow up with you a few days after the presentation to gather comments and feedback. It will easily be the best hour of your day. The address of our tour is below. After arriving at the Resource and Crisis center, you will have to sign in at the from desk and the Welcoming Specialist will direct you to the appropriate room. 
                    </p>
                    <p>
                        <blockquote style={{textAlign: 'center'}}> 
                        <a title="Click to be directed to directions from Google Maps" href="https://www.google.com/maps/place/Resource+and+Crisis+Center/@42.6556258,-83.3276319,18z/data=!3m1!4b1!4m5!3m4!1s0x8824be06245a06c3:0xd572f980fe3f5879!8m2!3d42.6556242!4d-83.326717" style={{textDecoration: 'none'}}>
                            Resource and Crisis Center<br />
                            1200 N. Telegraph Rd., <strong>Building 32 East </strong><br />
                            Pontiac, MI 48341
                        </a>
                        </blockquote>
                    <em><strong>Questions about Crisis to Hope? Please call 248.451.3734
                        or email <span style={{color: 'red'}}><a href="mailto:vkennedy@commongroundhelps.org">vkennedy@commongroundhelps.org</a></span></strong></em>
                    </p>
            
                </div>
                
                {/* Form Body */}
            <div className={styles.formProper}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className="col-form-label">First Name*</label>
                        <input name="First Name" component="input" type="text" placeholder="First Name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className="col-form-label">Last Name*</label>
                        <input name="Last Name" component="input" type="text" placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}> 
                    <label htmlFor="email">Email*</label>
                    <input name="Email" component="input" type="email" placeholder="Email address"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="streetAddress">Street Address</label>
                    <input name="Street Address" component="input" type="text" placeholder="Street Address, Apt number" 
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">City</label>
                        <input name="City" component="input" type="text" placeholder="City"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="state">State</label>
                        <input name="State" component="input" type="text" placeholder="State"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input name="Zip Code" component="input" type="text" placeholder="Zip Code"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone"> Phone </label>
                    <input name="Phone" component="input" type="text" placeholder="Phone"
                    />
                </div>
                {/* radio button that shows/hides some options here */}
                <div>
                     <p>
                       What day would like to attend a Crisis to Hope tour? 
                    </p>
                    <div>
                        <input
                            name="March 6th, 6-7pm"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="volunteerTimes"> Tuesday, March 6<sup>th</sup> 6pm-7pm</label>
                    </div>
                     <div>
                        <input
                            name="April 10th, 6-7pm"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />  
                        <label htmlFor="volunteerTimes"> Tuesday, April 10<sup>th</sup> 6pm-7pm</label>
                    </div>
                </div>
                <div>
                </div>
                    <input type="submit" value="Send" className={styles.buttonContact}/>
                    <input type="hidden" name="_next" value="/thanks-for-registering" />
            </div>
        </form>
    </div>
        )
    }
}

export default C2HForm
