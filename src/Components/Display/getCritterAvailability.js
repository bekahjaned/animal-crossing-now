const userHemisphere = "northern";

const getCritterAvailability = (critters, userMonth, userTime) => {
    const availableCritters = critters.filter((critter) => {
      const { hemisphere, hours } = critter.availability;

      if(hours.length ===2) {
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
    return availableCritters;
  }

module.exports = getCritterAvailability;