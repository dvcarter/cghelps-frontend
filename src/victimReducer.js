import { createReducer } from "./utils/reducerUtils";
import victimsOfCrime from "./content/groups/victimsOfCrime/victimsOfCrime";

const defaultState = { 
    victimsOfCrime
}

export default createReducer( defaultState, {});
