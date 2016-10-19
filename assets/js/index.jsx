'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var Header = React.createClass({
  render: function() {
    return <h1>My github projects.</h1>;
  }
});

var Project = React.createClass({
  render: function() {
    return <div className="col s12 m6 l4">
      <div className="card medium hoverable">
        <div className="card-image">
          <img src="http://lorempixel.com/g/400/200/" />
          <span className="card-title">{this.props.repo_name} ({this.props.major_language})</span>
        </div>
        <div className="card-content">
          <p>{this.props.description}</p>
        </div>
        <div className="card-action">
          <a href={this.props.html_url}>Check it out on github</a>
        </div>
      </div>
    </div>;
  }
});

var makeProjects = function(data) {
  if (data.length > 0) {
    return data.map((repo, index) => (
      <Project key={index} repo_name={repo.name} major_language={repo.language} description={repo.description} html_url={repo.html_url} />
    ));
  }
  else return <h4 className="text-center text-danger">Some error occured from the API, projects could not be gotten... Maybe try again tomorrow? smiley :D</h4>;
};

var Projects = React.createClass({
  getInitialState: function() {
    return { github_projects: [] };
  },

  componentWillMount: function() {
    axios.get('https://api.github.com/users/sundayadefila/repos')
    .then((response) => {
      this.setState({ github_projects: response.data })
    })
    .catch((error) => {
      console.log(error);
    });
  },

  render: function() {
    const projects = makeProjects(this.state.github_projects);

    return <div className="row">
      { projects }
    </div>;
  }
});

ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Header />, document.getElementById('header-title'));