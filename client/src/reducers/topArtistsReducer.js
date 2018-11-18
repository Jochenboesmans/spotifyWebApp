import { FETCH_TOP_ARTISTS } from "../actions/types";

export const topArtistsReducer  = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOP_ARTISTS:
            return action.payload || false;
        default:
            return state;
    }
};