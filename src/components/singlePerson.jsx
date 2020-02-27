import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "isomorphic-fetch";
import "es6-promise";

class SinglePerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    fetch(
      `https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(person => this.setState({ person: person }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1>People</h1>
        <div className="card bg-light mx-5 my-3">
          <div className="card-body">
            <h5 className="card-title">{this.state.person.name}</h5>
            <p className="card-text">{this.state.person.gender}</p>
            <p className="card-text">Age: {this.state.person.age}</p>
            <p className="card-text">Hair color: {this.state.person.hair_color}</p>
            <p className="card-text">Eye color: {this.state.person.eye_color}</p>
            <Link to="/people">
              <button className="btn btn-sm btn-dark">Back to People</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePerson;
