import React from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  opacity: 0.7;
  border-bottom: 2px solid black;
  opacity: 0.7;
`;
const StyledHeader = styled(ScreenHelper)`
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  .button-block {
    margin-top: auto;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: 1rem;
  }
`;
const Space = styled.div`
  height: 4.5rem;
`;
const StyledButton = styled(Button)`
  padding: 4px 10px;
  font-size: 0.74rem;
  height: 26px;
`;

const StyledLink = styled(Link)`
  padding-left: 1rem;
  margin-bottom: 0;
  font-size: 2.7rem; 
  font-weight: 700;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Header = ({ user, onClick }) => {
  return (
    <>
      <HeaderBlock>
        <StyledHeader>
          <StyledLink to="/">BLOG</StyledLink>
          <div className="button-block">
            {user ? (
              <StyledButton onClick={onClick}>로그아웃</StyledButton>
            ) : (
              <StyledButton to="/login">로그인</StyledButton>
            )}
          </div>
        </StyledHeader>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
