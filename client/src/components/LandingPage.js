import React from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  state = {
    username: null,
    password: null,
  };

  //   handleChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  handleEmail = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const response = await fetch(
      "http://localhost:4500/vacationdetective/v1/signInAuthentication",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      }
    );
    e.preventDefault();
    const data = await response.json();
    console.log(data);
  };

  render() {
    console.log(this.state.email);
    console.log(this.state.password);
    return (
      <div className="signin-content-box">
        <h1>Welcome to Vacation Detective</h1>
        <form className="form-box">
          <label for="username/email">Username/Email:</label>
          <input className="input-box" type="text" name="email" onChange={this.handleEmail} />
          <label for="password">Password:</label>
          <input className="input-box"
            type="password"
            name="password"
            onChange={this.handlePassword}
          />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <Link to="/signup">
            <h3 className="signup-home-link">Sign up</h3>
          </Link>
        </form>
      </div>
    );
  }
}

export default LandingPage;
