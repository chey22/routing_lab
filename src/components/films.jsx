import React, { Component } from "react";
import "isomorphic-fetch"
import "es6-promise"

class Films extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(reponse => {
        return reponse.json();
      })
      .then(obj => console.log(obj));
    console.log(this.props.match);
  }

  render() {
    return <h1>Films</h1>;
  }
}

export default Films;
