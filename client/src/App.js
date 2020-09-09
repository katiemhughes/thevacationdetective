import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import ProfilePage from "./components/ProfilePage.js";
import "./App.css";
import HotelBed from "./components/HotelBed";

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      .then((data) => {
        setUserId(data.data);
        setIsLoggedIn(data.isLoggedIn);
        setMessage(data.message);
      });
  }

  useEffect(() => {
    signIn();
  });

  let history = useHistory();

  function signIn() {
    if (isLoggedIn) {
      setMessage(null);
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
      <HotelBed />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/profile" render={() => <ProfilePage userId={userId} />} />
    </div>
  );
}

export default App;
