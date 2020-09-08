import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    // state = {
    //     userId: null,
    //     beach: false,
    //     checkbox: {
    //         museums: false,
    //         // beach: false,
    //         mountains: false,
    //         hiking: false,
    //         jungle: false,
    //         wildlife: false,
    //         cityBreak: false,
    //         culturalEscape: false,
    //         skyScrappers: false,
    //         art: false,
    //         paradise: false,
    //         party: false,
    //         ancientMonuments: false,
    //         naturalWonder: false,
    //         highLife: false,
    //         desert: false,
    //         shopping: false,
    //     },
    //     destinationData: null,
    //     showCheckBoxes: false,
    // }

    state = {
        checkbox: {
            museums: false,
        },
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
        destinationData: null,
        showCheckBoxes: false,
        userId: null,
    }

    handleChangeMuseums = () => {
        this.setState(initialState => ({
            museums: !initialState.checkbox.museums,
        }))
    }
    handleChangeBeach = () => {
        this.setState(initialState => ({
            beach: !initialState.beach,
        }))
    }
    handleChangeMountains = () => {
        this.setState(initialState => ({
            mountains: !initialState.mountains,
        }))
    }
    handleChangeHiking = () => {
        this.setState(initialState => ({
            hiking: !initialState.hiking,
        }))
    }
    handleChangeJungle = () => {
        this.setState(initialState => ({
            jungle: !initialState.jungle,
        }))
    }
    handleChangeWildlife = () => {
        this.setState(initialState => ({
            wildlife: !initialState.wildlife,
        }))
    }
    handleChangeCityBreak = () => {
        this.setState(initialState => ({
            cityBreak: !initialState.cityBreak,
        }))
    }
    handleChangeCulturalEscape = () => {
        this.setState(initialState => ({
            culturalEscape: !initialState.culturalEscape,
        }))
    }
    handleChangeSkyScrappers = () => {
        this.setState(initialState => ({
            skyScrappers: !initialState.skyScrappers,
        }))
    }
    handleChangeArt = () => {
        this.setState(initialState => ({
            art: !initialState.art,
        }))
    }
    handleChangeParadise = () => {
        this.setState(initialState => ({
            paradise: !initialState.paradise,
        }))
    }
    handleChangeParty = () => {
        this.setState(initialState => ({
            party: !initialState.party,
        }))
    }
    handleChangeAncientMonuments = () => {
        this.setState(initialState => ({
            ancientMonuments: !initialState.ancientMonuments,
        }))
    }
    handleChangeNaturalWonder = () => {
        this.setState(initialState => ({
            naturalWonder: !initialState.naturalWonder,
        }))
    }
    handleChangeHighLife = () => {
        this.setState(initialState => ({
            highLife: !initialState.highLife,
        }))
    }
    handleChangeDesert = () => {
        this.setState(initialState => ({
            desert: !initialState.desert,
        }))
    }
    handleChangeShopping = () => {
        this.setState(initialState => ({
            shopping: !initialState.shopping,
        }))
    }

    handleSearchVisible = () => {
        this.setState({
            showCheckBoxes: true,
        })
    }
    handleSeachHidden = () => {
        this.setState({
            showCheckBoxes: false,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="profile-content-box">
                <div className="header">
                    <h1>Welcome back!</h1>
                    <div className="profile-img"></div>
                </div>



                <div className="search-board">
                    <div className="sub-title-box">
                        <h3 className="previous-searches">Previous searches</h3>
                        <h3 onClick={this.handleSearchVisible} className="new-search">New Search</h3>
                    </div>

                    {this.state.showCheckBoxes
                        ? <div className="checkboxes">
                            <form onSubmit={this.handleSubmit}>
                                <div className="checkbox-main-container">

                                    <div className="checkbox-col">
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.checkbox.museums}
                                                    onChange={this.handleChangeMuseums} /> Museums
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.beach}
                                                    onChange={this.handleChangeBeach} /> Beach
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.mountains}
                                                    onChange={this.handleChangeMountains} /> Mountains
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.hiking}
                                                    onChange={this.handleChangeHiking} /> Hiking
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.jungle}
                                                    onChange={this.handleChangeJungle} /> Jungle
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.wildlife}
                                                    onChange={this.handleChangeWildlife} /> Wildlife
                                            </label><br />
                                        </div>
                                    </div>


                                    <div className="checkbox-col">
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.cityBreak}
                                                    onChange={this.handleChangeCityBreak} /> City Break
                                        </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.culturalEscape}
                                                    onChange={this.handleChangeCulturalEscape} /> Cultural Escape
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.skyScrappers}
                                                    onChange={this.handleChangeSkyScrappers} /> Sky Scrappers
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.art}
                                                    onChange={this.handleChangeArt} /> Art
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.paradise}
                                                    onChange={this.handleChangeParadise} /> Paradise
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.party}
                                                    onChange={this.handleChangeParty} /> Party
                                            </label><br />
                                        </div>
                                    </div>

                                    <div className="checkbox-col">
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.ancientMonuments}
                                                    onChange={this.handleChangeAncientMonuments} /> Ancient Monuments
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.naturalWonder}
                                                    onChange={this.handleChangeNaturalWonder} /> Natural Wonders
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.highLife}
                                                    onChange={this.handleChangeHighLife} /> High Life
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.desert}
                                                    onChange={this.handleChangeDesert} /> Desert
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    checked={this.state.shopping}
                                                    onChange={this.handleChangeShopping} /> Shopping
                                            </label><br />
                                        </div>

                                    </div>



                                </div>
                                <div className="submit-button-box">
                                    <button type="submit">Submit</button>
                                    <h3 className="close-search" onClick={this.handleSeachHidden}>CloseSearch</h3>
                                </div>
                            </form>


                        </div>



                        : <div className="board-container">
                            <div className="board"></div>
                            <div className="board"></div>
                            <div className="board"></div>
                        </div>}
                </div>
                <Link to="/home"><h3 className="signup-home-link">Sign out</h3></Link>

            </div>
        )
    }
}

