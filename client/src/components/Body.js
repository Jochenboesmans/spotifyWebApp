import {Component} from 'react';
import {connect} from 'react-redux';

/**
 * Returns the view of the currently active page.
 */
class Body extends Component {
  render() {
    return this.props.activePage.view
  }
}

function mapStateToProps({activePage}) {
  return {activePage};
}

export default connect(mapStateToProps, null)(Body);
