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
        <CritterDisplay>Fish available now</CritterDisplay>
        <CritterGrid>{availableFish}</CritterGrid>
        <CritterDisplay>Bugs available now</CritterDisplay>
        <CritterGrid>{availableBugs}</CritterGrid>
      </div>
    );
  }
}

export default Critters;
