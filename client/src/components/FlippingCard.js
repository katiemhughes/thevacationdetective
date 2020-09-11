import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import IndividualCheckbox from "./IndividualCheckbox";
import DestinationResults from "./DestinationResults";

class FlippingCard extends Component {
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
      isThereDestinations: false,
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
        console.log(this.props.userDestinations);
      });
  };

  receiveUserData = (data) => {
    this.setState({ userFirstName: data.data.firstName });
    this.setState({ userLastName: data.data.lastName });
    this.setState({ userUserName: data.data.userName });
    this.setState({ userEmail: data.data.email });
    // this.setState({ userDestinations: data.data.destinations });
    this.setState({ dataReceived: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: !this.state.isSubmitted });
    this.setState({ isThereDestinations: true });
  };

  render() {
    return (
      <div>
        {this.state.isSubmitted ? (
          <DestinationResults
            preferences={this.state.checkboxes}
            userId={this.props.userId}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        ) : null}
        <ReactCardFlip
          isFlipped={this.props.flipped}
          flipDirection="horizontal"
        >
          <CardFront>
            <h3>Previous Searches</h3>
            <Boards>
              {/* {this.props.userDestinations === null ? null : (
                <NoDestinationsDiv>
                  <NoDestinationsTag>
                    You don't seem to have any saved destinations! Make a new
                    search to find your next holiday
                  </NoDestinationsTag>
                  <NewSearchButton
                    type="button"
                    onClick={this.props.flipHandler}
                  >
                    New Search
                  </NewSearchButton>
                </NoDestinationsDiv>
              )} */}
              {this.props.userDestinations !== null
                ? this.props.userDestinations.map(
                    (singleDestination, index) => {
                      return (
                        <PreviousSearchIndividualDiv key={index}>
                          <h1>{singleDestination.country}</h1>
                          <p>{singleDestination.description}</p>
                          <PreviousSearchImgDiv>
                            <PreviousImg src={singleDestination.image} alt="" />
                          </PreviousSearchImgDiv>
                        </PreviousSearchIndividualDiv>
                      );
                    }
                  )
                : null}
            </Boards>
          </CardFront>
          <CardBack>
            <HolidayQuestionTitle>
              What do you want from your next holiday?
            </HolidayQuestionTitle>
            <form onSubmit={this.handleSubmit}>
              <MakeCheckboxesWrap>
                {this.state.checkboxes.map((checkbox, index) => {
                  return (
                    <>
                      <IndividualCheckbox
                        key={index}
                        name={checkbox.name}
                        handleSelect={() => this.handleSelect(index)}
                      />
                    </>
                  );
                })}
              </MakeCheckboxesWrap>
              <NewSearchButton type="submit">Submit</NewSearchButton>
            </form>
          </CardBack>
        </ReactCardFlip>
      </div>
    );
  }
}

export default FlippingCard;

const CardFront = styled.div`
  height: 515px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #00b4d8;
  border-radius: 15px;
`;

const Boards = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const PreviousSearchIndividualDiv = styled.div`
  width: 25%;
  height: 100%;
  background-color: #023e8a;
  border-radius: 5px;
  margin: 1%;
  border: 3px solid #00b4d8;
`;

const PreviousSearchImgDiv = styled.div`
  height: 20%x;
  width: 100%;
`;

const PreviousImg = styled.img`
  height: 100%;
  width: 100%;
`;

const NoDestinationsDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

const NoDestinationsTag = styled.h4`
  font-size: 28px;
  text-align: center;
`;
const NewSearchButton = styled.button`
  height: 90px;
  width: 150px;
  margin: 0px 325px 0px 45px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  font-size: 24px;
  font-weight: bold;
  color: #023e8a;
  text-align: center;
  cursor: pointer;
  &:active {
    transform: scale(0.95, 0.95);
  }
  &:focus {
    outline: none;
  }
`;

const CardBack = styled.div`
  height: 515px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  background-color: #00b4d8;
  border-radius: 15px;
`;

const HolidayQuestionTitle = styled.h3`
  text-align: left;
`;

const MakeCheckboxesWrap = styled.div`
  height: 300px;
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-left: 150px;
  margin-bottom: 25px;
`;
