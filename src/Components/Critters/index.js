import React from "react";

import BugCard from "../Cards/BugCard/index";
import FishCard from "../Cards/FishCard/index";

import { CritterDisplay } from "../../Elements/CritterDisplay/";
import { CritterGrid } from "../../Elements/CritterGrid/";

class Critters extends React.Component {
  render() {
    const availableFish = this.props.allAvailableFish.map((fish) => {
      return (
        <FishCard
          image={fish.image}
          name={fish.name}
          location={fish.location}
          key={fish.name}
        />
      );
    });

    const availableBugs = this.props.allAvailableBugs.map((bug) => {
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
