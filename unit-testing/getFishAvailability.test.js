const getFishAvailability = require("./getFishAvailability");

test("get fish availability", () => {
  //   given

  const returnedFish = [
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

  // when
  const response = getFishAvailability("July", 15);

  // then
  expect(response).toStrictEqual(returnedFish);
});
