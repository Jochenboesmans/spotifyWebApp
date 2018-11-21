import React, {Component} from 'react';
import Body from "./Body";
import Header from "./Header";
import {connect} from 'react-redux';
import {Login} from "./Login";

class Main extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Login/>
          </div>
        );
      default:
        return (
          <div>
            <Header/>
            <Body/>
          </div>
        )
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps, null)(Main);