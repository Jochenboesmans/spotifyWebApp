import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FETCH_CURRENT_USER_PROFILE} from "../../APIRequests/operations";
import {getFromAPI} from "../../APIRequests/getFromAPI";

class Landing extends Component {

  render() {
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <h1>
          spotMySpotify
        </h1>
        <div>
          Welcome, {getFromAPI(FETCH_CURRENT_USER_PROFILE).display_name}!
        </div>
      </div>
    )
  }
}

export default connect(Landing);