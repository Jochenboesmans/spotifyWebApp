import {FETCH_USER} from "../actions/types";

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(`state change: auth: ${action.payload}`);
      return action.payload || false;
    default:
      return state;
  }
};