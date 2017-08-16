import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import posts from "./postReducer";
import getHelpOptsReducer from "./getHelpOptsReducer";
import getHelpReducer from "./getHelpReducer";
import getInvolvedReducer from "./getInvolvedReducer";
import resourceReducer from "./resourceReducer";
import donateReducer from "./donateReducer";
import aboutUsReducer from "./aboutUsReducer";

const rootReducer = combineReducers({
    posts,
    getHelpOptsInfo: getHelpOptsReducer,
    getHelpInfo: getHelpReducer,
    getInvolvedInfo: getInvolvedReducer,
    resourceInfo: resourceReducer,
    donateInfo: donateReducer,
    aboutInfo: aboutUsReducer,
    form: formReducer
})

export default rootReducer;
