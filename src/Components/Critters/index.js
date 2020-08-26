import React from "react";

import BugCard from "../Cards/BugCard/index";
import FishCard from "../Cards/FishCard/index";

import { CritterDisplay } from "../../Elements/CritterDisplay/";
import { CritterGrid } from "../../Elements/CritterGrid/";

class Critters extends React.Component {
  render() {
    const availableFish = this.props.allAvailableFish.map((fish) => {
      const { image, name, location, availability } = fish;

      const { hours } = availability;
      let availableTime = "";
      if (hours.length === 2) {
        const slot1 = `${hours[0][0]} - ${hours[0][hours[0].length - 1]}`;
        const slot2 = `${hours[1][0]} - ${hours[1][hours[1].length - 1]}`;
        availableTime = `${slot1}, ${slot2}`;
      } else
        availableTime = `${hours[0][0]} - ${hours[0][hours[0].length - 1]}`;

      return (
        <FishCard
          image={image}
          name={name}
          location={location}
          availability={availableTime}
          key={name}
        />
      );
    });

    const availableBugs = this.props.allAvailableBugs.map((bug) => {
      const { image, name, location, availability } = bug;

      const { hours } = availability;
      let availableTime = "";
      if (hours.length === 2) {
        const slot1 = `${hours[0][0]} - ${hours[0][hours[0].length - 1]}`;
        const slot2 = `${hours[1][0]} - ${hours[1][hours[1].length - 1]}`;
        availableTime = `${slot1}, ${slot2}`;
      } else
        availableTime = `${hours[0][0]} - ${hours[0][hours[0].length - 1]}`;

      return (
        <BugCard
          image={image}
          name={name}
          location={location}
          availability={availableTime}
          key={name}
        />
      );
    });

    return (
      <div>
        <CritterDisplay>Fish available now:</CritterDisplay>
        <CritterGrid>{availableFish}</CritterGrid>
        <CritterDisplay>Bugs available now:</CritterDisplay>
        <CritterGrid>{availableBugs}</CritterGrid>
      </div>
    );
  }
}

export default Critters;
