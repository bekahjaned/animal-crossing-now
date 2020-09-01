import React from "react";
import styled from "styled-components";

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
    const media = { desktop: "@media(min-width: 1000px)" };

    const TimeDateWrap = styled.div`
      text-align: center;
      margin-bottom: 16px;

      ${media.desktop} {
        margin-bottom: 0;
        padding-right: 36px;
      }
    `;

    return (
      <TimeDateWrap>
        Your local time is <strong>{this.state.time}</strong> on{" "}
        <strong>{this.state.date}</strong>
      </TimeDateWrap>
    );
  }
}

export default Time;
