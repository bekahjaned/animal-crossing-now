import React from "react";

class FishCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="critter">
        <img
          src={require(`../data/images/Fish/${this.props.image}.png`)}
          alt="fish"
        ></img>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default FishCard;
