import React from "react";

import CritterCard from "./CritterCard";

import fishes from "../data/fishes.json";

class FishDisplay extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Spetember",
      "October",
      "November",
      "December",
    ];

    this.state = {
      user: {
        hemisphere: "northern",
        time: today.getHours(),
        month: months[today.getMonth()],
      },
      fishes: fishes,
    };
  }

  handleChange = (event) => {
    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Spetember",
      "October",
      "November",
      "December",
    ];
    this.setState({
      user: {
        hemisphere: event.target.value,
        time: today.getHours(),
        month: months[today.getMonth()],
      },
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>
            Choose your hemisphere:
            <select
              value={this.state.user.hemisphere}
              onChange={this.handleChange}
            >
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </select>
          </label>
        </div>
        <div className="critter-grid">
          {this.state.fishes.map((fish) => {
            if (
              fish.availability.hemisphere[this.state.user.hemisphere].includes(
                this.state.user.month
              )
            ) {
              if (fish.availability.hours.includes(this.state.user.time)) {
                return (
                  <CritterCard
                    name={fish.name}
                    location={fish.location}
                    key={fish.name}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    );
  }
}

export default FishDisplay;
