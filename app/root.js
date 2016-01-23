import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './app-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


class Root extends Component {
  constructor(dev) {
    super();
    this.dev = dev || false;
  }
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <Provider store={this.props.store} className="Root">
        <AppRouter />
      </Provider>
    );
  }
}

export default Root;
