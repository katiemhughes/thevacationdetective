import React, { Component } from "react";

class IndividualCheckbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="single-checkbox">
        <label>
          <input type="checkbox" onChange={this.props.click} />{" "}
          {this.props.name}
        </label>
        <br />
      </div>
    );
  }
}

export default IndividualCheckbox;
