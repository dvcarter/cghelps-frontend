import React, { PropTypes } from "react"

import "./index.css"

const Content = (props) => (
  <div className="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
