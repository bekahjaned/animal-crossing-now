const bugs = [
  {
    name: "Peacock Butterfly",
    location: "Flying (hybrid flowers",
    availability: {
      hemisphere: {
        northern: ["March", "April", "May", "June"],
        southern: ["September", "October", "November", "December"],
      },
      hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
  },
  {
    name: "Common Bluebottle",
    location: "Flying",
    availability: {
      hemisphere: {
        northern: ["April", "May", "June", "July", "August"],
        southern: ["October", "November", "December", "January", "February"],
      },
      hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
  },
];

const getBugAvailability = (userMonth, userTime) => {
  const availableBugs = bugs.filter((bug) => {
    const { hemisphere, hours } = bug.availability;
    return (
      hemisphere["northern"].includes(userMonth) && hours.includes(userTime)
    );
  });
  return availableBugs;
};

module.exports = getBugAvailability;
