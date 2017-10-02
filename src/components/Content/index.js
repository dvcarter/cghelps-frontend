import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import styles from "./page.css"

const Content = (props) => (
  <div className="content">
       {/* <div
          className={ styles.hero }
        >
          <div className={ styles.header }>
            <div className={ styles.wrapper }>
              <h1 className={ styles.heading }>This is where the Hero Goes</h1>
            </div>
          </div>
        </div>*/}
      <div className={ styles.wrapper + " " + styles.pageContent }>
        <div className={ styles.body }>
          {
            props.children
          }
        </div>
      </div>
    </div> 
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
