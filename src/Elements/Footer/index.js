import styled from "styled-components";

export const Footer = styled.div`
  text-align: center;
  grid-column: 1 / 13;

  .bmc-button {
    padding: 7px 15px 7px 10px;
    line-height: 35px;
    height: 51px;
    text-decoration: none;
    display: inline-flex;
    color: #000000;
    background-color: #ffdd00;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 18px;
    letter-spacing: -0.08px;
    box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
    margin: 0 auto;
    font-family: "Lato", sans-serif;
    box-sizing: border-box;
  }

  .bmc-button:hover,
  .bmc-button:active,
  .bmc-button:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #000000;
  }

  .bmc-button img {
    height: 34px;
    width: 35px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }
`;
