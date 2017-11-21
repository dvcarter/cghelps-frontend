import React, { Component } from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import styles from "./MoreWays.css"
import {selectMoreInfo} from "../../selectors/moreSelectors";

const mapState = (state) => ({
    moreInfo: selectMoreInfo(state)
})

class MoreWays extends Component {

    render() {
        const { moreInfo } = this.props
        const {moreWays} = moreInfo;
        return (
                <div className={styles.bigHolder}> 
                    <div className={styles.title}> More Ways to Give </div>
                    <div className={styles.optionsHolder}>
                    {moreWays.map((more) => (
                            <div className={styles.options}>
                                <img className={styles.image} alt="image here" src={more.img} />
                                <div className={styles.subtitle}> {more.title} </div>
                                <div className={styles.descriptions}> {more.description} </div>
                                {(more.btn.link === null) ? '' :
                                <a className={styles.moreWaysButton} href={more.btn.link}> {more.btn.label} </a>
                                }    
                        </div>
                        ))}
                    </div>
                </div>
        )
    }
}

MoreWays.propTypes = {
    moreWays: PropTypes.array.isRequired
}

export default connect(mapState)(MoreWays)

