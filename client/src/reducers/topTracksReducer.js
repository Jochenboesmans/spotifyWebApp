import { FETCH_TOP_TRACKS } from "../actions/types";

export const topTracksReducer  = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOP_TRACKS:
            return action.payload || false;
        default:
            return state;
    }
};