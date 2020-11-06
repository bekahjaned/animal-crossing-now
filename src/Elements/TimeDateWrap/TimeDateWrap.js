import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const TimeDateWrap = styled.div`
  text-align: center;
  margin-bottom: 16px;

  ${media.desktop} {
    margin-bottom: 0;
    padding-right: 36px;
  }
`;