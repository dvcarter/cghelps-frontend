import React, {Component} from "react"
import styles from "./index.css"
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { DOM: {input, select, textarea} } = React


//let VolunteerApplication = props => {

class C2HForm extends Component {
    render() {
    return (
        <div className={styles.formHolder }>
            <form className={styles.formFit} action="https://formspree.io/rgaddis@cghelps.org"  method="POST" >
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
                        <label htmlFor="volunteerTimes"> Weekday Afternoons </label>
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
                    <div>
                        <input 
                            name="Weekend availability"
                            id="volunteerTimes"
                            component="input"
                            type="checkbox"
                            value="yes"
                        />
                        <label htmlFor="volunteerTimes"> Weekends </label>
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
                    <textarea name="Do you have personal and/or professional knowledge of topics such as domestic violence, mental health, suicide prevention, substance abuse, etc.?" type="textarea" component="textarea" className={styles.boxWidth} 
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
                        <textarea name="What sort of  seeking student credit, community service credit, or any other credit will you be receiving?" component="textarea" className={styles.boxWidth} 
                        />
                </div>
                <div>
                    <input type="submit" value="Send" className={styles.buttonContact}/>
                </div>
                    <input type="hidden" name="_next" value="/thank-you" />
            </div>
            </form>
        </div>
        )
    }
}

export default C2HForm;
