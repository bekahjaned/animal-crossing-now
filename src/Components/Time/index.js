import React from "react";
import "../Time/index.css";

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
        " " +
        today.getDate() +
        ", " +
        today.getFullYear(),
    };
  }
  render() {
    return (
      <div className="time-date">
        Your local time is <strong>{this.state.time}</strong> on{" "}
        <strong>{this.state.date}</strong>
      </div>
    );
  }
}

export default Time;
