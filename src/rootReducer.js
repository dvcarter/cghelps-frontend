import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import posts from "./postReducer";
import getHelpOptsReducer from "./getHelpOptsReducer";
import getHelpReducer from "./getHelpReducer";
import locationReducer from "./locationReducer";
import getInvolvedReducer from "./getInvolvedReducer";
import resourceReducer from "./resourceReducer";
import preventionReducer from "./preventionReducer";
import youthReducer from "./youthReducer";
import victimReducer from "./victimReducer";
import healthReducer from "./healthReducer";
import donateReducer from "./donateReducer";
import aboutUsReducer from "./aboutUsReducer";
import moreReducer from "./moreReducer";

const rootReducer = combineReducers({
    posts,
    getHelpOptsInfo: getHelpOptsReducer,
    getHelpInfo: getHelpReducer,
    getLocationInfo: locationReducer,
    getInvolvedInfo: getInvolvedReducer,
    resourceInfo: resourceReducer,
    preventionGroupInfo: preventionReducer,
    youthGroupInfo: youthReducer,
    victimGroupInfo: victimReducer,
    healthGroupInfo: healthReducer,
    donateInfo: donateReducer,
    moreInfo: moreReducer,
    aboutInfo: aboutUsReducer,
    form: formReducer
})

export default rootReducer;
