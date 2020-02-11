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
  ${props =>
    props.post &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100px;
      font-size: 1.2rem;
      height: 32px;
      font-weight: 700;
    `}
  ${props =>
    props.page &&
    css`
      color: red;
      width: 70px;
      &:disabled {
        width: 70px;
        cursor: default;
        background: white;
        color: rgb(170, 170, 170);
      }
    `}  
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? (
    <StyledLink
      {...props}
      post={props.post ? 1 : 0}
      page={props.page ? 1 : 0}
    />
  ) : (
    // <StyledLink {...props} auth={props.authButton ? "true" : "false" }//a태그는 true 값이 props로 설정되는것을 허용하지않음. 그렇기에 삼항연산자를 사용
    <StyledButton {...props} />
  );
};

export default Button;
