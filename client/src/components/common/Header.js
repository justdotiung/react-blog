import React from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 2px solid black;
  opacity: 0.9;
  z-index: 2;
`;
const StyledHeader = styled(ScreenHelper)`
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  .button-block {
    display: flex;
    justify-content:flex-end;
    margin: auto 1rem 1rem auto;
    width: 300px;
  }
`;
const Space = styled.div`
  height: 4.5rem;
`;
const StyledButton = styled(Button)`
  padding: 3px 10px 4px;
  margin-left: 10px;
  margin-top:auto;
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

const Header = ({ user, onClick, ...props}) => {
  return (
    <>
      <HeaderBlock>
        <StyledHeader>
          <StyledLink to="/">BLOG</StyledLink>
          <div className="button-block">
            {user ? (
              <>
                {props.writer || <Button to="/writer" post>쓰기</Button>}
                <StyledButton onClick={onClick} post >로그아웃</StyledButton>
              </>
            ) : (
              <Button to="/login" post>로그인</Button>
            )}
          </div>
        </StyledHeader>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
