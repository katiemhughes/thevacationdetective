import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Checkbox from "./Checkbox";
import axios from "axios";

const items = [
  "Museums",
  "Beach",
  "Mountains",
  "Hiking",
  "Jungle",
  "Wildlife",
  "Citybreak",
  "Cultural Escape",
  "Skyscrapers",
  "Art",
  "Paradise",
  "Party",
  "Ancient Monuments",
  "Natural Wonders",
  "High Life",
  "Desert",
  "Shopping",
];

class Questions extends Component {
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  // handleFormSubmit = (formSubmitEvent) => {
  //   formSubmitEvent.preventDefault();

  handleFormSubmit = async (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    await axios
      .post("", this.selectedCheckboxes)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      Museums: "",
      Beach: "",
      Mountains: "",
      Hiking: "",
      Jungle: "",
      Wildlife: "",
      Citybreak: "",
      CulturalEscape: "",
      Skyscrapers: "",
      Art: "",
      Paradise: "",
      Party: "",
      AncientMonuments: "",
      NaturalWonders: "",
      HighLife: "",
      Desert: "",
      Shopping: "",
    });

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };

  createCheckbox = (label) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">
                Save
              </button>
            </form>
            <Link to="/profile"><h3>Profile</h3></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
