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
      availability: {
        hours: [
          [
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
          ],
        ],
      },
    },
    {
      name: "Giant Trevally",
      location: "Pier",
      image: "Giant Trevally",
      availability: {
        hours: [
          [
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
          ],
        ],
      },
    },
    {
      name: "Piranha",
      location: "River",
      image: "Piranha",
      availability: {
        hours: [
          [9, 10, 11, 12, 13, 14, 15, 16],
          [21, 22, 23, 24, 1, 2, 3, 4],
        ],
      },
    },
  ];

  const allAvailableBugs = [
    {
      name: "Ant",
      location: "On rotten food",
      image: "Ant",
      availability: {
        hours: [
          [
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
          ],
        ],
      },
    },
    {
      name: "Wharf Roach",
      location: "On beach rocks",
      image: "Wharf Roach",
      availability: {
        hours: [
          [
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
          ],
        ],
      },
    },
    {
      name: "Evening Cicada",
      location: "On trees",
      image: "Evening Cicada",
      availability: {
        hours: [
          [4, 5, 6, 7, 8],
          [16, 17, 18, 19],
        ],
      },
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
