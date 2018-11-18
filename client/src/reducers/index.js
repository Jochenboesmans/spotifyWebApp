import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { navigationReducer } from './navigationReducer';
import { topTracksReducer } from './topTracksReducer';
import { topArtistsReducer } from "./topArtistsReducer";

export default combineReducers({
    auth: authReducer,
    activePage: navigationReducer,
    topArtists: topArtistsReducer,
    topTracks: topTracksReducer
});