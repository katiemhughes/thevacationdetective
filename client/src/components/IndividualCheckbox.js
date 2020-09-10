import React, { Component } from "react";
import styled from "styled-components";

class IndividualCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: null,
    };
  }
  componentDidMount() {
    let names = this.props.name;
    let upperCaseNames =
      names.charAt(0).toUpperCase() +
      names
        .slice(1)
        .split(/(?=[A-Z])/)
        .toString()
        .replace(",", " ");
    this.setState({ names: upperCaseNames });
  }
  render() {
    return (
      <SingleCheckbox>
        <label>
          <input
            type="checkbox"
            index={this.props.index}
            onChange={this.props.handleSelect}
          />{" "}
          {this.state.names}
        </label>
      </SingleCheckbox>
    );
  }
}

export default IndividualCheckbox;

const SingleCheckbox = styled.div`
  height: 20px;
  width: 120px;
  margin: 15px;
  display: flex;
  font-size: 18px;
`;
