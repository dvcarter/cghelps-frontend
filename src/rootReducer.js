import {combineReducers} from "redux";
import posts from "./postReducer";
import getHelpReducer from "./getHelpReducer";

const rootReducer = combineReducers({
    posts,
    getHelpInfo: getHelpReducer,
})

export default rootReducer;
