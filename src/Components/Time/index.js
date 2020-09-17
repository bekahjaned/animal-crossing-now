import React from "react";

import { TimeDateWrap } from '../../Elements/TimeDateWrap/TimeDateWrap'

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
      "September",
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
    let AmOrPm = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12;

    let min = updateTime(today.getMinutes());

    this.state = {
      time: hour + ":" + min + AmOrPm,
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
      <TimeDateWrap>
        Your local time is <strong>{this.state.time}</strong> on{" "}
        <strong>{this.state.date}</strong>
      </TimeDateWrap>
    );
  }
}

export default Time;
