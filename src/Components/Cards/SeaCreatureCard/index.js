import React from "react";
import "../index.css";

// TODO
// Change to a functional component
class SeaCreatureCard extends React.Component {
  render() {
    const { image, name, availability, price } = this.props;

    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Sea Creatures/${image}.png`)}
          alt="sea creature"
        ></img>
        <p className="critter-name">{name}</p>
        <p className="availability">Available: {availability}</p>
        <p>Price: {price} Bells</p>
      </div>
    );
  }
}

export default SeaCreatureCard;
