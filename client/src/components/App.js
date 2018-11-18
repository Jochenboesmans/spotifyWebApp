import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import { connect }  from 'react-redux';
import * as actions from '../actions'

/* Parent component that renders all other components as a react router.
    The header is always rendered.
 */

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchTopArtists();
        this.props.fetchTopTracks();
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <Body/>
            </div>
        )
    }
}

export default connect(null, actions)(App);