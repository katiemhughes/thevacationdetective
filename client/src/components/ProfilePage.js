import React from "react";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFirstName: "",
      userLastName: "",
      userUserName: "",
      userEmail: "",
      userDestinations: "",
    };
  }

  componentDidMount = async () => {
    const { userId } = this.props;
    await fetch("http://localhost:4500/vacationdetective/v1/findUserById", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.receiveUserData(data);
      });
  };

  receiveUserData = (data) => {
    this.setState({ userFirstName: data.data.firstName });
    this.setState({ userLastName: data.data.lastName });
    this.setState({ userUserName: data.data.userName });
    this.setState({ userEmail: data.data.email });
    this.setState({ userDestinations: data.data.destinations });
    console.log(this.state.userFirstName);
  };

  render() {
    return (
      <div className="profile-content-box">
        <div className="header">
          <h1>Welcome back!</h1>
          <div className="profile-img"></div>
        </div>
        <div className="search-board">
          <div className="sub-title-box">
            <h3 className="previous-searches">Previous searches</h3>
            <Link to="/questions">
              <h3 className="new-search">New Search</h3>
            </Link>
          </div>
          <div className="board-container">
            <div className="board"></div>
            <div className="board"></div>
            <div className="board"></div>
          </div>
        </div>
        <Link to="/">
          <h3>Sign out</h3>
        </Link>
      </div>
    );
  }
}

export default ProfilePage;
