import React from "react";

import Time from "../Time/";
import Critters from "../Critters/";

import { DisplayWrap } from "../../Elements/DisplayWrap/";
import { UserInfo } from "../../Elements/UserInfo/";
import { Select } from "../../Elements/Select/";

import fishes from "../../data/fishes.json";
import bugs from "../../data/bugs.json";
import seaCreatures from "../../data/sea-creatures.json";

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
      "September",
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
      seaCreatures: seaCreatures,
    };
  }

  handleChange = async(event) => {
    const e = event.target.value;

    await this.setState((prevState) => ({
      user: {
        ...prevState.user,
        hemisphere: e,
      },
    }));
    console.log(this.state.user.hemisphere)
  };

  getCritterAvailability = (critters, userMonth, userTime) => {
    const availableCritters = critters.filter((critter) => {
      const { hemisphere, hours } = critter.availability;

      if(hours.length === 2) {
        return (
          (hemisphere[this.state.user.hemisphere].includes(userMonth) &&
          hours[0].includes(userTime)) || 
          hours[1].includes(userTime)
        );
      } else {
        return (
          hemisphere[this.state.user.hemisphere].includes(userMonth) &&
          hours[0].includes(userTime)
        );
      }
    });
    return availableCritters;
  }

  render() {
    const { fishes, bugs, seaCreatures } = this.state
    const { month, time } = this.state.user;
    const allAvailableFish = this.getCritterAvailability(fishes, month, time);
    const allAvailableBugs = this.getCritterAvailability(bugs, month, time);
    const allAvailableSeaCreatures = this.getCritterAvailability(seaCreatures, month, time);

    return (
      <DisplayWrap>
        <UserInfo>
          <Time />
          <Select
            value={this.state.user.hemisphere}
            onChange={this.handleChange}
          >
            <option value="northern">Northern Hemisphere</option>
            <option value="southern">Southern Hemisphere</option>
          </Select>
        </UserInfo>
        <Critters
          allAvailableFish={allAvailableFish}
          allAvailableBugs={allAvailableBugs}
          allAvailableSeaCreatures={allAvailableSeaCreatures}
        />
      </DisplayWrap>
    );
  }
}

export default Display;
