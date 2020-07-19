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

    this.state = {
      time: today.getHours() + ":" + today.getMinutes(),
      month: months[today.getMonth()],
      date: today.getDate(),
    };
  }
  render() {
    return (
      <div>
        <h2>It's {this.state.time}</h2>
        <h2>
          On {this.state.month} {this.state.date}
        </h2>
      </div>
    );
  }
}

export default Time;
