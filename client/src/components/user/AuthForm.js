import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const LoginFormBlock = styled.form`
  margin-top: 2.5rem;
  .link-block {
    display: flex;
    margin-top: 1.5rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 4px;
  text-align: center;
  padding: 0.4rem 0;
  &:hover {
    border: 0.1rem solid #aad8f2;
    ::placeholder {
      color: #7ac9f5;
    }
  }
  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  text-decoration: none;
  margin-left: auto;
  & + & {
    margin-left: 1rem;
  }
`;

const LoginForm = ({type, form, onChange, onSubmit }) => {
  console.log();
  return (
    <LoginFormBlock onSubmit={onSubmit}>
      <StyledInput
        name="name"
        placeholder="아이디"
        onChange={onChange}
        value={form.name}
      />
      <StyledInput
        name="password"
        type="password"
        placeholder="패스워드"
        onChange={onChange}
        value={form.password}
      />
      {type === 'register' && (
        <StyledInput
          name="passwordCheck"
          type="password"
          placeholder="패스워드 확인"
          onChange={onChange}
          value={form.passwordCheck}
        />
      )}
      <StyledButton authButton>로그인</StyledButton>
      <div className="link-block">
        <StyledLink to="/register">회원가입하기</StyledLink>
        {/* <StyledLink to="/register">비밀번호찾기</StyledLink> */}
      </div>
    </LoginFormBlock>
  );
};

export default LoginForm;
