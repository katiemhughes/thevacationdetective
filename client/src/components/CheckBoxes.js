import React from "react";

class CheckBoxes extends React.Component {
  // state = {
  //     museums: false,
  //     beach: false,
  //     mountains: false,
  //     hiking: false,
  //     jungle: false,
  //     wildlife: false,
  //     cityBreak: false,
  //     culturalEscape: false,
  //     skyScrappers: false,
  //     art: false,
  //     paradise: false,
  //     party: false,
  //     ancientMonuments: false,
  //     naturalWonder: false,
  //     highLife: false,
  //     desert: false,
  //     shopping: false,
  // };

  state = {
    checkbox: {
      museums: false,
      beach: false,
      mountains: false,
      hiking: false,
      jungle: false,
      wildlife: false,
      cityBreak: false,
      culturalEscape: false,
      skyScrappers: false,
      art: false,
      paradise: false,
      party: false,
      ancientMonuments: false,
      naturalWonder: false,
      highLife: false,
      desert: false,
      shopping: false,
    },
  };

  handleChangeMuseums = () => {
    this.setState((initialState) => ({
      museums: !initialState.checkbox.museums,
    }));
  };
  handleChangeBeach = () => {
    this.setState((initialState) => ({
      beach: !initialState.checkbox.beach,
    }));
  };
  handleChangeMountains = () => {
    this.setState((initialState) => ({
      mountains: !initialState.checkbox.mountains,
    }));
  };
  handleChangeHiking = () => {
    this.setState((initialState) => ({
      hiking: !initialState.hiking,
    }));
  };
  handleChangeJungle = () => {
    this.setState((initialState) => ({
      jungle: !initialState.jungle,
    }));
  };
  handleChangeWildLife = () => {
    this.setState((initialState) => ({
      wildlife: !initialState.wildlife,
    }));
  };
  handleChangeCityBreak = () => {
    this.setState((initialState) => ({
      cityBreak: !initialState.cityBreak,
    }));
  };
  handleChangeCulturalEscape = () => {
    this.setState((initialState) => ({
      culturalEscape: !initialState.culturalEscape,
    }));
  };

  // handleSubmit = async (e) => {
  //     const response = await fetch(
  //         "http://localhost:4500/vacationdetective/v1/travelcriteria",
  //         {
  //             method: "POST",
  //             headers: { "Conetent-Type": "application/json" },
  //             body: JSON.stringify({
  //                 museums: this.state.museums,
  //                 beach: this.state.beach,
  //                 mountains: this.state.mountains,
  //             }),
  //         }
  //     );
  //     e.preventDefault();
  //     const data = await response.json();
  //     console.log(data)
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

    render() {
        // console.log(this.state.museums)
        return (
            <div className="all-checkboxes-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="museums-check">
                        <label>
                            <input type="checkbox"
                                checked={this.state.museums}
                                onChange={this.handleChangeMuseums} /> Museums
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.beach}
                                onChange={this.handleChangeBeach} /> Beach
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.mountains}
                                onChange={this.handleChangeMountains} /> Mountains
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.hiking}
                                onChange={this.handleChangeHiking} /> Hiking
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.jungle}
                                onChange={this.handleChangeJungle} /> Jungle
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.wildlife}
                                onChange={this.handleChangeWildLife} /> WildLife
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.cityBreak}
                                onChange={this.handleChangeCityBreak} /> City Break
                        </label><br />
                        <label>
                            <input type="checkbox"
                                checked={this.state.culturalEscape}
                                onChange={this.handleChangeCulturalEscape} /> Cultural Escape
                        </label><br />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CheckBoxes;
