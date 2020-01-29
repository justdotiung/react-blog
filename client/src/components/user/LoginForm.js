import React from "react";
import styled from "styled-components";

const LoginFormBlock = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const StyledInput = styled.input`
border: none;
outline: none;
width: 300px;
border-bottom: 1px solid #dedede;
padding-bottom: 0.4rem;
text-align:center;
font-size:1rem;
&:hover{
    border-bottom: 0.1rem solid #aad8f2;
    ::placeholder{
      color: #7ac9f5;
    }
}
&+&{
    margin-top: 0.7rem;
}
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <StyledInput name="name" placeholder="아이디" />
      <StyledInput name="password" type="password"  placeholder="패스워드" />
    </LoginFormBlock>
  );
};

export default LoginForm;
