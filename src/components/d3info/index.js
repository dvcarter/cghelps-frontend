import React, { Component } from "react"
import BarChart from '../D3Bars'

export default class d3info extends Component {
    render() {
        return (
                <div>
                    <div>
                        <h2> Impact </h2>
                    </div>
                    <h4> Jail Diversion </h4>
                    <BarChart data={[5,10,1,3]} size={[200,200]} />
                    <BarChart data={[1,2,3,4,20]} size={[200,200]} />
                    <BarChart data={[1, 20,1,4,10]} size={[200,200]} />
                    <br />
                        $5 million saved by diverting 431 people from oakland county jails
                    <h4> Improving Outcomes </h4>
                        3,850 people treated
                        $5.3 million saved by avoiding behavioral units
                    <h4> Emergency Department Boarding </h4>
                        Improved wait times by avoiding emergency department 
                        3,500 people 
                    <h4> Reducing Distress </h4>
                        50,000 calls with 83% measured improvement by end of call
                </div>
               )
    }
}

