import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import Brewery from './Brewery';
import Form from './Form';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/oluet" component={Beers}/>
      <Route path="/panimo" component={Brewery}/>
      <Route path="/contact" component={Form} />
    </Switch>
  </main>
)

export default Routes;
