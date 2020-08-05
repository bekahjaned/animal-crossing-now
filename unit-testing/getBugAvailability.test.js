const getBugAvailability = require("./getBugAvailability");

test("get bug availability", () => {
  // given
  const returnedBugs = [
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

  //   when
  const response = getBugAvailability("July", 17);

  //   then
  expect(response).toStrictEqual(returnedBugs);
});
