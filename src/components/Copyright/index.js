import React from "react"

const Copyright = () => {

    var headerStyle  = { 
        fontSize: "200%",
        fontWeight: "300",
        marginBottom: "40px",
        display: "flex",
        justifyContent: "center"
    }    


    var divStyle = {
        height: "100%",
        width: "100%",
        padding: "10px",
        marginTop: "200px",
        marginBottom: "200px"
    }
    
    var linkStyle = {
        color: "blue"
    }
    
    return (
        <div style={divStyle}>
                <div style={headerStyle}>Copyright</div>
                All materials contained on the Common Ground website are protected 
                under the U.S. and Foreign Copyright Laws.
                <br/>
                Permission to reproduce such materials may be required. Please email questions to: 
                 <a style={linkStyle} href="mailto:askcommonground@commongroundhelps.org">askcommonground@commongroundhelps.org</a>.
                <br/>
                <br/>
                Common Ground retains all rights to the information provided by its websites including, but not 
                limited to, the right of distribution. These documents may be freely distributed and used for non-commercial and educational purposes.


        </div>
    )
}

export default Copyright
