import {combineReducers} from "redux";
import posts from "./postReducer";
import getHelpOptsReducer from "./getHelpOptsReducer";

const rootReducer = combineReducers({
    posts,
    getHelpOptsInfo: getHelpOptsReducer,
})

export default rootReducer;
