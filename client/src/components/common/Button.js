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
`;

const Button = props => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
