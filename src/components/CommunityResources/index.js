import React, { PropTypes } from 'react'
import styles from "./ChatHolder.css"

const CommunityResources =() => {
    return (
            <div className={styles.divHolder}>
                <div className={styles.title2}> Community Resources</div>
                    <iframe id="iFrameMain" src="https://www.iCarol.info/Launch.aspx?Org=2194" frameBorder="0" scrolling="no" style={{width:'100%', height:'1200px'}} />
            
            </div>
    )

}


export default CommunityResources
