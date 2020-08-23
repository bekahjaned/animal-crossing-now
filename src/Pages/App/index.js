import React from "react";
import "../App/index.css";

import { ContentWrap } from "../../Elements/ContentWrap/";
import { Header } from "../../Elements/Header/";
import Display from "../../Components/Display";
import { Footer } from "../../Elements/Footer/";

function App() {
  return (
    <ContentWrap>
      <Header>
        <h1>Animal Crossing Now</h1>
        <p>
          List of fish and bugs available right now for Animal Crossing: New
          Horizons
        </p>
      </Header>
      <Display />
      <Footer>
        <a
          className="bmc-button"
          href="https://www.buymeacoffee.com/mannyandrebekah"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy us a coffee"
          />
          <span>Buy us a coffee?</span>
        </a>
      </Footer>
    </ContentWrap>
  );
}

export default App;
