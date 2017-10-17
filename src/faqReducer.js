import { createReducer } from "./utils/reducerUtils";
import askFaq from "./content/faq/askFaq";

const defaultState = {
    askFaq
}

export default createReducer( defaultState, {} );
