import styled from "styled-components";

export const CritterGrid = styled.div`
  margin: 40px 0px 60px 0px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 24px;
  justify-items: center;
  justify-content: center;
  grid-auto-flow: row;
`;
