import React, { Component } from "react";
import styled from "styled-components";

class IndividualDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      results: null,
      isClicked: false,
    };
  }
  componentDidMount() {
    this.setState({ results: this.props.results });
    this.randomFunction();
  }
  randomFunction = () => {
    this.setState({ hasData: true });
    console.log(this.props.results);
  };

  render() {
    return (
      <div>
        {this.state.hasData
          ? this.state.results.map((result, index) => {
              return (
                <IndividualSections key={index}>
                  <ImageItself src={result.image} alt="" />
                  <TextBlock>
                    <StyledTitle>{result.country}</StyledTitle>
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
