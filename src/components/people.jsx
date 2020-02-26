import React, { Component } from "react";
import "isomorphic-fetch"
import "es6-promise"

class People extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(reponse => {
        return reponse.json();
      })
      .then(obj => console.log(obj));
    console.log(this.props.match);
  }

  render() {
    return <h1>People</h1>;
  }
}

export default People;
