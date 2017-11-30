import React from "react"
import ContactForm from "../ContactForm"

const SponsorQuestions = () => {

    var divSty = { 
        height: "100%",
        width:"100%",
        padding: "20px",
        marginTop: "100px",
        marginBottom: "200px"
    }
    
    var headerStyle  = {
        fontSize: "200%",
        fontWeight: "300",
        marginBottom: "40px",
        display: "flex",
        justifyContent: "center"
    }

    var paragraphStyle = {
        paddingLeft: "30px",
        paddingRight: "30px"
    }

    var linkStyle = {
        textAlign: "left",
        color: "blue"
    }       

    return (
        <div style={divSty}>
            <div style={headerStyle}>Become a Sponsor Today! </div>
            <p style={paragraphStyle}>
            We're always striving to increase awareness of Common Ground and our services. Help spread the word at events throughout our community. 
            please fill out the form below if you are interesting in helping us with our mission of <em> helping people move from crisis to hope.</em>
            </p>
            <ContactForm/>
        </div>
    )
}

export default SponsorQuestions
