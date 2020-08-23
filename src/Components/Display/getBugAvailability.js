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

const userHemisphere = "northern";

const getBugAvailability = (userMonth, userTime) => {
  const availableBugs = bugs.filter((bug) => {
    const { hemisphere, hours } = bug.availability;

    if (hours.length === 2) {
      return (
        (hemisphere[userHemisphere].includes(userMonth) &&
          hours[0].includes(userTime)) ||
        hours[1].includes(userTime)
      );
    } else {
      return (
        hemisphere[userHemisphere].includes(userMonth) &&
        hours[0].includes(userTime)
      );
    }
  });
  return availableBugs;
};

module.exports = getBugAvailability;
