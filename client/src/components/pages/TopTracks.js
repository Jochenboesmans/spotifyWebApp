import React, {Component} from 'react';
import _ from "lodash";
import {connect} from 'react-redux';
import {getFromAPI} from "../../APIRequests/getFromAPI";
import {FETCH_TOP_TRACKS} from "../../APIRequests/operations";


class TopTracks extends Component {

  render() {
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <h1>Top Tracks</h1>
        {getFromAPI(FETCH_TOP_TRACKS).map(track => JSON.stringify(_.pick(track, 'name')))}
      </div>
    )
  }
}

export default connect(TopTracks);