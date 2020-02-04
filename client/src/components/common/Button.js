import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyle = css`
  background: white;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  padding: 0.7rem 0;

  cursor: pointer;
  &:hover {
    background: #aad8f2;
    color: white;
  }

  ${props =>
    props.authButton &&
    css`
      width: 100%;
      font-size: 1.2rem;
      font-weight: bold;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  color: inherit;
  text-decoration: none;
`;

const Button = props => {
  return props.to ? (
    <StyledLink {...props} /> 
    // <StyledLink {...props} auth={props.authButton ? "true" : "false" }//a태그는 true 값이 props로 설정되는것을 허용하지않음. 그렇기에 삼항연산자를 사용 
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
