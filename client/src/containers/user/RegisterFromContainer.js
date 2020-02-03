import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeField, initform, register } from "../../modules/auth";
import AuthForm from "../../components/user/AuthForm";
import { withRouter } from "react-router-dom";

const RegisterFromContainer = ({
  changeField,
  form,
  user,
  authError,
  register,
  history
}) => {
  const [error, setError] = useState("");

  const onChange = e => {
    const { name, value } = e.target;
    changeField({
      form: "register",
      key: name,
      value
    });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    // console.log(history.push('/'))
    // console.log(form);
    const { name, password, passwordCheck } = form;
    if (!password) {
      setError("비밀번호를 입력하세요");
      return;
    }
    if (!name) {
      setError("아이디를 입력하세요");
      return;
    }
    if (password !== passwordCheck) {
      setError("비밀번호가 일치하지않습니다.");
      changeField({form:'register', key:'passwordCheck', value:''})
      return;
    }
    register({ name, password });
  };

  useEffect(() => {
    if (user) {
      console.log("회원가입 성공");
      history.push('/');
    }
    if (authError) {
      setError(authError.response.data.error);
      return;
    }
  },[user]);
  useEffect(() => {
    initform("register");
  }, [initform]);

  return (
    <AuthForm
      type="register"
      onChange={onChange}
      form={form}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default connect(
  ({ auth }) => ({
    form: auth.register,
    user: auth.auth.user,
    authError: auth.auth.error
  }),
  {
    changeField,
    initform,
    register
  }
)(withRouter(RegisterFromContainer));
