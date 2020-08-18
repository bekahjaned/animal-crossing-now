import React from "react";
import "../App/index.css";

import { Header } from "../../Elements/Header/";
import Display from "../../Components/Display";
import { Footer } from "../../Elements/Footer/";

function App() {
  return (
    <div className="content">
      <Header>
        <h1>Animal Crossing Now</h1>
        <p>
          List of fish and bugs available right now for Animal Crossing: New
          Horizons
        </p>
      </Header>
      <Display />
      <Footer>
        If you find this site helpful, you can buy us a coffee at (link).
      </Footer>
    </div>
  );
}

export default App;
