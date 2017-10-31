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
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
            felonyArea: '',
            volunteerApply: '',
            internshipApply: '', 
            weekdayMorning: '',
            weekdayAfternoon: '',
            weekdayEvening: '',
            alert: {
                show: false,
                type: '',
                text: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(key, event) {
        this.setState({ [key]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.firstName === '' ||
                this.state.lastName === '' ||
                this.state.email === '' ||
                this.state.streetAddress === '' ||
                this.state.city === '' ||
                this.state.state === '' ||
                this.state.zipCode === '' ||
                this.state.phone === '') { 
            this.setState({ alert: { show: true, type: 'danger', text: 'Please fill out all fields.'} })
                return;
            }

    const json = JSON.stringify({
        'First Name': this.state.firstName,
        'Last Name' : this.state.lastName,
        'Email': this.state.email,
        'Street Address': this.state.streetAddress,
        'City': this.state.city,
        'State': this.state.state,
        'Zip Code': this.state.zipCode,
        'Phone': this.state.phone,
        'Felony convictions?': this.state.felonyArea,
        'Volunteer app': this.state.volunteerApply,
        'Internship app': this.state.internshipApply,
        'Weekday Morning': this.state.weekdayMorning,
        'Weekday Afternoon': this.state.weekdayAfternoon,
        'Weekday Evening': this.state.weekdayEvening,
        'Personal or Professional knowledge': this.state.professionalKnowledge,
        'Seeking Student, Community Service, or any other type of credit': this.state.credit,
        'Interest in working on Business Advancement and Donor relations': this.state.advancementWork,
        'Interest in working on Communications and Marketing': this.state.communicationsWork,
        'Interest in working on Community Outreach': this.state.outreachWork,
        'Interest in providing General Help': this.state.generalHelpWork,
        'Interest in working with the Legal Clinic': this.state.legalClinic,
        'Interest in working as a Lobby Greeter': this.state.lobbyGreeterWOrk,
        'Interest in working on Office Work': this.state.officeWork,
        'Interest in working with the Resource and Crisis Helpline': this.state.rccWork,
        'Interest in working with the Runaway and Homeless Youth program': this.state.rhyWork,
        'Interest in working on telephone based crisis line': this.state.telephoneInterest,
        'Interest in working on online chat crisis line': this.state.chatInterest,
        'Interest in working on telephone based text crisis line': this.state.textInterest,
        'Interest in working in a face-to-face crisis support role': this.state.faceToFaceInterest,
        _subject: '[Common Ground] Message Received',
         _format: 'plain'
         } );




    this.setState({
        alert: {show: true, type: 'info', text: 'Sending...'},
        submitted: true}, this.sendFormData(json))
    }

    sendFormData(json) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'https://formspree.io/dcarter@cghelps.org', true);
        xmlhttp.setRequestHeader('Accept', 'application/json');
        xmlhttp.setRequestHeader('Content-Type', 'application/json');

        xmlhttp.send(json);

        var _this = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState < 4)
                _this.setState({alert: {show: true, type: 'info', text: 'Loading...'} })
            else if (xmlhttp.readyState === 4) {
                _this.setState({ alert: { show: true, type: 'success', text: 'Your message has been sent!'}, 
                    firstName: '', lastName: '', email: '', streetAddress: '', city: '', state: '', zipCode: '', phone: '', felonyArea: '', volunteerApply: '', internshipApply: '',
                    weekdayMorning: '', weekdayAfternoon: '', weekdayEvening: '', professionalKnowledge: '', credit: ''});
            window.location.href= '/thank-you';
            }
            else {
                _this.setState({ alert: { show: true, type: 'danger', text: 'Sorry, there has been an error. Please send your message again!'
                }
                })
            }
        }
    }
    
    render() {
    const { handleSubmit, hasRightSelection } = this.props
    return (
        <div className={styles.formHolder }>
            <form className={styles.formFit} onSubmit={this.handleSubmit} method="POST" >
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
                            value={this.state.firstName} 
                            onChange={this.handleChange.bind(this, 'firstName')}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className="col-form-label">Last Name*</label>
                        <input name="last name" component="input" type="text" placeholder="Last Name"
                            value={this.state.lastName} 
                            onChange={this.handleChange.bind(this, 'lastName')}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}> 
                    <label htmlFor="email">Email*</label>
                    <input name="email" component="input" type="email" placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="streetAddress">Street Address</label>
                    <input name="street address" component="input" type="text" placeholder="Street Address, Apt number" 
                            value={this.state.streetAddress}
                            onChange={this.handleChange.bind(this, 'streetAddress')}
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">City</label>
                        <input name="city" component="input" type="text" placeholder="City"
                            value={this.state.city}
                            onChange={this.handleChange.bind(this, 'city')}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="state">State</label>
                        <input name="state" component="input" type="text" placeholder="State"
                            value={this.state.state}
                            onChange={this.handleChange.bind(this, 'state')}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input name="zip code" component="input" type="text" placeholder="Zip Code"
                            value={this.state.zipCode}
                            onChange={this.handleChange.bind(this, 'zipCode')}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone"> Phone </label>
                    <input name="phone" component="input" type="text" placeholder="Phone"
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this, 'phone')}
                    />
                </div>
                {/* radio button that shows/hides some options here */}
                 <div>
                    <p> Have you ever been convicted of a felony? </p>
                        <div>
                            <input name="felonyArea" component="input" type="radio" 
                                value="yes"
                                onChange={this.handleChange.bind(this, 'felonyArea')}
                            
                            />
                            <label>
                                Yes
                            </label>
                        </div>
                        <div>
                            <input name="felonyArea" component="input" type="radio"
                                value="no"
                                onChange={this.handleChange.bind(this, 'felonyArea')}
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
                            name="Applyingposition"
                            component="input"
                            type="radio"
                            value="true"
                            onChange={this.handleChange.bind(this, 'volunteerApply')}
                        />
                        <label> Volunteer </label>
                    </div>
                    <div>
                        <input
                            name="Applyingposition"
                            component="input"
                            type="radio"
                            value="true"
                            onChange={this.handleChange.bind(this, 'internshipApply')}
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
                            onChange={this.handleChange.bind(this, 'weekdayMorning')}
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
                            onChange={this.handleChange.bind(this, 'weekdayAfternoon')}
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
                            onChange={this.handleChange.bind(this, 'weekdayEvening')}
                        />
                        <label htmlFor="volunteerTimes"> Weekday Evenings </label>
                    </div>
                </div>
                <div>
                    <p>  What type of work interests you? Check all that apply.* </p>
                    <div>
                        < input
                             name="Interest in working on Business Advancement and Donor Relations"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                            onChange={this.handleChange.bind(this, 'advancedmentWork')}
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
                            onChange={this.handleChange.bind(this, 'communicationsWork')}
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
                            onChange={this.handleChange.bind(this, 'outreachWork')}
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
                            onChange={this.handleChange.bind(this, 'generalHelpWork')}
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
                            onChange={this.handleChange.bind(this, 'legalClinicWork')}
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
                            onChange={this.handleChange.bind(this, 'lobbyGreeterWork')}
                        />
                        <label htmlFor="workInterest"> Lobby Greeter </label>
                    </div>
                    <div>
                        <Field
                            name="Interest in working on Office Work"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                            onChange={this.handleChange.bind(this, 'officeWork')}
                        />
                        <label htmlFor="workInterest"> Office Work </label>
                    </div>
                    <div>
                        <Field
                            name="Interest in working with the Resource and Crisis Helpline"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                            onChange={this.handleChange.bind(this, 'rccWork')}
                        />
                        <label htmlFor="workInterest"> Resource & Crisis Helpline </label>
                    </div>
                    <div>
                        <Field
                            name="Interest in working with the Runaway and Homeless Youth Programs"
                            id="workInterest"
                            component="input"
                            type="checkbox"
                            value="yes"
                            onChange={this.handleChange.bind(this, 'rhyWork')}
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
                            value="yes"
                            onChange={this.handleChange.bind(this, 'telephoneInterest')}
                        />
                        <label>Telephone</label>
                    </div>
                    <div>
                        <Field 
                            name="Chat" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes" 
                            onChange={this.handleChange.bind(this, 'chatInterest')}
                        />
                        <label>Chat</label>
                    </div>
                    <div>
                        <Field 
                            name="Text" 
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes" 
                            onChange={this.handleChange.bind(this, 'textInterest')}
                        />
                        <label>Text</label>
                    </div>
                    <div>
                        <Field 
                            name="Face-to-Face"
                            id="volunteerArea"
                            component="input" 
                            type="checkbox" 
                            value="yes"
                            onChange={this.handleChange.bind(this, 'faceTofaceInterest')}
                        />
                        <label>Face-to-Face</label>
                    </div>
                </div>
                <div>
                    <p> Do you have personal and/or professional knowledge of topics such as domestic violence, mental health, suicide prevention, substance abuse, etc.? If so, please explain. </p>
                    <Field name="professionalKnowledge" component="textarea" className={styles.boxWidth} 
                        value={this.state.professionalKnowledge}
                        onChange={this.handleChange.bind(this, 'professionalKnowledge')}
                        />
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
                        <Field name="quidProQuo" component="textarea" className={styles.boxWidth} 
                            value={this.state.credit}
                            onChange={this.handleChange.bind(this, 'credit')}
                        
                        />
                </div>
                <div>
                    <p> Why are you interested in doing crisis intervention work at Common Ground? Please 
                    describe yourself and tell us what motivates you. Share a brief statement of your general
                    outlook on life, as well as any events you feel have significantly impacted your
                    personal development. (Do not provide a lengthy personal history.) </p>
                    <Field name="motivation" component="textarea" className={styles.boxWidth} 
                            value={this.state.motivation}
                            onChange={this.handleChange.bind(this, 'motivation')}
                        />
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
                        <Field name="previousCounselingWorkExplanation" component="textarea" className={styles.boxWidth} />
                    </div>
                </div>
                <div>
                    <p> Please briefly summarize your primary reasons for applying to this program
                        and tell us what you hope to gain. </p>
                    <Field name="reasonsForApplying" component="textarea" className={styles.boxWidth} />
                </div>
                <div>
                    <p> Do you have particularly strong feelings about any of these issues? 
                        Select all that apply </p>
                    <div>
                        <Field
                            name="Strong feelings about Abortion issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />  
                        <label htmlFor="issueInterest"> Abortion </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about Domestic Violence issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Domestic Violence </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about LGBTQ issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> LGBTQ </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about Religious issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Religion </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about Sexual Assault issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Sexual Assault </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about Substance Abuse issues"
                            id="issueInterest"
                            component="input"
                            type="checkbox"
                        />
                        <label htmlFor="issueInterest"> Substance Abuse </label>
                    </div>
                    <div>
                        <Field
                            name="Strong feelings about Suicide issues"
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
                    <Field name="objectivityQuestion" component="textarea" className={styles.boxWidth} />
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
                    <Field name="traumaQuestion" component="textarea" className={styles.boxWidth} />
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
                    <Field name="counselingQuestioning" component="textarea" className={styles.boxWidth} />
                </div>
                <div>
                    <p> What do you think would be easiest for you about working in crisis intervention? </p>
                    <Field name="easistPartCrisisIntervention" component="textarea" className={styles.boxWidth} />
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
                <input type="submit" value="Send" />
                    
            </div>
                { this.state.alert.show &&
                    <div className={ styles.alert + 'alert-' + this.state.alert.type }>
                    { this.state.alert.text }
                    </div>
                }
            </form>
        </div>
        )
    }
}

VolunteerApplication = reduxForm({
    form: 'information',
    enableReinitialize: true,
    onSubmitSuccess: (dispatch) => {
        console.log("Success!");
        store.dispatch(push("/"));
    },
})(VolunteerApplication)

const selector = formValueSelector('volunteerApplication')
VolunteerApplication = connect(state => {
    const hasRightSelection = selector(state, 'volunteerArea')
    return {
        hasRightSelection
    }
})(VolunteerApplication)




export default VolunteerApplication;
