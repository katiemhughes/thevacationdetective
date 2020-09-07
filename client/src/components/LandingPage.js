import React from "react";
import { Link } from "react-router-dom";

function LandingPage({ setPassword, setUsername, handleSubmit, message }) {
  return (
    <>
      <div className="wrapper">
        <div className="signin-content-box">
          <h1>Welcome to Vacation Detective</h1>
          <form onSubmit={handleSubmit}>
            <label for="username/email">Username/Email:</label>
            <input
              className="input-box"
              type="text"
              name="email"
              autoComplete="on"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="password">Password:</label>
            <input
              className="input-box"
              type="password"
              name="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {message === null ? null : <p>{message}</p>}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
          <Link to="/signup">
            <h3 className="signup-home-link">Sign up</h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
