import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const CritterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  justify-items: center;
  justify-content: center;
  grid-auto-flow: row;
  margin-bottom: 32px;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 24px;
    justify-items: center;
    justify-content: center;
    grid-auto-flow: row;
  }
`;
