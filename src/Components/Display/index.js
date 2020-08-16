import React from "react";

import Time from "../Time/";
import Critters from "../Critters/";

import { DisplayWrap } from "../../Elements/DisplayWrap/";
import { UserInfo } from "../../Elements/UserInfo/";
import { Select } from "../../Elements/Select/";

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
      if (hours.length === 2) {
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
    return availableFish;
  };

  getBugAvailability = (userMonth, userTime) => {
    const availableBugs = this.state.bugs.filter((bug) => {
      const { hemisphere, hours } = bug.availability;

      if (hours.length === 2) {
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
    return availableBugs;
  };

  render() {
    const { month, time } = this.state.user;
    const allAvailableFish = this.getFishAvailability(month, time);
    const allAvailableBugs = this.getBugAvailability(month, time);

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
        />
      </DisplayWrap>
    );
  }
}

export default Display;
