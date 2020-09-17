import getCritterAvailability from "./getCritterAvailability";

const bugs = [
    {
      name: "Common Butterfly",
      location: "Flying",
      image: "Common Butterfly",
      availability: {
        hemisphere: {
          northern: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November",
            "December",
          ],
          southern: [
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
          ],
        },
        hours: [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
      },
    },
    {
      name: "Yellow Butterfly",
      location: "Flying",
      image: "Yellow Butterfly",
      availability: {
        hemisphere: {
          northern: ["March", "April", "May", "June", "September", "October"],
          southern: [
            "March",
            "April",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        hours: [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
      },
    },
    {
      name: "Tiger Butterfly",
      location: "Flying",
      image: "Tiger Butterfly",
      availability: {
        hemisphere: {
          northern: [
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
          ],
          southern: [
            "September",
            "October",
            "November",
            "December",
            "January",
            "February",
            "March",
          ],
        },
        hours: [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
      },
    },
  ];

test("get available bugs depending on users time and date", () => {
  // given
  const bugsNow = [
    {
      name: "Common Butterfly",
      location: "Flying",
      image: "Common Butterfly",
      availability: {
        hemisphere: {
          northern: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "September",
            "October",
            "November",
            "December",
          ],
          southern: [
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
          ],
        },
        hours: [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
      },
    },
    {
      name: "Yellow Butterfly",
      location: "Flying",
      image: "Yellow Butterfly",
      availability: {
        hemisphere: {
          northern: ["March", "April", "May", "June", "September", "October"],
          southern: [
            "March",
            "April",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        hours: [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
      },
    },
  ];

  // when
  const getBugs = getCritterAvailability(bugs, "October", 12);

  // then
  expect(getBugs).toStrictEqual(bugsNow);
});

// ------------------------------------------------------------

const fishes = [
    {
      name: "Napoleonfish",
      location: "Sea",
      image: "Napoleon Fish",
      availability: {
        hemisphere: {
          northern: ["July", "August"],
          southern: ["January", "February"],
        },
        hours: [
          [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        ],
      },
    },
    {
      name: "Butterfly Fish",
      location: "Sea",
      image: "Butterfly Fish",
      availability: {
        hemisphere: {
          northern: ["April", "May", "June", "July", "August", "September"],
          southern: [
            "January",
            "February",
            "March",
            "October",
            "November",
            "December",
          ],
        },
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
      name: "Sturgeon",
      location: "River (mouth)",
      image: "Sturgeon",
      availability: {
        hemisphere: {
          northern: [
            "January",
            "February",
            "March",
            "September",
            "October",
            "November",
            "December",
          ],
          southern: [
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
          ],
        },
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
  ];

  test("get available fish depending on users time and date", () => {
    // given
    const fishNow = [
      {
        name: "Napoleonfish",
        location: "Sea",
        image: "Napoleon Fish",
        availability: {
          hemisphere: {
            northern: ["July", "August"],
            southern: ["January", "February"],
          },
          hours: [
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
          ],
        },
      },
      {
        name: "Butterfly Fish",
        location: "Sea",
        image: "Butterfly Fish",
        availability: {
          hemisphere: {
            northern: ["April", "May", "June", "July", "August", "September"],
            southern: [
              "January",
              "February",
              "March",
              "October",
              "November",
              "December",
            ],
          },
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
    ];
  
    // when
    const getFish = getCritterAvailability(fishes, "August", 8);
  
    // then
    expect(getFish).toStrictEqual(fishNow);
  });

// ------------------------------------------------------------

const seaCreatures = [
    {
        name: "Sea Cucumber",
        price: "500",
        image: "Sea Cucumber",
        availability: {
          hemisphere: {
            northern: [
              "November",
              "December",
              "January",
              "February",
              "March",
              "April"
            ],
            southern: ["May", "June", "July", "August", "September", "October"]
          },
          hours: [
            [
              0,
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
              23
            ]
          ]
        }
      },
      {
        name: "Sea Pig",
        price: "10,000",
        image: "Sea Pig",
        availability: {
          hemisphere: {
            northern: ["November", "December", "January", "February"],
            southern: ["May", "June", "July", "August"]
          },
          hours: [
            [
              0,
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
              23
            ]
          ]
        }
      },
      {
        name: "Sea Grapes",
        price: "900",
        image: "Sea Grapes",
        availability: {
          hemisphere: {
            northern: ["June", "July", "August", "September"],
            southern: ["December", "January", "February", "March"]
          },
          hours: [
            [
              0,
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
              23
            ]
          ]
        }
      }
]

test("get available sea creatures depending on users time and date", () => {
    // given
    const seaCreaturesNow = [
      {
          name: "Sea Cucumber",
          price: "500",
          image: "Sea Cucumber",
          availability: {
            hemisphere: {
              northern: [
                "November",
                "December",
                "January",
                "February",
                "March",
                "April"
              ],
              southern: ["May", "June", "July", "August", "September", "October"]
            },
            hours: [
              [
                0,
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
                23
              ]
            ]
          }
        },
        {
          name: "Sea Pig",
          price: "10,000",
          image: "Sea Pig",
          availability: {
            hemisphere: {
              northern: ["November", "December", "January", "February"],
              southern: ["May", "June", "July", "August"]
            },
            hours: [
              [
                0,
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
                23
              ]
            ]
          }
        }
    ];
  
    // when
    const getSeaCreatures = getCritterAvailability(seaCreatures, "November", 8);
  
    // then
    expect(getSeaCreatures).toStrictEqual(seaCreaturesNow);
  });