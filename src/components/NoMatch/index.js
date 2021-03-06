import React from "react"
import styles from "./index.css"

const NoMatch = ({ location }) => (
        <div className={styles.noPlace}>
            <div className={styles.noMatch}>
                <h2> I'm afraid <code>{location.pathname}</code> doesn't appear to exist </h2>
            </div>
        </div>
)

export default NoMatch
