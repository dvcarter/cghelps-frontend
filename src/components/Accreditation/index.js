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

    var accred = {
        width: "20%"
    }

    return (
        <div style={divStyle}>
            <div style={headerStyle}> Accreditation </div>
            <a style={accredStyle} href="http://www.carf.org/providerProfile.aspx?cid=30296&parent=1">
                <img style={accred} src={accredImg} />
            </a>
        </div>
    )
}

export default Accreditation
