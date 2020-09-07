import React from "react";
import destinations from "../Destinations";
import checkbox from "./Questions";

// fetchUsers = () => {
//   fetch(`http://localhost:4500/vacationdetective/v1/user`)
//     .then((response) => response.json())
//     //update user state
//     .then((data) =>
//       this.setState({
//         users: data,
//         isLoading: false,
//       })
//     )
//     // Catch any errors hit and update the app
//     .catch((error) => this.setState({ error, isLoading: false }));
// }

const masterFunction = () => {
  require(destinations);
  if (this.state.checkbox.museum === true) {
    userOutput.push(
      destinations.museum === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.beach === true) {
    userOutput.push(
      destinations.beach === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.mountains === true) {
    userOutput.push(
      destinations.mountains === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.hiking === true) {
    userOutput.push(
      destinations.hiking === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.jungle === true) {
    userOutput.push(
      destinations.jungle === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.wildlife === true) {
    userOutput.push(
      destinations.wildlife === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.cityBreak === true) {
    userOutput.push(
      destinations.cityBreak === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.culturalEscape === true) {
    userOutput.push(
      destinations.culturalEscape === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.skyScrapers === true) {
    userOutput.push(
      destinations.skyScrapers === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.art === true) {
    userOutput.push(
      destinations.art === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.paradise === true) {
    userOutput.push(
      destinations.paradise === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.party === true) {
    userOutput.push(
      destinations.party === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.ancientMonuments === true) {
    userOutput.push(
      destinations.ancientMonuments ===
        true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.naturalWonders === true) {
    userOutput.push(
      destinations.naturalWonders === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.highLife === true) {
    userOutput.push(
      destinations.highLife === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.desert === true) {
    userOutput.push(
      destinations.desert === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  } else if (this.state.checkbox.shopping === true) {
    userOutput.push(
      destinations.shopping === true[("country", "description", "image")]
    );
    orderRank.destinations.country++;
  }
};

let userOutput = [];

if (userOutput.length >= 1);
{
  userOutput.pop();
}

userOutput.push(userOutput);

let orderRank = [
  "Bali, Indonesia" === 0,
  "New Orleans" === 0,
  "Kerry, Ireland" === 0,
  "Marrakesh, Morocco" === 0,
  "Sydney" === 0,
  "The Maldives" === 0,
  "Paris, France" === 0,
  "Cape Town, South Africa" === 0,
  "Dubai, U.A.E" === 0,
  "Bora Bora, French Polynesia" === 0,
  "New York" === 0,
  "Dolomites, Italy" === 0,
  "Sossusvlei , Namibia" === 0,
  "Dubrovnik, Croatia" === 0,
  "Edinburgh, Scotland" === 0,
  "Rome, Italy" === 0,
  "Paro Valley, Bhutan" === 0,
  "Jaipur, India" === 0,
  "Waikato, New Zealand" === 0,
  "Havana, Cuba" === 0,
  "Tokyo, Japan" === 0,
  "Antarctica" === 0,
  "Vancouver, Canada" === 0,
  "Los Angeles, USA" === 0,
  "Kruger National Park, South Africa" === 0,
  "Santorini, Greece" === 0,
  "Saint Petersburg, Russia" === 0,
  "Singapore" === 0,
  "London, England" === 0,
  "Rio de Janeiro, Brazil" === 0,
  "Petra, Jordan" === 0,
  "Hong Kong, China" === 0,
  "Barbados" === 0,
  "Amsterdam, The Netherlands" === 0,
  "Santiago, Chile" === 0,
  "Cairo, Egypt" === 0,
  "Copenhagen, Denmark" === 0,
  "Seoul, South Korea" === 0,
  "Laucala Island Resort, Fiji" === 0,
  "Providencia, Colombia" === 0,
  "Machu Picchu, Peru" === 0,
  "Virunga National Park, Democratic Republic of the Congo" === 0,
  "Lisbon, Portugal" === 0,
  "Hanoi, Vietnam" === 0,
  "Hawaii, USA" === 0,
  "Ibiza, Spain" === 0,
  "Beijing, China" === 0,
  "Budapest, Hungary" === 0,
  "Cinque Terre, Italy" === 0,
  "Buenos Aires, Argentina" === 0,
  "Las Vegas, USA" === 0,
  "Matterhorn, Switzerland" === 0,
];

const finalOrder = () => {
  if (orderRank >= 1) {
    return finalOrder.push;
  }
  finalOrder.sort(function (a, b) {
    return b - a;
  });
};

console.log(userOutput, finalOrder);

export default masterFunction;
