import React, { Component } from "react";

class HotelBed extends Component {
  async handleSubmit(e) {
    e.preventDefault();

    let apiKey = "84e1606fa079b4527444f7595dfe049b";
    let secret = "5214539494";

    await fetch("https://api.test.hotelbeds.com/hotel-api/1.0/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-key": `${apiKey}`,
        "X-Signature": `$(echo -n ${apiKey}${secret}$(date +%s)|sha256sum|awk "{ print $1}")`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Click</button>
      </div>
    );
  }
}

export default HotelBed;
