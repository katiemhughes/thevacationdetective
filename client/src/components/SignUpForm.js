import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/vacationdetective/v1/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        savedSuccessfully(data);
        setMessage(data.message);
      });
  };

  let history = useHistory();

  const savedSuccessfully = (data) => {
    if (data.success === true) {
      history.push("/");
    }
  };

  return (
    <div className="wrapper">
      <div className="signup-form-box">
        <h1>Please fill out form below</h1>
        {message !== null ? <p>{message}</p> : null}
        <form>
          <div className="main-form-box">
            <div className="left-form-box">
              <label for="firstname">First Name:</label>
              <input
                className="input-box"
                id="firstname"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="surname">Surname:</label>
              <input
                className="input-box"
                id="surname"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label for="username">Username:</label>
              <input
                className="input-box"
                id="username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="right-form-box">
              <label for="email">Email:</label>
              <input
                className="input-box"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="password">Password:</label>
              <input
                className="input-box"
                id="password"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="submit-btn"
            type="submit"
            name="submit"
            value="Submit Search"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Link to="/">
            <h3 className="signup-home-link">Home</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
