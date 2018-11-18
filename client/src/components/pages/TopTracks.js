import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';


class TopTracks extends Component {
    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <h1>Top Tracks</h1>
                {this.props.topTracks.map(track => JSON.stringify(_.pick(track, 'name')))}
            </div>
        )
    }
}

function mapStateToProps( { topTracks }) {
    return { topTracks }
}

export default connect(mapStateToProps, null)(TopTracks);