import React from "react";
import "../index.css";

class FishCard extends React.Component {
  render() {
    return (
      <div className="critter">
        <img
          src={require(`../../../data/images/Fish/${this.props.image}.png`)}
          alt="fish"
        ></img>
        <p className="critter-name">{this.props.name}</p>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default FishCard;
