import getBugAvailability from "./getBugAvailability";

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
        hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
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
        hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
  ];

  // when
  const getBugs = getBugAvailability("October", 12);

  // then
  expect(getBugs).toStrictEqual(bugsNow);
});
