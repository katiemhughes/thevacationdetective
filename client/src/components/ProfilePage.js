import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import IndividualCheckbox from "./IndividualCheckbox";
import DestinationResults from "./DestinationResults";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFirstName: "",
      userLastName: "",
      userUserName: "",
      userEmail: "",
      userDestinations: "",
      userId: this.props.userId,
      checkboxes: [
        { name: "museums", checked: false, id: 1 },
        { name: "beach", checked: false, id: 2 },
        { name: "mountains", checked: false, id: 3 },
        { name: "hiking", checked: false, id: 4 },
        { name: "jungle", checked: false, id: 5 },
        { name: "wildlife", checked: false, id: 6 },
        { name: "citybreak", checked: false, id: 7 },
        { name: "culturalEscape", checked: false, id: 8 },
        { name: "skyscrapers", checked: false, id: 9 },
        { name: "art", checked: false, id: 10 },
        { name: "paradise", checked: false, id: 11 },
        { name: "party", checked: false, id: 12 },
        { name: "ancientMonuments", checked: false, id: 13 },
        { name: "naturalWonder", checked: false, id: 14 },
        { name: "highLife", checked: false, id: 15 },
        { name: "desert", checked: false, id: 16 },
        { name: "shopping", checked: false, id: 17 },
      ],
      showCheckBoxes: false,
      isSubmitted: false,
    };
  }
  handleSelect = (index) => {
    const { checkboxes } = this.state;
    let newCheckbox = checkboxes;
    let currentCheckbox = newCheckbox[index];
    newCheckbox[index].checked = !currentCheckbox.checked;
    currentCheckbox.index = index;
    this.setState({ checkboxes: newCheckbox });
  };

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

  handleSearchVisible = () => {
    this.setState({
      showCheckBoxes: true,
    });
  };
  handleSeachHidden = () => {
    this.setState({
      showCheckBoxes: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  };

  render() {
    return (
      <section className="profile-content-box">
        <header className="header">
          <h1>Welcome back {this.state.userFirstName}</h1>
          <div className="profile-img"></div>
        </header>
        <main className="search-board">
          <div className="sub-title-box">
            <h3 onClick={this.handleSearchVisible} className="submit-btn">
              New Search
            </h3>
          </div>
          {this.state.isSubmitted ? (
            <DestinationResults preferences={this.state.checkboxes} />
          ) : null}
          {this.state.showCheckBoxes ? (
            <div className="checkboxes">
              <form onSubmit={this.handleSubmit}>
                <div className="checkbox-main-container">
                  <div className="close-search-container">
                    <h3
                      className="close-search"
                      onClick={this.handleSeachHidden}
                    >
                      <FaTimesCircle />
                    </h3>
                  </div>
                  <div className="checkbox-col">
                    {this.state.checkboxes.map((checkbox, index) => {
                      return (
                        <>
                          <IndividualCheckbox
                            key={index}
                            name={checkbox.name}
                            click={() => this.handleSelect(index)}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="submit-button-box">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="board-container">
              <div className="previous-searches">
                <h3>Previous searches</h3>
              </div>
              <div className="boards">
                <div className="board"></div>
                <div className="board"></div>
                <div className="board"></div>
              </div>
            </div>
          )}
        </main>
        <Link to="/">
          <h3 className="signup-home-link">Sign out</h3>
        </Link>
      </section>
    );
  }
}
export default ProfilePage;
