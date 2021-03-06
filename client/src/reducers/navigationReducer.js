import {SET_PAGE} from "../actions/types";
import {pages} from "../model/pages";

const landingPage = pages.find(page => page.id === 0);

export const navigationReducer = (state = landingPage, action) => {
  switch (action.type) {
    case SET_PAGE:
      console.log(`state change: activePage: ${action.payload}`);
      return action.payload || false;
    default:
      return state;
  }
};