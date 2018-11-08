import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Landing } from './Landing';

import Header from './Header';
import TopArtistsPage from './TopArtistsPage';
import TopTracksPage from './TopTracksPage';


/* Parent component that renders all other components as a react router.
    The header is always rendered.
 */
class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/top-artists" component={TopArtistsPage}/>
                        <Route exact path="/top-tracks" component={TopTracksPage}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);