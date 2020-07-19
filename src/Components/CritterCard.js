import React from "react";

class CritterCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="critter">
        <h3>{this.props.name}</h3>
        <p>Location: {this.props.location}</p>
      </div>
    );
  }
}

export default CritterCard;
