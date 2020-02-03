import React from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";
import Button from "./Button";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  opacity: 0.7;
`;
const StyledHeader = styled(ScreenHelper)`
  height: 4.5rem;
  display: flex;
  background: #88d1ce;

  .button-block{
    margin : auto;
    margin-right: 1rem;
  }
`;
const Space = styled.div`
  height: 4.5rem;
`;
const StyledLink = styled(Button)`
padding: 8px;
font-size:1rem;
font-weight:700;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <StyledHeader>
          blog
          <div className="button-block">
            <StyledLink to='/login' >로그인</StyledLink>
          </div>
        </StyledHeader>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
