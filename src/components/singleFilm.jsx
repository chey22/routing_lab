import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "isomorphic-fetch";
import "es6-promise";

class SingleFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(film => this.setState({ film: film }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1>Films</h1>
        <div className="card bg-light mx-5 my-3">
          <div className="card-body">
            <h5 className="card-title">{this.state.film.title}</h5>
            <p className="card-text">{this.state.film.release_date}</p>
            <p className="card-text">{this.state.film.description}</p>
            <Link to="/films">
              <button className="btn btn-sm btn-dark">Back to Films</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleFilm;
