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
    };
  }

  componentDidMount() {
    this.setState({ results: this.props.results });
    this.setHasDataToTrue();
  }

  setHasDataToTrue = () => {
    this.setState({ hasData: true });
    console.log(this.props.results);
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
      .then((data) => console.log(data));
  }

  choosePreferredDestination = () => {
    console.log(this.state.preferredDestination);
    this.addUserDestination();
  };

  render() {
    return (
      <div>
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
                    <StyledTitle>{result.country}</StyledTitle>
                    <StyledP>{result.description}</StyledP>
                    <button
                      type="button"
                      onClick={this.choosePreferredDestination}
                    >
                      Save me
                    </button>
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
  &:hover {
    height: 500px;
    transition: 2s;
  }
`;

const ImageItself = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0;
  position: absolute;
`;

const StyledTitle = styled.h1`
  background-color: rgba(0, 0, 0, 0.425);
  margin: 0;
  z-index: 2;
  font-size: 28px;
  float: left;
  margin: 29px 0px;
`;

const StyledP = styled.p`
  background-color: rgba(0, 0, 0, 0.425);
  font-size: 20px;
  float: left;
  margin: 0;
`;

const TextBlock = styled.div`
  position: absolute;
`;
