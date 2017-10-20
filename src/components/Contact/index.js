import React from "react"
import ContactForm from "../ContactForm"

const Contact = () => {

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
            <div style={headerStyle}>Contact Us Today </div>
            <p style={paragraphStyle}>If you are in need of crisis assistance or
            would like resources related to crisis assistance, please call our crisis line
            at <br /><a style={linkStyle} href="tel:18002311127">1-800-231-1127</a>. If you are not currently 
            experiencing a crisis and would like to contact our administration office,
            please fill out the form below.
            </p>
            <ContactForm/>
        </div>
    )
}

export default Contact
