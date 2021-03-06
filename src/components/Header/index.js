import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import PropTypes from "prop-types"
import Svg from "react-svg-inline"
import Logo from "./cg-logo.svg"
import ChatBubble from "./../../content/assets/chatbubbles.png"
import handleClickAway from "./handleClickAway.js"
import styles from  "./header.css"


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
        const mobileNav = ( sideNavOpen ) ? styles.open : ''
        const openClass = ( sideNavOpen ) ? styles.animate : ''
        const containerStyle = ( fullWidth ) ? styles.fullWidth : ''
        return (
            <div>
                <header className={styles.header}>
                        <div className={styles.supHeader}>
                            Do you need help? We're here for you 24 / 7.&nbsp;  
                            <span>Call <strong><a href="tel:18002311127">1.800.231.1127 </a></strong></span>
                       &nbsp; <strong>| Chat </strong> <Link to="/get-help/chat-with-us"><img className={styles.bubble} src={ChatBubble} /> </Link>
                        </div>
                        <div className={styles.bumper}/>
                        <div className={styles.navFixed}>
                            <div className={`${styles.navWrapper} ${containerStyle}`}>
                                <div className={styles.navLeft}>
                                    <Link to='/' className={styles.logo}>
                                        <Svg
                                            svg={Logo}
                                            draggable='false'
                                            height="100px"
                                            width="180px"
                                        />
                                    </Link>
                                </div>
                                <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
                                    <div className={styles.ham}>
                                        <div className={`${styles.bar} ${openClass}`}/>
                                    </div>
                                </div>
                                <nav className={`${styles.navRight} ${mobileNav}`}>
                                    <ul className={styles.navItems}>
                                        <li className={styles.navItem}>
                                            <Link to='/get-help' className={styles.link}>
                                                {"Get Help"}
                                            </Link>
                                            <ul className={styles.subNavItems}>
                                                <li>
                                                    <Link to='/get-help/chat-with-us' className={styles.link}>
                                                        {"Chat"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/visit' className={styles.link}>
                                                        {"Visit"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-help/faq' className={styles.link}>
                                                        {"Frequently Asked Questions"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to='/get-involved' className={styles.link}>
                                                {"Get Involved"}
                                            </Link>
                                            <ul className={styles.subNavItems}>
                                                <li>
                                                    <Link to='/get-involved/crisis-to-hope' className={styles.link}>
                                                        {"Crisis to Hope"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/volunteer' className={styles.link}>
                                                        {"Volunteer"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/fundraising' className={styles.link}>
                                                        {"Fundraising"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/sponsorships' className={styles.link}>
                                                        {"Sponsorships"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-involved/cacgroup' className={styles.link}>
                                                        {"Consumer Feedback"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to='/resources' className={styles.link}>
                                                {"Resources"}
                                            </Link>
                                            <ul className={styles.subNavItems}>
                                                <li>
                                                    <Link to='/resources/suicide-prevention' className={styles.link}>
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
                                                    <Link to='/resources/youth-and-family' className={styles.link}>
                                                        {"Youth & Family Support"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/resources/victims-of-crime' className={styles.link}>
                                                        {"Victims of Crime support"}
                                                    </Link>
                                                </li>
                                                {/*
                                                <li>
                                                    <Link to='/resources/physical-and-mental-health' className={styles.link}>
                                                        {"Physical & Mental Health support"}
                                                    </Link>
                                                </li>*/}
                                                <li>
                                                    <Link to='/resources/community-resources' className={styles.link}>
                                                        {"Community Resources"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to='/donate' className={styles.link}>
                                                {"Donate"}
                                            </Link>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to='/about-us' className={styles.link}>
                                                {"About Us"}
                                            </Link>
                                            <ul className={styles.subNavItems}>
                                                <li>
                                                    <Link to='/about-us/our-story' className={styles.link}>
                                                        {'Our Story'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/visit' className={styles.link}>
                                                        {"Locations"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/get-help' className={styles.link}>
                                                        {"Programs & Services"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/posts' className={styles.link}>
                                                        {"News & Events"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/news-and-media' className={styles.link}>
                                                        {"News & Media"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <HashLink to='/about-us/#Careers' className={styles.link}>
                                                        {"Careers"}
                                                    </HashLink>
                                                </li>
                                                <li>
                                                    <Link to='/about-us/governance' className={styles.link}>
                                                        {"Governance"}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/about-us/leadership' className={styles.link}>
                                                        {"Leadership"}
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
