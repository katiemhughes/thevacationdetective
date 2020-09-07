import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function LandingPage() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(
      "http://localhost:4500/vacationdetective/v1/signInAuthentication",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => signIn(data));
  }

  let history = useHistory();

  function signIn(data) {
    setMessage(data.message);
    setIsLoggedIn(data.isLoggedIn);
    setUserId(data.data);
    if (data.isLoggedIn) {
      history.push("/signup");
      console.log("Go to questions page");
    }
  }

  return (
    <div className="signin-content-box">
      <h1>Welcome to Vacation Detective</h1>
      <form onSubmit={handleSubmit}>
        <h3>Username/Email:</h3>
        <input
          type="text"
          name="email"
          autoComplete="on"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Password:</h3>
        <input
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
        <Link to="/signup">
          <h3>Sign up</h3>
        </Link>
      </form>
    </div>
  );
}

export default LandingPage;
