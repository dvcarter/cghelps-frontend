import React, {Component, PropTypes} from 'react';
import { connect } from "react-redux";
import Main from "./Main";

function mapStateToProps(state) {
    return {
        getHelpOpts: state.getHelpOptsInfo
    }
}

const App = connect(mapStateToProps)(Main);

export default App;
