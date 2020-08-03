import React from "react";
import "../index.css";

class BugCard extends React.Component {
  render() {
    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Bugs/${this.props.image}.png`)}
          alt="bug"
        ></img>
        <p className="critter-name">{this.props.name}</p>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default BugCard;
