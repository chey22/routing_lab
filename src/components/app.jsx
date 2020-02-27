import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Nav from "./nav";
import Films from "./films";
import SingleFilm from "./singleFilm";
import People from "./people";
import SinglePerson from "./singlePerson"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/films" component={Films} />
          <Route exact path="/films/:id" component={SingleFilm} />
          <Route exact path="/people" component={People} />
          <Route exact path="/people/:id" component={SinglePerson} />
        </Switch>
      </Router>
    );
  }
}

export default App;
