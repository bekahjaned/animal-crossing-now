import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 30px;
  max-width: 382px;
  margin: 0 auto;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 30px;
    max-width: 1302px;
    margin: 0 auto;
  }
`;
