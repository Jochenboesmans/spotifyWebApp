import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getFromAPI} from "../../APIRequests/getFromAPI";
import {FETCH_TOP_ARTISTS} from "../../APIRequests/operations";

class TopArtists extends Component {

  render() {
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <h1>Top Artists</h1>
        {getFromAPI(FETCH_TOP_ARTISTS).map(artist => JSON.stringify(_.pick(artist, 'name')))}
      </div>
    )
  }
}

export default connect(TopArtists);