import React, { Component } from "react";

class Accommodation extends Component {
  componentDidMount() {
    fetch("http://localhost:4500/vacationdetective/v1/signInAuthentication")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Yup</h1>
      </div>
    );
  }
}

export default Accommodation;
