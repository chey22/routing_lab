import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./home";
import Films from "./films";
import People from "./people";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {/*Link components compile to a regular anchor tag, but in React, we need to use Link. You can specify a className too. //This is only for internal links. Use anchor tags for external links.*/}
          <Link to="/">
            <button type="button">Go Home</button>
          </Link>
          <Link to="/films">
            <button type="button">View Films</button>
          </Link>
          <Link to="/people">
            <button type="button">View People</button>
          </Link>
          <Switch>
            {/*} when you have an exact attribute specified on a Route component, it tells the React Router than unless this path in the address bar of the browser is an exact match to what's defined in the code, then you don't need to render this component*/}
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route path="/" component={Home} />
            {/*} when you just have path with no exact path, it could find a completely different component than you specified*/}
            {/* the id should correspond to a specific film id that you put in the url*/}
            {/* <Route path="/films/:id" component={} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
