import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm, formValueSelector } from "redux-form"

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
                    <label>
                        <Field name="felonyArea" component="input" type="radio" value="yes" />
                        Yes
                    </label>
                </div>
                <div>
                    <label>
                        <Field name="felonyArea" component="input" type="radio" value="no" />
                        No
                    </label>
                </div>
                <div> 
                    <br />
                    <label>
                        <Field name="volunteerArea" component="input" type="radio" value="telephone"/>
                        Telephone
                    </label>
                    <label>
                        <Field name="volunteerArea" component="input" type="radio" value="chat" />
                        Chat
                    </label>
                    <label>
                        <Field name="volunteerArea" component="input" type="radio" value="text" />
                        Text
                    </label>
                    <label>
                        <Field name="volunteerArea" component="input" type="radio" value="face-to-face"/>
                        Face-to-Face
                    </label>
                </div>
                {(hasRightSelection == "face-to-face") &&
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
