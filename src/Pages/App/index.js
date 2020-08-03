import React from "react";
import "../App/index.css";

import Header from "../../Components/Header";
import Display from "../../Components/Display";
import { Footer } from "../../Elements/Footer";

function App() {
  return (
    <div className="content">
      <Header />
      <Display />
      <Footer>
        If you find this site helpful, you can buy us a coffee at (link).
      </Footer>
    </div>
  );
}

export default App;
