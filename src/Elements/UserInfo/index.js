import styled from "styled-components";

const media = { desktop: "@media(min-width: 1000px)" };

export const UserInfo = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
  }
`;
