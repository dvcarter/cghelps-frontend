import React, { PropTypes } from 'react'
import styles from "./ListHolder.css"

const ListHolder = ({ listHolder }) => {
    return (
            <div className={styles.holder}>
                <div className={styles.options}>
                        <div> Board of Trustees </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Board Chair</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Kay White
                                        </div>
                                        <div className={styles.name}>
                                            Community Volunteer
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Chair-Elect</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Doug Wright
                                        </div>
                                        <div className={styles.name}>
                                            Principal, Gordon Advisors, PC
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Secretary</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Judy Christie
                                        </div>
                                        <div className={styles.name}>
                                            Retired, Administrative Manager, US District Court
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Secretary</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Laurie Marshall
                                        </div>
                                        <div className={styles.name}>
                                            Financial Advisor, LJPR Financial Advisors
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Immediate Past Chair</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Cathy McNamara
                                        </div>
                                        <div className={styles.name}>
                                            Assurance Partner, BDO
                                        </div>
                                    </div>
                            </div>
                </div>
                <div className={styles.options}>
                    <div className={styles.subOptions} >
                            <div className={styles.subBoard}>
                                <ul>
                                    <li>Barbara Belkiewicz, <em>Community Volunteer</em></li>
                                    <br />
                                    <li>Don Campbell, <em>Retired Attorney</em></li>
                                    <br />
                                    <li>Eric Dobrusin, <em>Attorney, The Dobrusin Law Firm, PC</em></li>
                                    <br />
                                    <li>James Kohlenberg, MD <em>Physician, John R Medical Clinic</em></li>
                                    <br />
                                    <li>Darren Lubbers, PhD <em>Consultant</em></li>
                                    <br />
                                    <li>Lisa Mason <em>Vice President, Program Partnerships, GDAHC</em></li>
                                    <br />
                                    <li>Sharon R. McMurray <em>Principal, SR McMurray Communications, LLC </em></li>
                                    <br />
                                    <li>Greg Moore <em>Attorney & Behavioral Health Care Practice</em></li> 
                                </ul>
                            </div>
                            <div className={styles.subBoard}>
                                <ul>
                                    <li> Gary Robb </li>
                                    <li> CPA, Andrews Hooper Pavlik PLC </li>
                                    <br/>
                                    <li> Tawana Nettles-Robinson </li>
                                    <li> Executive Director, Trinity Health Care System </li>
                                    <br/>
                                    <li>Chris Ruen</li>
                                    <li>Community Volunteer</li>
                                    <br />
                                    <li>Douglas T. Smith</li>
                                    <li>Real Estate Development</li>
                                    <br />
                                    <li>Alexandra Stan</li>
                                    <li>Attorney</li>
                                    <br />
                                    <li>Kathy Walgren</li>
                                    <li>President, Nonprofit Leadership Excellence</li>
                                    <br />
                                    <li>Kevin B. Williams</li>
                                    <li>Court Administrator</li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
    )
}

ListHolder.propTypes = {
    listHolder: PropTypes.array.isRequired,
}

export default ListHolder
