import getAvailableTime from "./getAvailableTime";

test("displays range of available time", () => {
    // given
    const hours = [[8, 9, 10, 11, 12, 13, 14, 15, 16]];

    // when
    const hoursShown = getAvailableTime(hours);

    // then
    expect(hoursShown).toStrictEqual("8am - 4pm");
})

// -------------------------------------------

test("display multiple ranges of available time", () => {
    // given
    const hours = [
        [4, 5, 6, 7, 8],
        [16, 17, 18, 19]
      ];

    // when
    const hoursShown = getAvailableTime(hours);

    // then
    expect(hoursShown).toStrictEqual("4am - 8am, 4pm - 7pm")
})