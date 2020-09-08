import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import Questions from "./components/Questions";
<<<<<<< HEAD
import ProfilePage from "./components/ProfilePage";
import CheckBoxes from "./components/CheckBoxes";

class App extends React.Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="wrapper">
            <Route path="/home" component={LandingPage} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/questions" component={Questions} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/checkboxes" component={CheckBoxes} />
          </div>
        </div>
      </BrowserRouter>
    );
=======
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
>>>>>>> 8fbcc4e3a0ddaa99491bafb4a20e4935f83bd079
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
