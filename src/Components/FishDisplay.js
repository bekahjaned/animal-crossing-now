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

  // This is a function to filter though the fish file and
  // only give back a list of the fish available right now, in this hemisphere
  fishAvailableNow = (userMonth, userTime) => {
    // using filter in order to create a new array of fish that match a certain criteria
    const availableFish = this.state.fishes.filter((fish) => {
      // destructuring object properties of each fish to make code short and simple
      const { hemisphere, hours } = fish.availability;
      return (
        // Searching for and chosing the hemisphere of the fish to match user's hemisphere from state
        // also checking if the array of months in the fish's availability (for the specific hemisphere) includes the user's month
        hemisphere[this.state.user.hemisphere].includes(userMonth) &&
        // checking if the array of hours in the fish's availability includes the user's time
        hours.includes(userTime)
        // if the above statements are true, add it to the array 'availableFish'
      );
    });
    // returning the final array of available fish and waiting to be called
    return availableFish;
  };

  render() {
    // destructuring object properties of user to make code short and simple
    const { month, time } = this.state.user;
    // creating a variable to hold the outcome of 'fishAvailableNow', AKA 'availableFish' from line 64
    // using user's time and month from state to call this function
    const fishAvailableNow = this.fishAvailableNow(month, time);
    // creating a variable to be placed in return code below that loops though every available fish
    const availableFish = fishAvailableNow.map((fish) => {
      return (
        // displaying certain properties in the component
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
        {/* placing the variable here to show the CritterCard component */}
        <div className="critter-grid">{availableFish}</div>
      </div>
    );
  }
}

export default FishDisplay;
