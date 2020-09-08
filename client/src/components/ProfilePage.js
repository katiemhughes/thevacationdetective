import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
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
        showCheckBoxes: false,
        userId: null,
        destinationData: null,
    }

    handleCheckboxChange = (e) => {
        const { name } = e.target;

        this.setState(prevState => ({
            checkbox: {
                ...prevState.checkbox,
                [name]: !prevState.checkbox[name]
            }
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
                                                    name="museums"
                                                    checked={this.state.museums}
                                                    onChange={this.handleCheckboxChange} /> Museums
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="beach"
                                                    checked={this.state.beach}
                                                    onChange={this.handleCheckboxChange} /> Beach
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="mountains"
                                                    checked={this.state.mountains}
                                                    onChange={this.handleCheckboxChange} /> Mountains
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="hiking"
                                                    checked={this.state.hiking}
                                                    onChange={this.handleCheckboxChange} /> Hiking
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="jungle"
                                                    checked={this.state.jungle}
                                                    onChange={this.handleCheckboxChange} /> Jungle
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="wildlife"
                                                    checked={this.state.wildlife}
                                                    onChange={this.handleCheckboxChange} /> Wildlife
                                            </label><br />
                                        </div>
                                    </div>


                                    <div className="checkbox-col">
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="cityBreak"
                                                    checked={this.state.cityBreak}
                                                    onChange={this.handleCheckboxChange} /> City Break
                                        </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="culturalEscape"
                                                    checked={this.state.culturalEscape}
                                                    onChange={this.handleCheckboxChange} /> Cultural Escape
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="skyScrappers"
                                                    checked={this.state.skyScrappers}
                                                    onChange={this.handleCheckboxChange} /> Sky Scrappers
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="art"
                                                    checked={this.state.art}
                                                    onChange={this.handleCheckboxChange} /> Art
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="paradise"
                                                    checked={this.state.paradise}
                                                    onChange={this.handleCheckboxChange} /> Paradise
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="party"
                                                    checked={this.state.party}
                                                    onChange={this.handleCheckboxChange} /> Party
                                            </label><br />
                                        </div>
                                    </div>

                                    <div className="checkbox-col">
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="ancientMonuments"
                                                    checked={this.state.ancientMonuments}
                                                    onChange={this.handleCheckboxChange} /> Ancient Monuments
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="naturalWonder"
                                                    checked={this.state.naturalWonder}
                                                    onChange={this.handleCheckboxChange} /> Natural Wonders
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="highLife"
                                                    checked={this.state.highLife}
                                                    onChange={this.handleCheckboxChange} /> High Life
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="desert"
                                                    checked={this.state.desert}
                                                    onChange={this.handleCheckboxChange} /> Desert
                                            </label><br />
                                        </div>
                                        <div className="single-checkbox">
                                            <label>
                                                <input type="checkbox"
                                                    name="shopping"
                                                    checked={this.state.shopping}
                                                    onChange={this.handleCheckboxChange} /> Shopping
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
                <Link to="/home"><h3>Sign out</h3></Link>

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