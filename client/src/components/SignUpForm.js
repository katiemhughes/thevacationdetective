import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
  };

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = async () => {
    await fetch("http://localhost:4500/vacationdetective/v1/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };

  render() {
    return (
      <div className="signup-form-box">
        <h1>Please fill out form below</h1>
        <form>
          <div className="main-form-box">
            <div className="left-form-box">
              <label for="firstname">Name:</label>
              <input className="input-box" id="firstname" type="text" onChange={this.handleFirstName} />
              <label for="surname">Surname:</label>
              <input className="input-box" id="surname" type="text" onChange={this.handleLastName} />
              <label for="username">Username:</label>
              <input className="input-box" id="username" type="text" onChange={this.handleUserName} />
            </div>
            <div className="right-form-box">
              <label for="email">Email:</label>
              <input className="input-box" id="email" type="email" onChange={this.handleEmail} />
              <label for="password">Password:</label>
              <input className="input-box" id="password" type="text" onChange={this.handlePassword} />
            </div>
          </div>
          <button
            className="submit-btn"
            type="submit"
            name="submit"
            value="Submit Search"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <Link to="/">
                <h3 className="signup-home-link">Home</h3>
              </Link>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
