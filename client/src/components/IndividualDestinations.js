import React, { Component } from "react";
import styled from "styled-components";

class IndividualDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      results: null,
      isClicked: false,
      preferredDestination: null,
      returnMessage: null,
    };
  }

  componentDidMount() {
    this.setState({ results: this.props.results });
    this.setHasDataToTrue();
  }

  setHasDataToTrue = () => {
    this.setState({ hasData: true });
  };

  async addUserDestination() {
    await fetch(
      "http://localhost:4500/vacationdetective/v1/addUserDestination",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: this.props.userId,
          preferredDestination: this.state.preferredDestination,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ returnMessage: data.message });
        setTimeout(() => {
          this.setState({ returnMessage: null });
        }, 3500);
      });
  }

  choosePreferredDestination = () => {
    console.log(this.state.preferredDestination);
    this.addUserDestination();
  };

  render() {
    return (
      <div>
        {this.state.returnMessage !== null ? (
          <ReturnMessageDiv>
            <ReturnMessage>{this.state.returnMessage}</ReturnMessage>
          </ReturnMessageDiv>
        ) : null}
        {this.state.hasData
          ? this.state.results.map((result, index) => {
              return (
                <IndividualSections
                  key={index}
                  onClick={() =>
                    this.setState({
                      preferredDestination: result,
                    })
                  }
                >
                  <ImageItself src={result.image} alt="" />
                  <TextBlock>
                    <TitleSaveButton>
                      <StyledTitle>{result.country}</StyledTitle>
                      <StyledButton
                        type="button"
                        onClick={this.choosePreferredDestination}
                      >
                        Save me
                      </StyledButton>
                    </TitleSaveButton>

                    <StyledP>{result.description}</StyledP>
                  </TextBlock>
                </IndividualSections>
              );
            })
          : null}
      </div>
    );
  }
}

export default IndividualDestinations;

const IndividualSections = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  color: #fff;
  font-weight: 900;
  transition: 2s;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  &:hover {
    height: 500px;
    transition: 2s;
  }
`;

const ReturnMessageDiv = styled.div`
  position: absolute;
  margin-left: 40%;
  margin-bottom: 90px;
  z-index: 4;
  width: 300px;
  border-radius: 15px;
`;

const ReturnMessage = styled.p`
  position: absolute;
  font-size: 20px;
  background-color: #888;
  color: #fff;
  margin-left: 40%;
  margin-bottom: 90px;
  z-index: 4;
`;

const ImageItself = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0;
  position: absolute;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const StyledTitle = styled.h1`
  background-color: rgba(0, 0, 0, 0.425);
  border-radius: 15px;
  margin: 0;
  z-index: 2;
  font-size: 28px;
  float: left;
  margin: 29px 0px;
`;

const TitleSaveButton = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledP = styled.p`
  background-color: rgba(0, 0, 0, 0.425);
  border-radius: 15px;
  font-size: 20px;
  float: left;
  margin: 0;
`;

const TextBlock = styled.div`
  position: absolute;
`;

const StyledButton = styled.button`
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 900;
  color: #023e8a;
  &:active {
    transform: scale(0.95, 0.95);
  }
  &:focus {
    outline: none;
  }
`;
