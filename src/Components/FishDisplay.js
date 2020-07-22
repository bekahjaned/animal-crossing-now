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
    const e = event.target.value;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        hemisphere: e,
      },
    }));
  };

  getFishAvailability = (userMonth, userTime) => {
    const availableFish = this.state.fishes.filter((fish) => {
      const { hemisphere, hours } = fish.availability;
      return (
        hemisphere[this.state.user.hemisphere].includes(userMonth) &&
        hours.includes(userTime)
      );
    });
    return availableFish;
  };

  render() {
    const { month, time } = this.state.user;
    const allAvailableFish = this.getFishAvailability(month, time);
    const availableFish = allAvailableFish.map((fish) => {
      return (
        <CritterCard
          image={fish.image}
          name={fish.name}
          location={fish.location}
          key={fish.name}
        />
      );
    });

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
        <div className="critter-grid">{availableFish}</div>
      </div>
    );
  }
}

export default FishDisplay;
