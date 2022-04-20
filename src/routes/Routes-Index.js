import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rout from './Rout';
import Home from '../pages/Home';

export default function Routes() {
  return (

      <Router>
        <h1> Welcome Hallo World</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home2">Home2</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/home2'>
            <Rout/>
        </Route>
          </Switch>
      </Router>
  )
}
