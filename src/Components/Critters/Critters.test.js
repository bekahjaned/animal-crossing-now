import React from "react";
import renderer from "react-test-renderer";

import Critters from "./index";

it("renders multiple critter cards", () => {
  // given
  const allAvailableFish = [
    {
      name: "Moray Eel",
      location: "Sea",
      price: "2,000",
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
      price: "5,500",
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
      price: "2,500",
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
      price: "80",
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
      price: "200",
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
      price: "550",
      image: "Evening Cicada",
      availability: {
        hours: [
          [4, 5, 6, 7, 8],
          [16, 17, 18, 19],
        ],
      },
    },
  ];

  const allAvailableSeaCreatures = [
    {
      name: "Seaweed",
      price: "600",
      image: "Seaweed",
      availability: {
        hours: [
          [0,
          1,
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
          23]
        ]
      }
    },
    {
      name: "Horseshoe Crab",
      price: "2,500",
      image: "Horseshoe Crab",
      availability: {
        hours: [
          [21, 22, 23, 0, 1, 2, 3, 4]
        ]
      }
    },
  ]

  //   when
  const tree = renderer
    .create(
      <Critters
        allAvailableFish={allAvailableFish}
        allAvailableBugs={allAvailableBugs}
        allAvailableSeaCreatures={allAvailableSeaCreatures}
      />
    )
    .toJSON();

  // then
  expect(tree).toMatchSnapshot();
});
