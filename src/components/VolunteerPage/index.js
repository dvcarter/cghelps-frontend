import React, { Component } from "react"
import VolunteerApplication from "../VolunteerApplication";
import styles from "./index.css";

class VolunteerPage extends Component {
    submit = (values) => {
        // print the form values to the console
        console.log(values)
    }

    render() {
        return (
                <div className={styles.noPlace}>
                    <h1> Volunteer Application </h1>
                    <VolunteerApplication onSubmit={this.submit} />
                </div>
        )
    }
}

export default VolunteerPage
