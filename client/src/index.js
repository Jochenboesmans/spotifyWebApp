import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route } from "react-router-dom";

/**
 * Initializes global store with active page of index 0 (landing page).
 */
const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><Route exact path="/" component={App}/></BrowserRouter></Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
