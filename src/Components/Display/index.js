import React from "react";
import "../Display/index.css";

import Time from "../Time/";
import FishCard from "../FishCard/";
import BugCard from "../BugCard/";

import fishes from "../../data/fishes.json";
import bugs from "../../data/bugs.json";

class Display extends React.Component {
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
      bugs: bugs,
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

  getBugAvailability = (userMonth, userTime) => {
    const availableBugs = this.state.bugs.filter((bug) => {
      const { hemisphere, hours } = bug.availability;
      return (
        hemisphere[this.state.user.hemisphere].includes(userMonth) &&
        hours.includes(userTime)
      );
    });
    return availableBugs;
  };

  render() {
    const { month, time } = this.state.user;
    const allAvailableFish = this.getFishAvailability(month, time);
    const availableFish = allAvailableFish.map((fish) => {
      return (
        <FishCard
          image={fish.image}
          name={fish.name}
          location={fish.location}
          key={fish.name}
        />
      );
    });

    const allAvailableBugs = this.getBugAvailability(month, time);
    const availableBugs = allAvailableBugs.map((bug) => {
      return (
        <BugCard
          image={bug.image}
          name={bug.name}
          location={bug.location}
          key={bug.name}
        />
      );
    });

    return (
      <div className="main">
        <div className="user-info">
          <Time />
          <select
            value={this.state.user.hemisphere}
            onChange={this.handleChange}
          >
            <option value="northern">Northern Hemisphere</option>
            <option value="southern">Southern Hemisphere</option>
          </select>
        </div>
        <h3 className="critter-display">Fish available now</h3>
        <div className="critter-grid">{availableFish}</div>
        <h3 className="critter-display">Bugs available now</h3>
        <div className="critter-grid">{availableBugs}</div>
      </div>
    );
  }
}

export default Display;
