import React, { Component } from "react";

import "isomorphic-fetch"
import "es6-promise"

class People extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => response.json())
      .then(people => this.setState({ people: people }))
      .catch(err => console.log(err));
    console.log(this.props.match);
  }

  render() {
    return <h1>People</h1>;

  }
}

export default People;
