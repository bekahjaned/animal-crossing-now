import getFishAvailability from "./getFishAvailability";

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

  // when
  const getFish = getFishAvailability("January", 8);

  // then
  expect(getFish).toStrictEqual(fishNow);
});
