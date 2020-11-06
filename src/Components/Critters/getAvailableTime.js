const getAvailableTime = (hours) => {
    let availableTime = "";

    hours.forEach((hour) => {
      if (hour.length === 24) {
        availableTime = "all day";
      } else {
        const AmOrPm1 = hour[0] >= 12 ? "pm" : "am";
        hour[0] = hour[0] % 12 || 12;

        const AmOrPm2 = hour[hour.length - 1] >= 12 ? "pm" : "am";
        hour[hour.length - 1] = hour[hour.length - 1] % 12 || 12;

        if (availableTime !== "") {
          availableTime += ", ";
        }
        availableTime += `${hour[0] + AmOrPm1} - ${
          hour[hour.length - 1] + AmOrPm2
        }`;
      }
    });

    return availableTime;
}

module.exports = getAvailableTime;