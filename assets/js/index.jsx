'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
  render: function() {
    return <h1>Welcome to projects!</h1>;
  }
});

var Project = React.createClass({
  render: function() {
    return <div class="project-container card">
      <img src={this.props.src} />
      <div class="card-divider">Built majorly with {this.props.main_language}.</div>
      <div class="card-section">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <a href={this.props.link}>Check it out</a>
      </div>
    </div>;
  }
})

ReactDOM.render(<Header />, document.getElementById('header-title'));