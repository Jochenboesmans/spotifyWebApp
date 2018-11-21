import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Main from "./Main";

/* Parent component that renders all other components as a react router.
    The header is always rendered.
 */

class App extends Component {

  render() {
    return (
      <div className="container">
        <Main/>
      </div>
    )
  }
}

export default connect(null, actions)(App);