export default ProfilePage;



// {this.state.showCheckBoxes
//     ? <div className="checkboxes">
//         <form onSubmit={this.handleSubmit}>
//             <div className="museums-check">
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.museums}
//                         onChange={this.handleChangeMuseums} /> Museums
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.beach}
//                         onChange={this.handleChangeBeach} /> Beach
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.mountains}
//                         onChange={this.handleChangeMountains} /> Mountains
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.hiking}
//                         onChange={this.handleChangeHiking} /> Hiking
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.jungle}
//                         onChange={this.handleChangeJungle} /> Jungle
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.wildlife}
//                         onChange={this.handleChangeWildlife} /> Wildlife
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.cityBreak}
//                         onChange={this.handleChangeCityBreak} /> City Break
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.culturalEscape}
//                         onChange={this.handleChangeCulturalEscape} /> Cultural Escape
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.skyScrappers}
//                         onChange={this.handleChangeSkyScrappers} /> Sky Scrappers
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.art}
//                         onChange={this.handleChangeArt} /> Art
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.paradise}
//                         onChange={this.handleChangeParadise} /> Paradise
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.party}
//                         onChange={this.handleChangeParty} /> Party
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.ancientMonuments}
//                         onChange={this.handleChangeAncientMonuments} /> Ancient Monuments
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.naturalWonder}
//                         onChange={this.handleChangeNaturalWonder} /> Natural Wonders
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.highLife}
//                         onChange={this.handleChangeHighLife} /> High Life
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.desert}
//                         onChange={this.handleChangeDesert} /> Desert
//         </label><br />
//                 <label>
//                     <input type="checkbox"
//                         checked={this.state.checkbox.shopping}
//                         onChange={this.handleChangeShopping} /> Shopping
//         </label><br />
//                 <button type="submit">Submit</button>
//             </div>
//         </form>

//     </div> :