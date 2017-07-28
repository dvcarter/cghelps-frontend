import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { Link } from "react-router-link"


import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
) => {

  return (
    <div className="page">
      <div className={ "wrapper" + " " + "pageContent" }>
        { header }
        <div className="body" >
            { body }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
