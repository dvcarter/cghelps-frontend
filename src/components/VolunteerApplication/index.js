import React, {Component} from "react"
import { connect } from "react-redux"
import { store } from "../../index.js"
import { createBrowserHistory as hashHistory } from "history"
import { push, replace } from "react-router-redux"
import { Redirect } from "react-router-dom"
import { Field, reduxForm, formValueSelector } from "redux-form"
import styles from "./index.css"
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { DOM: {input, select, textarea} } = React


//let VolunteerApplication = props => {

class VolunteerApplication extends Component {
   constructor() {
       super();
       this.state = {
           isHidden: false
       }
       this.toggleHidden = this.toggleHidden.bind(this);
   }

   toggleHidden() {
       this.setState({
           isHidden: !this.state.isHidden
       });
   }
    render() {
    return (
        <div className={styles.formHolder }>
            <form className={styles.formFit} action="https://formspree.io/dcarter@cghelps.org"  method="POST" >
            {/* Form Description */}
                <div className={styles.description}> 
                    <h1 className={styles.title_2_2}> Volunteer Application </h1>
                    <p>
                        Thanks for your interest in volunteering at Common Ground. Donating your
                        time and talent is a fantastic way to show how much you care.
                        Please share some information about yourself in the application below
                        and hit "Submit" when you're done. A member of our volunteer coordination
                        team will contact you shortly to follow up.
                    </p>
                    <p>
                    <em><strong>Volunteering questions? Please call 248.456.8150
                        or email <span style={{color: 'red'}}><a href="mailto:akscommonground@commongroundhelps.org">askcommonground@commongroundhelps.org</a></span></strong></em>
                    </p>
            
                </div>
                
                {/* Form Body */}
            <div className={styles.formProper}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className="col-form-label">First Name*</label>
                        <input name="first name" component="input" type="text" placeholder="First Name"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className="col-form-label">Last Name*</label>
                        <input name="last name" component="input" type="text" placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}> 
                    <label htmlFor="email">Email*</label>
                    <input name="email" component="input" type="email" placeholder="Email address"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="streetAddress">Street Address</label>
                    <input name="street address" component="input" type="text" placeholder="Street Address, Apt number" 
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">City</label>
                        <input name="city" component="input" type="text" placeholder="City"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="state">State</label>
                        <input name="state" component="input" type="text" placeholder="State"
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input name="zip code" component="input" type="text" placeholder="Zip Code"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone"> Phone </label>
                    <input name="phone" component="input" type="text" placeholder="Phone"
                    />
                </div>
                {/* radio button that shows/hides some options here */}
                 <div>
                    <p> Have you ever been convicted of a felony? </p>
                        <div>
                            <input name="Have you ever been convicted of a felony?" component="input" type="radio" 
                                value="yes"
                            />
                            <label>
                                Yes
                            </label>
                        </div>
                        <div>
                            <input name="Have you ever been convicted of a felony?" component="input" type="radio"
                                value="no"
                            />
                            <label>
                                No
                            </label>
                          </div>
                </div>
                <div>
                    <p> Which type of position are you applying for? </p>
                    <div>
                        <input
                            name="Which position are you applying for?"
                            component="input"
                            type="radio"
                            value="Volunteer"
                        />
                        <label> Volunteer </label>
                    </div>
                    <div>
                        <input
                            name="Which position are you applying for?"
                            component="input"
                            type="radio"
                            value="Internship"
                        />
                        <label> Internship </label>
                    </div>
                </div>
                <div>
                     <p> What are you available for volunteer assignments? Select all that apply? </p>
                    <div>
                        <input
                            name="Weekday Morning Availability"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="volunteerTimes"> Weekday mornings </label>
                    </div>
                    <div>
                        <input
                            name="Weekday Afternoon availability"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="volunteerTimes"> Weekkday Afternoons </label>
                    </div>
                    <div>
                        <input
                            name="Weekday evening availability"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="volunteerTimes"> Weekday Evenings </label>
                    </div>
                </div>
                <div>
                    <p>  What type of work interests you? Check all that apply.* </p>
                    <div>
                        <input
                             name="Interest in working on Business Advancement and Donor Relations"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Advancement & Donor Relations</label>
                    </div>
                    <div>
                        <input
                            name="Interest in working on Communications and Marketing"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Communications & Marketing </label>
                    </div>
                    <div>
                        <input 
                            name="Interest in working on Community Outreach"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Community Outreach </label>
                    </div>
                    <div>
                        <input
                            name="Interest in providing General Help"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> General Help </label>
                    </div>
                    <div>
                        <input
                            name="Interest in working with the Legal Clinic"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Legal Clinic </label>
                    </div>
                    <div>
                        <input
                            name="Interest in working as a Lobby Greeter"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Lobby Greeter </label>
                    </div>
                    <div>
                        <input
                            name="Interest in working on Office Work"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Office Work </label>
                    </div>
                    <div>
                        <input
                            name="Interest in working with the Resource and Crisis Helpline"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                            onClick={this.toggleHidden }
                        />
                        <label htmlFor="workInterest"> Resource & Crisis Helpline </label>
                    </div>
                    <div>
                        <input
                            name="Interest in working with the Runaway and Homeless Youth Programs"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="workInterest"> Runaway & Homeless Youth Programs </label>
                    </div>

                </div>
                { this.state.isHidden && <div>
                 <div>
                    <p> Which type of crisis intervention and emotional support work interests you?
                        Select all that apply? </p>
                    <div>
                        <input 
                            name="Telephone crisis intervention and emotional support work interests you?" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes"
                        />
                        <label>Telephone</label>
                    </div>
                    <div>
                        <input 
                            name="Chat crisis intervention and emotional support work interests you?" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes" 
                        />
                        <label>Chat</label>
                    </div>
                    <div>
                        <input 
                            name="Text crisis intervention and emotional support work interests you?" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes" 
                        />
                        <label>Text</label>
                    </div>
                    <div>
                        <input
                            name="Face-to-Face crisis intervention and emotional support work interests you?"
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes"
                        />
                        <label>Face-to-Face</label>
                    </div>
                </div>
                <div>
                    <p> Do you have personal and/or professional knowledge of topics such as domestic violence, mental health, suicide prevention, substance abuse, etc.? If so, please explain. </p>
                    <input name="Do you have personal and/or professional knowledge of topics such as domestic violence, mental health, suicide prevention, substance abuse, etc.?" type="textarea" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <p> Are you seeking student credit, community service credit, or any other type of 
                        credit in exchange for your volunteer efforts </p>
                        <div>
                            <input name="Are you seeking student credit, community service credit, or any other credit?" component="input" type="radio" value="no" 
                            />
                            <label> No </label>
                        </div>
                        <div>
                            <input name="Are you seeking student credit, community service credit, or any other credit?" component="input" type="radio" value="yes" 
                            />
                            <label> Yes  <span> if yes, please explain</span> </label>
                        </div>
                        <input name="What sort of  seeking student credit, community service credit, or any other credit will you be receiving?" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <p> Why are you interested in doing crisis intervention work at Common Ground? Please 
                    describe yourself and tell us what motivates you. Share a brief statement of your general
                    outlook on life, as well as any events you feel have significantly impacted your
                    personal development. (Do not provide a lengthy personal history.) </p>
                    <input name="Why are you interested in doing crisis intervention work at Common Ground?" type="textarea" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <p> Have you ever worked in crisis intervention or any type of counseling/therapy program
                    ?</p>
                    <div>
                        <input name="previousCounselingWork" component="input" type="radio" value="no" 
                        />
                        <label> No </label>
                    </div>
                    <div>
                        <input name="previousCounselingWork" component="input" type="radio" value="yes" 
                        />
                        <label> Yes  If yes, please tell us when and where, briefly describe the 
                            trainee program </label>
                    </div>
                    <div>
                        <input name="previousCounselingWorkExplanation" component="textarea" className={styles.boxWidth} 
                        />
                    </div>
                </div>
                <div>
                    <p> Please briefly summarize your primary reasons for applying to this program
                        and tell us what you hope to gain. </p>
                    <input name="reasonsForApplying" component="textarea" className={styles.boxWidth} 
                    />
                </div>
                <div>
                    <p> Do you have particularly strong feelings about any of these issues? 
                        Select all that apply </p>
                    <div>
                        <input
                            name="Strong feelings about Abortion issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />  
                        <label htmlFor="issueInterest"> Abortion </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about Domestic Violence issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> Domestic Violence </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about LGBTQ issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> LGBTQ </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about Religious issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> Religion </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about Sexual Assault issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> Sexual Assault </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about Substance Abuse issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> Substance Abuse </label>
                    </div>
                    <div>
                        <input
                            name="Strong feelings about Suicide issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="issueInterest"> Suicide </label>
                    </div>
                </div>
                <div>
                    <p> Please briefly describe your feelings about each issue you selected above.
                        Can you remain objective while interacting with someone who is currently
                        facing any of these issues?
                    </p>
                    <input name="objectivityQuestion" component="textarea" className={styles.boxWidth} 
                    />
                </div>
                <div>
                    <p> Have you recently experienced a significant loss or trauma? </p>
                    <div>
                        <input name="closeEndedTraumaQuestion" component="input" type="radio" value="no" 
                        />
                        <label> No </label>
                    </div>
                    <div>
                        <input name="closeEndedTraumaQuestion" component="input" type="radio" value="yes" 
                        />
                        <label> Yes <span> If yes, please describe.</span> </label>
                    </div>
                    <input name="traumaQuestion" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <p> Are you currently attending counseling/therapy? </p>
                    <div>
                        <input name="attendingCounseling" component="input" type="radio" value="no" 
                        />
                        <label> No </label>
                    </div>
                    <div>
                        <input name="attendingCounseling" component="input" type="radio" value="yes" 
                        />
                        <label> Yes <span> If yes, have you discussed your potential involvement at Common
                        Ground with your therapist? </span> </label>
                    </div>
                    <input name="counselingQuestioning" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <p> What do you think would be easiest for you about working in crisis intervention? </p>
                    <input name="easistPartCrisisIntervention" component="textarea" className={styles.boxWidth} 
                    />
                </div>
                <div>
                    <p> What do you think would be most difficult for you about working in crisis intervention? </p>
                    <input name="hardestPartCrisiIntervention" component="textarea" className={styles.boxWidth} 
                    />
                </div>
                <div>
                    <p> Crisis intervention work can be stressful. What causes stress in your life, and how do you
                        cope?</p>
                    <input name="difficultQualities" component="textarea" className={styles.boxWidth} 
                    />
                </div>
                <div>
                    <p> What positive qualities do you bring to Common Ground? </p>
                    <input name="positiveQualities" component="textarea" className={styles.boxWidth}
                    />
                </div>
                <div>
                    <p> Please tell us about any volunteer experience and/or special skills you have to offer. </p>
                    <input name="volunteerExperience" component="textarea" className={styles.boxWidth}
                    />
                </div>
                </div>
                }
                <input type="submit" value="Send" className={styles.buttonContact}/>
                    
            </div>
                    <input type="hidden" name="_next" value="/thank-you" />
            </form>
        </div>
        )
    }
}

export default VolunteerApplication;
