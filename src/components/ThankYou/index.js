import React from "react"
import styles from "./index.css"
import accredImg from "../../content/assets/carf.jpg"

const Accreditation = () => {
 
   var divStyle = {
        height: "100%",
        width: "100%",
        padding: "10px",
        marginTop: "200px",
        marginBottom: "50px"
    } 
  
    var headerStyle  = { 
        fontSize: "200%",
        fontWeight: "300",
        marginBottom: "40px",
        display: "flex",
        justifyContent: "center"
    }  
  
    var accredStyle = {
        border: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    var thanksStyle = {
        fontSize: "150%"
    }

    var accred = {
        width: "20%"
    }

    return (
        <div style={divStyle}>
            <div style={headerStyle}> Thank you! </div>
            <div>
                <p> Thank you for expressing interest in joining our team! Someone should be in contact with you in the next few days in order to inform you of application's status </p>
            </div>
            <a style={accredStyle} href={"/"}>
                <h4 style={thanksStyle}>Back to Home Page </h4>
            </a>
        </div>
    )
}

export default Accreditation
