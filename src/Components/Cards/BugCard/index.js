import React from "react";
import "../index.css";

// TODO
// Change to a functional component
class BugCard extends React.Component {
  render() {
    const { image, name, location, availability, price } = this.props;

    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Bugs/${image}.png`)}
          alt="bug"
        ></img>
        <p className="critter-name">{name}</p>
        <p>{location}</p>
        <p className="availability">Available: {availability}</p>
        <p>Price: {price} Bells</p>
      </div>
    );
  }
}

export default BugCard;
