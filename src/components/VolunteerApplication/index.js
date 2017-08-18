import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm, formValueSelector } from "redux-form"

const { DOM: {input, select, textarea} } = React

let VolunteerApplication = props => {
    const { handleSubmit, hasRightSelection } = props
    return (
            <form onSubmit={ handleSubmit }>
                {/* Form Body */}
                <div>
                    <label htmlFor="firstName">First Name*</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name*</label>
                    <Field name="lastName" component="input" type="text" />
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
                        <Field name="volunteerArea" component="input" type="radio" value="telephone"/>
                        <label>Telephone</label>
                    </div>
                    <div>
                        <Field name="volunteerArea" component="input" type="radio" value="chat" />
                        <label>Chat</label>
                    </div>
                    <div>
                        <Field name="volunteerArea" component="input" type="radio" value="text" />
                        <label>Text</label>
                    </div>
                    <div>
                        <Field name="volunteerArea" component="input" type="radio" value="face-to-face"/>
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
