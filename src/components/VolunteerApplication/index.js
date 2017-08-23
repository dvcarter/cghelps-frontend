import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm, formValueSelector } from "redux-form"
import styles from "./index.css"
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { DOM: {input, select, textarea} } = React


let VolunteerApplication = props => {
    const { handleSubmit, hasRightSelection } = props
    return (
            <form onSubmit={ handleSubmit } className={styles.formFit}>
                {/* Form Body */}
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-form-label">First Name*</label>
                        <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="col-form-label">Last Name*</label>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div> 
                    <label htmlFor="email">Email*</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="streetAddress">Street Address</label>
                    <Field name="streetAddress" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <Field name="city" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <Field name="state" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <Field name="zipCode" component="input" type="text" />
                </div>
                {/* radio button that shows/hides some options here */}
                 <div>
                    <p> Have you ever been convicted of a felony? </p>
                        <div>
                            <Field name="felonyArea" component="input" type="radio" value="yes" />
                            <label>
                                Yes
                            </label>
                        </div>
                        <div>
                            <Field name="felonyArea" component="input" type="radio" value="no" />
                            <label>
                                No
                            </label>
                          </div>
                </div>
                <div>
                    <p> Which type of position are you applying for? </p>
                    <div>
                        <Field
                            name="positionArea"
                            component="input"
                            type="radio"
                            value="volunteer"
                        />
                        <label> Volunteer </label>
                    </div>
                    <div>
                        <Field
                            name="positionArea"
                            component="input"
                            type="radio"
                            value="internship"
                        />
                        <label> Internship </label>
                    </div>
                </div>
                <div>
                     <p> What are you available for volunteer assignments? Select all that apply? </p>
                    <div>
                        <Field
                            name="volunteerTimes0"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="volunteerTimes"> Weekday mornings </label>
                    </div>
                    <div>
                        <Field
                            name="volunteerTimes1"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="volunteerTimes"> Weekkday Afternoons </label>
                    </div>
                    <div>
                        <Field
                            name="volunteerTimes2"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="volunteerTimes"> Weekday Evenings </label>
                    </div>
                </div>
                <div>
                    <p>  What type of work interests you? Check all that apply.* </p>
                    <div>
                        < Field
                             name="workInterest0"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Advancement & Donor Relations</label>
                    </div>
                    <div>
                        <Field
                            name="workInterest1"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Communications & Marketing </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest2"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Community Outreach </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest3"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> General Help </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest4"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Legal Clinic </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest5"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Lobby Greeter </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest6"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Office Work </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest7"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Resource & Crisis Helpline </label>
                    </div>
                    <div>
                        <Field
                            name="workInterest8"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="workInterest"> Runaway & Homeless Youth Programs </label>
                    </div>

                </div>
                 <div>
                    <p> Which type of crisis intervention and emotional support work interests you?
                        Select all that apply? </p>
                    <div>
                        <Field 
                            name="Telephone" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="telephone"/>
                        <label>Telephone</label>
                    </div>
                    <div>
                        <Field 
                            name="Chat" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="chat" />
                        <label>Chat</label>
                    </div>
                    <div>
                        <Field 
                            name="Text" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="text" />
                        <label>Text</label>
                    </div>
                    <div>
                        <Field 
                            name="Face-to-Face"
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="face-to-face"/>
                        <label>Face-to-Face</label>
                    </div>
                </div>
                <div>
                    <p> Do you have personal and/or professional knowledge of topics such as domestic violence, mental health, suicide prevention, substance abuse, etc.? If so, please explain. </p>
                    <Field name="professionalKnowledge" component="textarea" />
                </div>
                <div>
                    
                    <p> Are you seeking student credit, community service credit, or any other type of 
                        credit in exchange for your volunteer efforts </p>
                        <div>
                            <Field name="quidProQuoValidation" component="input" type="radio" value="no" />
                            <label> No </label>
                        </div>
                        <div>
                            <Field name="quidProQuoValidation" component="input" type="radio" value="yes" />
                            <label> Yes  <span> if yes, please explain</span> </label>
                        </div>
                        <Field name="quidProQuo" component="textarea" />
                </div>
                <div>
                    <p> Why are you interested in doing crisis intervention work at Common Ground? Please 
                    describe yourself and tell us what motivates you. Share a brief statement of your general
                    outlook on life, as well as any events you feel have significantly impacted your
                    personal development. (Do not provide a lengthy personal history.) </p>
                    <Field name="motivation" component="textarea" />
                </div>
                <div>
                    <p> Have you ever worked in crisis intervention or any type of counseling/therapy program
                    ?</p>
                    <div>
                        <Field name="previousCounselingWork" component="input" type="radio" value="no" />
                        <label> No </label>
                    </div>
                    <div>
                        <Field name="previousCounselingWork" component="input" type="radio" value="yes" />
                        <label> Yes  If yes, please tell us when and where, briefly describe the 
                            trainee program </label>
                    </div>
                    <div>
                        <Field name="previousCounselingWorkExplanation" component="textarea" />
                    </div>
                </div>
                <div>
                    <p> Please briefly summarize your primary reasons for applying to this program
                        and tell us what you hope to gain. </p>
                    <Field name="reasonsForApplying" component="textarea" />
                </div>
                <div>
                    <p> Do you have particularly strong feelings about any of these issues? 
                        Select all that apply </p>
                    <div>
                        <Field
                            name="issueInterest0"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />  
                        <label htmlFor="issueInterest"> Abortion </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest1"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Domestic Violence </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest2"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> LGBTQ </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest3"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Religion </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest4"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Sexual Assault </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest5"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Substance Abuse </label>
                    </div>
                    <div>
                        <Field
                            name="issueInterest6"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Suicide </label>
                    </div>
                </div>
                <div>
                    <p> Please briefly describe your feelings about each issue you selected above.
                        Can you remain objective while interacting with someone who is currently
                        facing any of these issues?
                    </p>
                    <Field name="objectivityQuestion" component="textarea" />
                </div>
                <div>
                    <p> Have you recently experienced a significant loss or trauma? </p>
                    <div>
                        <Field name="closeEndedTraumaQuestion" component="input" type="radio" value="no" />
                        <label> No </label>
                    </div>
                    <div>
                        <Field name="closeEndedTraumaQuestion" component="input" type="radio" value="yes" />
                        <label> Yes <span> If yes, please describe.</span> </label>
                    </div>
                    <Field name="traumaQuestion" component="textarea" />
                </div>
                <div>
                    <p> Are you currently attending counseling/therapy? </p>
                    <div>
                        <Field name="attendingCounseling" component="input" type="radio" value="no" />
                        <label> No </label>
                    </div>
                    <div>
                        <Field name="attendingCounseling" component="input" type="radio" value="yes" />
                        <label> Yes <span> If yes, have you discussed your potential involvement at Common
                        Ground with your therapist? </span> </label>
                    </div>
                    <Field name="counselingQuestioning" component="textarea" />
                </div>
                <div>
                    <p> What do you think would be easiest for you about working in crisis intervention? </p>
                    <Field name="easistPartCrisisIntervention" component="textarea" />
                </div>
                <div>
                    <p> What do you think would be most difficult for you about working in crisis intervention? </p>
                    <Field name="hardestPartCrisiIntervention" component="textarea" className={styles.boxWidth} />
                </div>
                <div>
                    <p> Crisis intervention work can be stressful. What causes stress in your life, and how do you
                        cope?</p>
                    <Field name="difficultQualities" component="textarea" className={styles.boxWidth} />
                </div>
                <div>
                    <p> What positive qualities do you bring to Common Ground? </p>
                    <Field name="positiveQualities" component="textarea" className={styles.boxWidth}/>
                </div>
                <div>
                    <p> Please tell us about any volunteer experience and/or special skills you have to offer. </p>
                    <Field name="volunteerExperience" component="textarea" className={styles.boxWidth}/>
                </div>
                {(hasRightSelection === "face-to-face") &&
                    <div>
                        <p> This is a Hat </p>
                    </div>
                }
                <button type="submit">Submit</button>
                    
            </form>
    )
}

VolunteerApplication = reduxForm({
    // a unique name for the form
    form: 'contact'
})(VolunteerApplication)

const selector = formValueSelector('volunteerApplication')
VolunteerApplication = connect(state => {
    const hasRightSelection = selector(state, 'volunteerArea')
    return {
        hasRightSelection
    }
})(VolunteerApplication)

export default VolunteerApplication;
