'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
  render: function() {
    return <h1>Welcome to projects!</h1>;
  }
});

ReactDOM.render(<Header />, document.getElementById('header-title'));