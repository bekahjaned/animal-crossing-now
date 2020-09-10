import React from "react";
import "../index.css";

class FishCard extends React.Component {
  render() {
    const { image, name, location, availability, price } = this.props;

    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Fish/${image}.png`)}
          alt="fish"
        ></img>
        <p className="critter-name">{name}</p>
        <p>{location}</p>
        <p className="availability">Available: {availability}</p>
        <p>Price: {price} Bells</p>
      </div>
    );
  }
}

export default FishCard;
