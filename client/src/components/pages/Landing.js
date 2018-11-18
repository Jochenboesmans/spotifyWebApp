import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Landing extends Component {

    renderContent() {
    }
}
    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <h1>
                    spotMySpotify
                </h1>
                <div>
                    See some cool data about your Spotify account
                </div>
                <div>
                    renderContent()
                    {this.props.auth ? Hello, {this.props.auth.name} : <div><a href="/auth/spotify">Log In To Spotify Account</a></div>
                        </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Landing);