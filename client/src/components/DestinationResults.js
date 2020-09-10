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
            <IndividualDestinations
              results={this.state.results[0]}
              userId={this.props.userId}
            />
          ) : null}
        </StyledDiv>
      </StyledSection>
    );
  }
}

export default DestinationResults;

const StyledSection = styled.div`
  height: 80vh;
  width: 80vw;
  z-index: 2;
  background-color: orange;
  position: absolute;
`;

const StyledDiv = styled.div`
  height: 100px;
  width: 100%;
  color: black;
`;
