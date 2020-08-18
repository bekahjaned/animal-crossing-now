import React from "react";
import renderer from "react-test-renderer";

import Critters from "./index";

it("renders multiple FishCards and BugCards", () => {
  // given
  const allAvailableFish = [
    {
      name: "Moray Eel",
      location: "Sea",
      image: "Moray Eel",
    },
    {
      name: "Giant Trevally",
      location: "Pier",
      image: "Giant Trevally",
    },
  ];

  const allAvailableBugs = [
    {
      name: "Ant",
      location: "On rotten food",
      image: "Ant",
    },
    {
      name: "Wharf Roach",
      location: "On beach rocks",
      image: "Wharf Roach",
    },
  ];

  //   when
  const tree = renderer
    .create(
      <Critters
        allAvailableFish={allAvailableFish}
        allAvailableBugs={allAvailableBugs}
      />
    )
    .toJSON();

  // then
  expect(tree).toMatchSnapshot();
});
