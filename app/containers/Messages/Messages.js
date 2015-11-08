import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../actions/messages';
import './Messages.scss';

class Messages extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //***&HEADER
    // This could also be replaced with adding a header class instead of doing the &
    //(see matching comment in Messages.scss)
    return (
      <div className="Messages">
        <div className="Messages-Header">
          <h1>Messages</h1>
          <ul>
            <li>first item</li>
            <li>second item</li>
          </ul>
        </div>
      </div>
    );
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
