import React from "react";

class Time extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Spetember",
      "October",
      "November",
      "December",
    ];

    const updateTime = (k) => {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    };

    let hour = updateTime(today.getHours());

    let min = updateTime(today.getMinutes());

    this.state = {
      time: hour + ":" + min,
      date:
        months[today.getMonth()] +
        " / " +
        today.getDate() +
        " / " +
        today.getFullYear(),
    };
  }
  render() {
    return (
      <div>
        <h2>Time: {this.state.time}</h2>
        <p>Please make sure to refresh page if the hour changes :)</p>
        <h2>Date: {this.state.date}</h2>
      </div>
    );
  }
}

export default Time;
