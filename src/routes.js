import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

const Routes = (props) => (
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/:movieTitle" component={Movie}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
);

export default Routes;
