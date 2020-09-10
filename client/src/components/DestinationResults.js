import React, { Component } from "react";
import destinations from "../Destinations";
import styled from "styled-components";
import IndividualDestinations from "./IndividualDestinations";

class DestinationResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      hasData: false,
    };
  }
  //create the function (if it's not in the same file that you're calling it from, you're going to need to export the function out and then import it into the file you'll be calling it from)
  masterFunction = (destinations, preferences) => {
    let userOutput = [];
    preferences.forEach((feature) => {
      // forEAch is iterating through the array of checkboxes on your state object
      let featureName = feature.name; // assigns the name of each feature/preference
      if (feature.checked === true) {
        destinations.forEach((destinationItem) => {
          // iterates through array of destination objects
          if (destinationItem[featureName] === true) {
            destinationItem.rank++;
            userOutput.push(destinationItem);
          }
        });
      }
    });
    let finalDestinations = [...new Set(userOutput)]; // this removes duplicates

    finalDestinations.sort((a, b) => b.rank - a.rank); // sort by descending rank order
    return finalDestinations; // returns the final array of selected and sorted destinations out of the function
  };

  componentDidMount() {
    this.state.results.push(
      this.masterFunction(destinations, this.props.preferences)
    );
    this.setState({ hasData: true });
  }

  render() {
    return (
      <StyledSection>
        <StyledDiv>
          {this.state.hasData ? (
            <div>
              <StyledButton type="button" onClick={this.props.handleSubmit}>
                Close
              </StyledButton>
              <IndividualDestinations
                results={this.state.results[0]}
                userId={this.props.userId}
              />
            </div>
          ) : null}
        </StyledDiv>
      </StyledSection>
    );
  }
}

export default DestinationResults;

const StyledSection = styled.div`
  height: 80vh;
  width: 77.3vw;
  z-index: 3;
  position: absolute;
  border-radius: 15px;
  background-color: #90e0ef;
`;

const StyledDiv = styled.div`
  height: 100px;
  width: 100%;
  color: black;
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
