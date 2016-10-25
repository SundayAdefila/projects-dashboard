import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Header extends React.Component {
  render() {
    return <div className="center-align white-text indigo lighten-2" id="header-title">
      <h1>github projects.</h1>
    </div>;
  }
};

class Project extends React.Component {
  render() {
    const {name, description, language, html_url} = this.props.repo;

    return <div className="col s12 m6 l4">
      <div className="card medium hoverable">
        <div className="card-image">
          <img src="http://lorempixel.com/g/400/200/" />
          <span className="card-title">{name} ({language})</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={html_url}>Check it out on github</a>
        </div>
      </div>
    </div>;
  }
};

const makeProjects = (data) => {
  if (data.length) {
    return data.map((repo, index) => (
      <Project key={index} repo={repo} />
    ));
  }
  
  return <h4 className="text-center text-danger">Some error occured from the API, projects could not be gotten... Maybe try again tomorrow? smiley :D</h4>;
};

class Projects extends React.Component {
  constructor() {
    super();
    this.state = { github_projects: [] };
  }

  componentWillMount() {
    axios.get('https://api.github.com/users/sundayadefila/repos')
    .then((response) => {
      this.setState({ github_projects: response.data })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const projects = makeProjects(this.state.github_projects);

    return <div className="row">
      { projects }
    </div>;
  }
};

const Page = React.createClass({
  render: () => {
    return <div>
      <Header />
      <Projects />
    </div>
  }
});

ReactDOM.render(<Page />, document.getElementById('projects'));