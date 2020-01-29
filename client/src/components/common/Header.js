import React from "react";
import styled from "styled-components";
import Screen from "./Screen";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  opacity:0.7;
  `;
const StyledHeader = styled(Screen)`
  height: 4.5rem;
  display: flex;
  background: #88d1ce;
`;
const Space = styled.div`
  height: 4.5rem;
`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <StyledHeader>헤더</StyledHeader>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;