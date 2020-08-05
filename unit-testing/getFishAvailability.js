const fishes = [
  {
    name: "Rainbowfish",
    location: "River",
    availability: {
      hemisphere: {
        northern: ["May", "June", "July", "August", "September", "October"],
        southern: [
          "January",
          "February",
          "March",
          "April",
          "November",
          "December",
        ],
      },
      hours: [9, 10, 11, 12, 13, 14, 15, 16],
    },
  },
  {
    name: "Saddled Bichir",
    location: "River",
    availability: {
      hemisphere: {
        northern: ["June", "July", "August", "September"],
        southern: ["January", "February", "March", "December"],
      },
      hours: [21, 22, 23, 24, 1, 2, 3, 4],
    },
  },
  {
    name: "Crucian Carp",
    location: "River",
    availability: {
      hemisphere: {
        northern: [
          "January",
          "February",
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
        southern: [
          "January",
          "February",
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
      hours: [
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
        23,
      ],
    },
  },
];

const getFishAvailability = (userMonth, userTime) => {
  const availableFish = fishes.filter((fish) => {
    const { hemisphere, hours } = fish.availability;
    return (
      hemisphere["northern"].includes(userMonth) && hours.includes(userTime)
    );
  });
  return availableFish;
};

module.exports = getFishAvailability;
