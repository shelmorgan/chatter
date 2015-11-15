import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h2>Chatter</h2>
        <p>Simple messaging app built with React.js and <a href="https://github.com/KyperTech/matter"> Matter </a> using <a href="https://github.com/KyperTech/webpack-redux-react-starter"> Webpack-Redux-React</a></p>
        <p>See more here:
          <a href="https://github.com/shelmorgan/chatter"> GitHub</a>
        </p>
      </div>
    )
  }
}
