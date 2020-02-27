import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as GhibliLogo from "../images/logo.png"

class Nav extends Component {
  render() {
    return (
      <Fragment>
 
        <Link to="/">
          <button type="button">Go Home</button>
        </Link>
        <Link to="/films">
          <button type="button">View Films</button>
        </Link>
        <Link to="/people">
          <button type="button">View People</button>
        </Link>
        <img src={GhibliLogo} />
      </Fragment>
    );
  }
}

export default Nav;
