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
      <div className="checkboxes-container">
            <form className="checkboxes-form" onSubmit={this.handleFormSubmit}>
              <div className="single-checkbox">
                {this.createCheckboxes()}
              </div>
              <button className="submit-btn" type="submit">
                Save
              </button>
              <Link to="/profile"><h3 className="signup-home-link">Profile</h3></Link>
            </form>
      </div>
    );
  }
}

export default Questions;
