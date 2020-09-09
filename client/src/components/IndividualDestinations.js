import React, { Component } from "react";
import styled from "styled-components";

class IndividualDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      results: null,
    };
  }
  componentDidMount() {
    this.setState({ results: this.props.results });
    this.randomFunction();
  }
  randomFunction = () => {
    this.setState({ hasData: true });
  };
  render() {
    return (
      <div>
        {this.state.hasData
          ? this.state.results.map((result, index) => {
              return (
                <IndividualSections key={index}>
                  <ImageDiv>
                    <img src={result.image} alt="" />
                  </ImageDiv>
                  <TextSection>
                    <h1>{result.country}</h1>
                    <p>{result.description}</p>
                  </TextSection>
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
  height: 150px;
  width: 100%;
`;

const ImageDiv = styled.div`
  height: 50px;
  width: 50px;
`;

const TextSection = styled.div`
  height: auto;
  width: auto;
`;
