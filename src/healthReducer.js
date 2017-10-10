import { createReducer } from "./utils/reducerUtils";
import physicalAndMentalHealth from "./content/groups/physicalAndMentalHealth/physicalAndMentalHealth";

const defaultState = { 
    physicalAndMentalHealth
}

export default createReducer( defaultState, {});
