import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlippingCard from "./FlippingCard";
import ProfileIcon from "../images/ProfileIcon.png";
class CheckboxPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "",
      userLastName: "",
      userUserName: "",
      userEmail: "",
      userDestinations: null,
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
      dataReceived: false,
      flipped: false,
      profileImg: ProfileIcon,
      setDelete: false,
      listItem: null,
    };
  }
  componentDidMount = async () => {
    const { userId } = this.props;
    await fetch("/vacationdetective/v1/findUserById", {
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
    this.setState({ dataReceived: true });
  };
  handleSearchVisible = () => {
    this.setState({
      showCheckBoxes: true,
    });
  };
  flipHandler = () => {
    this.setState({ flipped: !this.state.flipped });
    const { userId } = this.props;
    fetch("/vacationdetective/v1/findUserById", {
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

  componentDidUpdate = () => {
    if (this.state.listItem !== null) {
      fetch("/vacationdetective/v1/deleteListItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: this.props.userId,
          preferredDestination: this.state.listItem,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // this.refreshPage();
        });
    }
  };

  refreshPage = async () => {
    const { userId } = this.props;
    await fetch("/vacationdetective/v1/findUserById", {
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
  render() {
    return (
      <Section>
        <Main>
          <Header>
            <h1>Welcome to Vacation Detective {this.state.userFirstName}</h1>
          </Header>
          {this.state.dataReceived ? (
            <NewSearchButton type="button" onClick={this.flipHandler}>
              New Search
            </NewSearchButton>
          ) : null}
          <MainBlock>
            <FlippingCard
              flipped={this.state.flipped}
              dataReceived={this.state.dataReceived}
              userDestinations={this.state.userDestinations}
              checkboxes={this.state.checkboxes}
              flipHandler={() => this.flipHandler()}
              userId={this.state.userId}
            />
          </MainBlock>
        </Main>
        <ProfileSection>
          <ProfileImgDiv>
            <ProfileImg src={this.state.profileImg} alt="" />
          </ProfileImgDiv>
          <UserInfoDiv>
            <h2>
              {this.state.userFirstName} {this.state.userLastName}
            </h2>
            <h3>{this.state.userUserName}</h3>
            {this.state.dataReceived ? <p>Saved Locations:</p> : null}
            {this.state.userDestinations !== null
              ? this.state.userDestinations.map((singleDestination, index) => {
                  return (
                    <div>
                      <ListItem key={index}>
                        {singleDestination.country}
                      </ListItem>
                      {/* <DeleteButton
                        type="button"
                        onClick={() => {
                          this.setState({ listItem: singleDestination });
                        }}
                      >
                        Delete
                      </DeleteButton> */}
                    </div>
                  );
                })
              : null}
            <Link to="/" className="signOutButton">
              Sign Out
            </Link>
          </UserInfoDiv>
        </ProfileSection>
      </Section>
    );
  }
}
export default CheckboxPage1;
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #90E0EF;
`;
const Main = styled.main`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5%;
  margin: 0;
`;
const NewSearchButton = styled.h3`
  height: 90px;
  width: 150px;
  margin: 0px 0px 0px 45px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  color: #023E8A;
  text-align: center;
  cursor: pointer;
  &:active {
    transform: scale(0.95, 0.95);
  }
  &:focus {
    outline: none;
  }
`;
const MainBlock = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  border-radius: 15px;
`;
const ProfileSection = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  border: 3px solid #00B4D8;
  border-radius: 15px;
  padding: 0.5%;
  background-color: #023E8A;
  z-index: 2;
`;
const ProfileImgDiv = styled.div`
  height: 25%;
  width: 40%;
  border-radius: 50%;
  margin-top: 5%;
`;
const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;
const UserInfoDiv = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListItem = styled.li`
  font-size: 20px;
  color: #fff;
  list-style-type: none;
  margin: 0px 0px 0px 20px;
`;

const DeleteButton = styled.button`
  height: auto;
  width: auto;
`;
