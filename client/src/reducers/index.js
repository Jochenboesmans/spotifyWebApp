import {combineReducers} from 'redux';
import {navigationReducer} from './navigationReducer';
import {authReducer} from "./authReducer";

export default combineReducers({
  auth: authReducer,
  activePage: navigationReducer,
});