import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import SignupForm from '../../components/SignupForm/SignupForm';
import * as Actions from '../../actions/auth';
import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }
  handleSignupClick(signupData) {
    this.props.signup(signupData);
  }
  render() {
    return (
      <div className="signup-page">
        <h2>Signup</h2>
        <SignupForm onLoginClick={ signupData => this.handleSignupClick(signupData) }/>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
