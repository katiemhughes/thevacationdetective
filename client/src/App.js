import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Questions from "./components/Questions";
import ProfilePage from "./components/ProfilePage.js";

import "./App.css";

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
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
    console.log(data.isLoggedIn);
    setUserId(data.data);
    if (data.isLoggedIn) {
      history.push("/profile");
    }
  }
  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <LandingPage
            setUsername={setUsername}
            setPassword={setPassword}
            message={message}
            handleSubmit={handleSubmit}
          />
        )}
      />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/questions" render={() => <Questions userId={userId} />} />
      <Route path="/profile" render={() => <ProfilePage userId={userId} />} />
    </div>
  );
}

export default App;
