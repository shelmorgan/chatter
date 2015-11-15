import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import AccountDropdown from '../AccountDropdown/AccountDropdown';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    // this.state.account = this.props.loadAccount.bind(this);
  }
  static propTypes = {
    currentAccount: PropTypes.object
  };
  render() {
    if(this.props.currentAccount){
      return (<AccountDropdown currentAccount={ this.props.currentAccount } />)
    } else {
      return (<div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>)
    }
  }
}


export default AccountManager;
