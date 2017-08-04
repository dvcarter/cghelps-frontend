import { createReducer } from "./reducerUtils";
import getHelp from "./content/get-help/getHelp";

const defaultState = {
    getHelp
}

export default createReducer(defaultState, {} );
