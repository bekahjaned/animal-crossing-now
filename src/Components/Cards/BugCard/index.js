import React from "react";
import "../index.css";

class BugCard extends React.Component {
  render() {
    const { image, name, location, availability } = this.props;

    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Bugs/${image}.png`)}
          alt="bug"
        ></img>
        <p className="critter-name">{name}</p>
        <p>{location}</p>
        <p>Available - {availability}</p>
      </div>
    );
  }
}

export default BugCard;
