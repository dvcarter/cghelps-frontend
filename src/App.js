import React from 'react';
import { connect } from "react-redux";

import Main from "./Main";

function mapStateToProps(state) {
    return {
        getHelp: state.getHelpInfo,
    }
}

const App = connect(mapStateToProps)(Main);

export default App;
