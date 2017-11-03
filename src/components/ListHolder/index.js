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
                                            Douglas Wright
                                        </div>
                                        <div className={styles.name}>
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Chair-Elect</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Don Campbell
                                        </div>
                                        <div className={styles.name}>
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
                                        {/*  Retired, Administrative Manager, US District Court */}
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Treasurer</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Gary Robb
                                        </div>
                                        <div className={styles.name}>
                                        {/*Financial Advisor, LJPR Financial Advisors*/}
                                        </div>
                                    </div>
                            </div>
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>Immediate Past Chair</div>
                                    <div className={styles.boardHold}>
                                       <div className={styles.position}>
                                            Kay White
                                        </div>
                                        <div className={styles.name}>
                                        {/* Assurance Partner, BDO */}
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
                                    <li> Gary Robb,  <em>CPA, Andrews Hooper Pavlik PLC</em> </li>
                                    <br/>
                                    <li> Tawana Nettles-Robinson <em>Executive Director, Trinity Health Care System </em></li>
                                    <br/>
                                    <li>Chris Ruen, <em>Community Volunteer</em></li>
                                    <br />
                                    <li>Douglas T. Smith, <em>Real Estate Development</em></li>
                                    <br />
                                    <li>Alexandra Stan, <em>Attorney</em></li>
                                    <br />
                                    <li>Kathy Walgren, <em>President, Nonprofit Leadership Excellence</em></li>
                                    <br />
                                    <li>Kevin B. Williams, <em>Court Administrator</em></li>
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
