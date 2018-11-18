import axios from 'axios';
import { FETCH_USER, SET_PAGE,
    FETCH_TOP_TRACKS, FETCH_TOP_ARTISTS} from "./types";

/* Action creator functions
 */
export const fetchUser = () => async dispatch => {
        const result = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: result.data});
    };
export const fetchTopArtists = () => async dispatch => {
        const result = await axios.get('/api/top-artists');
        dispatch({type: FETCH_TOP_ARTISTS, payload: result.data});
    };
export const fetchTopTracks = () => async dispatch => {
        const result = await axios.get('api/top-tracks');
        dispatch({type: FETCH_TOP_TRACKS, payload: result.data});
    };
export const setPage = (buttonPage) => dispatch => {
    dispatch({ type: SET_PAGE, payload: buttonPage});
    };