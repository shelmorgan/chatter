import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <h2>Chatter</h2>
        <p>Simple messaging app built with react and
          <a href="https://github.com/KyperTech/matter"> Matter</a>
        </p>
        <p>See more here:
          <a href="https://github.com/shelmorgan/chatter"> GitHub</a>
        </p>
      </div>
    )
  }
}
