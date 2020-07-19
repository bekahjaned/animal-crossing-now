import React from "react";

import Time from "./Time";

class Header extends React.Component {
  render() {
    return (
      <div className="center">
        <h1>Animal Crossing Now!</h1>
        <Time />
      </div>
    );
  }
}

export default Header;
