import React, {Component} from 'react';
import * as actions from "../actions";
import {pages} from "../model/pages";
import {connect} from "react-redux";

/*
Functional Header component creating a list of buttons for each supplied page.
 */

class Header extends Component {

  renderButton(page) {
    return (
      <button key={page.id}
              onClick={() => this.props.setPage(page)}
              style={(this.props.activePage === page) ? {fontWeight: "bold"} : null}
      >
        {page.name}
      </button>
    )
  }

  render() {
    return (
      <div className="nav-wrapper" style={{textAlign: "center"}}>
        {pages.map((page) => this.renderButton(page))}
      </div>
    )
  }
}

function mapStateToProps({activePage}) {
  return {activePage}
}

export default connect(mapStateToProps, actions)(Header);