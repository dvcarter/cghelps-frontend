import React, { Component } from "react"
import { scaleLinear } from "d3-scale"
import { max } from "d3-array"
import { select } from "d3-selection"

export default class PieChart extends Component {
    constructor() {
        super()
            this.pie = d3.layout.pie()
                         .value((d) => d.value);
            this.colors = d3.scale.category10();
    }

    arcGenerator(d, i) {
        return (
                <LabeledArc key={`arc-${i}`}
                            data={d}
                            innerRadius={this.props.innerRadius}
                            outerRadius={this.props.outerRadius}
                            color={this.colors(i)} />
               );
    }

    createPieChart() {
    }
    render() {
    }
}
