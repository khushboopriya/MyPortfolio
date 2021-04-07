import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home.js';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);