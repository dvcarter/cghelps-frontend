import React, { PropTypes, Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
// import MediaQuery from "react-responsive"
import Svg from "react-svg-inline"
import Logo from "./cg-logo.svg"
//import Phone from "./telephone-handle-silhouette.png"
//import People from "./group-profile-users.png"
//import Resource from "./plus-button.png"
//import Menu from "./menu-alt.png"

// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

// import styles from "./index.css"
import handleClickAway from "./handleClickAway.js"
import "./header.css"


const propTypes = {
    fullWidth: PropTypes.bool
}


export default class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            sideNavOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }
    componentDidMount() {
        document.body.addEventListener('click', this.closeNav)
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.closeNav)
    }
    closeNav(e) {
        const toggleNode = this.refs.toggle
        const isOutsideClick = handleClickAway(toggleNode, e)
        if (toggleNode && isOutsideClick) {
            this.setState({
                sideNavOpen: false
            })
        }
    }
    handleClick() {
        this.setState({
            sideNavOpen: !this.state.sideNavOpen
        })
    }
    render() {
        const { fullWidth } = this.props
        const { sideNavOpen } = this.state
        const mobileNav = ( sideNavOpen ) ? "open" : ''
        const openClass = ( sideNavOpen ) ? "animate" : ''
        const containerStyle = ( fullWidth ) ? "fullWidth" : ''
        return (
            <div>
                <header className="header">
                        <div className="supHeader">
                            Do you need help? We're here for you 24 / 7.&nbsp;  
                            <span>Call <strong><a href="tel:18002311127">1.800.231.1127</a></strong></span>
                        </div>
                        <div className="bumper"/>
                        <div className="navFixed">
                            <div className="navWrapper containerStyle">
                                <div className="navLeft">
                                    <Link to='/' className="logo">
                                        Logo goes here
                                    </Link>
                                </div>
                                <div ref='toggle' onClick={this.handleClick} className="toggle">
                                    <div className="ham">
                                        <div className={`bar ${openClass}`}/>
                                    </div>
                                </div>
                                <nav className={`navRight ${mobileNav}`}>
                                    <ul className="navItems">
                                        <li className="navItem">
                                            <Link to='/get-help' className="link">
                                                {"Get Help"}
                                            </Link>
                                            <ul className="subNavItems">
                                                <li>
                                                    <a href={'/get-help/chat-with-us'} className="link">
                                                        {"Chat"}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={'/get-help/visit'} className="link">
                                                        {"Visit"}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/get-help/faq' className="link">
                                                        {"Frequently Asked Questions"}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navItem">
                                            <Link to='/get-involved' className="link">
                                                {"Get Involved"}
                                            </Link>
                                            <ul className="subNavItems">
                                                <li>
                                                    <Link to='/get-involved/crisis-to-hope' className="link">
                                                        {"Crisis to Hope"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/volunteer' className="link">
                                                        {"Volunteer"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/sponsorships' className="link">
                                                        {"Sponsorships"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navItem">
                                            <Link to='/resources' className="link">
                                                {"Resources"}
                                            </Link>
                                            <ul className="subNavItems">
                                                <li>
                                                    <Link to='/resources/suicide-prevention' className="link">
                                                        {"Suicide Prevention"}
                                                    </Link>
                                                </li>
                                                {/*
                                                <li>
                                                    <Link to='/resources/substance-abuse-support' className={styles.link}>
                                                        {"Substance Abuse Support"}
                                                    </Link>
                                                </li> */}
                                                <li>
                                                    <Link to='/resources/youth-and-family' className="link">
                                                        {"Youth & Family Support"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/resources/victims-of-crime' className="link">
                                                        {"Victims of Crime support"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/resources/physical-and-mental-health' className="link">
                                                        {"Physical & Mental Health support"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="navItem">
                                            <Link to='/donate' className="link">
                                                {"Donate"}
                                            </Link>
                                        </li>
                                        <li className="navItem">
                                            <Link to='/about-us' className="link">
                                                {"About Us"}
                                            </Link>
                                            <ul className="subNavItems">
                                                <li>
                                                    <Link to='/about-us/our-story' className="link">
                                                        {'Our Story'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/about-us/visit-us-today' className="link">
                                                        {"Locations"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-help' className="link">
                                                        {"Programs & Services"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/posts' className="link">
                                                        {"News & Events"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/about-us/#Careers' className="link">
                                                        {"Careers"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/about-us/governance' className="link">
                                                        {"Governance & Leadership"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                </header>
            </div>
        )
    }
}

Header.propTypes = propTypes
