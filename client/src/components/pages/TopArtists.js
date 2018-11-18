import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class TopArtists extends Component {

    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <h1>Top Artists</h1>
                {this.props.topArtists.map(artist => JSON.stringify(_.pick(artist, 'name')))}
            </div>
        )
    }
}

function mapStateToProps({ topArtists }) {
    return { topArtists };
}

export default connect(mapStateToProps, null)(TopArtists);