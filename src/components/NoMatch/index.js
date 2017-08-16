import React from "react"

const NoMatch = ({ location }) => (
        <div>
            <h3> I'm afraid <code>{location.pathname}</code> doesn't appear to exist </h3>
        </div>
)

export default NoMatch
