import React from "react";

class BugCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="critter">
        <img
          src={require(`../data/images/Bugs/${this.props.image}.png`)}
          alt="bug"
        ></img>
        <h3>{this.props.name}</h3>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default BugCard;
