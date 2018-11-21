import {FETCH_USER, SET_PAGE} from "./types";


/* Action creator functions
 */
export const setPage = (buttonPage) => dispatch => {
  dispatch({type: SET_PAGE, payload: buttonPage});
};

export const fetchUser = () => async dispatch => {
  const result = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: result.data});
};