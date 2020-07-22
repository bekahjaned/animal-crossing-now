import React from "react";

class CritterCard extends React.Component {
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
        <h3>{this.props.name}</h3>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default CritterCard;
