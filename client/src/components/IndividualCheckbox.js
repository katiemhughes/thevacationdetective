import React, { Component } from "react";

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
      <div className="single-checkbox">
        <label>
          <input type="checkbox" onChange={this.props.click} />{" "}
          {this.state.names}
        </label>
        <br />
      </div>
    );
  }
}

export default IndividualCheckbox;
