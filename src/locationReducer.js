import { createReducer } from "./utils/reducerUtils";
import getLocations from "./content/locations/getLocations";

const defaultState = {
    getLocations
}

export default createReducer( defaultState, {});
