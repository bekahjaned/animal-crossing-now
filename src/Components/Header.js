import React from "react";

import Time from "./Time";

class Header extends React.Component {
  render() {
    return (
      <div className="center">
        <h1>Animal Crossing Now</h1>
        <p>
          List of fish and bugs available right now for Animal Crossing: New
          Horizons
        </p>
        <Time />
      </div>
    );
  }
}

export default Header;
