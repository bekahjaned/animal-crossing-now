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
      hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
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
    },
  },
];

const userHemisphere = "southern";

const getFishAvailability = (userMonth, userTime) => {
  const availableFish = fishes.filter((fish) => {
    const { hemisphere, hours } = fish.availability;
    return (
      hemisphere[userHemisphere].includes(userMonth) && hours.includes(userTime)
    );
  });
  return availableFish;
};

module.exports = getFishAvailability;
