import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "isomorphic-fetch";
import "es6-promise";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(films => this.setState({ films: films }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1>Films</h1>
        {this.state.films.map(film => {
          return (
            <div key={film.id} className="card bg-light mx-5 my-3">
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Films;
