import React from "react";

import BugCard from "../Cards/BugCard/index";
import FishCard from "../Cards/FishCard/index";
import SeaCreatureCard from "../Cards/SeaCreatureCard";

import { CritterDisplay } from "../../Elements/CritterDisplay/";
import { CritterGrid } from "../../Elements/CritterGrid/";

class Critters extends React.Component {
  render() {
    const { allAvailableFish, allAvailableBugs, allAvailableSeaCreatures } = this.props

    const getAvailableTime = (hours) => {
      let availableTime = "";

      hours.forEach((hour) => {
        if (hour.length === 24) {
          availableTime = "all day";
        } else {
          const AmOrPm1 = hour[0] >= 12 ? "pm" : "am";
          hour[0] = hour[0] % 12 || 12;

          const AmOrPm2 = hour[hour.length - 1] >= 12 ? "pm" : "am";
          hour[hour.length - 1] = hour[hour.length - 1] % 12 || 12;

          if (availableTime !== "") {
            availableTime += ", ";
          }
          availableTime += `${hour[0] + AmOrPm1} - ${
            hour[hour.length - 1] + AmOrPm2
          }`;
        }
      });

      return availableTime;
    }
  
    const availableFish = allAvailableFish.map((fish) => {
      const { image, name, location, availability, price } = fish;
      const { hours } = availability;
      const availableTime = getAvailableTime(hours);

      return (
        <FishCard
          image={image}
          name={name}
          location={location}
          availability={availableTime}
          price={price}
          key={name}
        />
      );
    });

    const availableBugs = allAvailableBugs.map((bug) => {
      const { image, name, location, availability, price } = bug;
      const { hours } = availability;
      const availableTime = getAvailableTime(hours);

      return (
        <BugCard
          image={image}
          name={name}
          location={location}
          availability={availableTime}
          price={price}
          key={name}
        />
      );
    });

    const availableSeaCreatures = allAvailableSeaCreatures.map(
      (creature) => {
        const { image, name, availability, price } = creature;
        const { hours } = availability;
        const availableTime = getAvailableTime(hours);

        return (
          <SeaCreatureCard
            image={image}
            name={name}
            availability={availableTime}
            price={price}
            key={name}
          />
        );
      }
    );

    return (
      <div>
        <CritterDisplay>Fish available now</CritterDisplay>
        <CritterGrid>{availableFish}</CritterGrid>
        <CritterDisplay>Bugs available now</CritterDisplay>
        <CritterGrid>{availableBugs}</CritterGrid>
        <CritterDisplay>Sea Creatures available now</CritterDisplay>
        <CritterGrid>{availableSeaCreatures}</CritterGrid>
      </div>
    );
  }
}

export default Critters;
