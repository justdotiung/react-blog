import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeField, initform, register } from "../../modules/auth";
import AuthForm from "../../components/user/AuthForm";
import { withRouter } from "react-router-dom";
import { userCheck } from "../../modules/check";

const RegisterFromContainer = ({
  changeField,
  form,
  user,
  authError,
  register,
  userCheck,
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
    if (!name || name.length < 2) {
      setError("아이디는 최소 2자 이상입니다.");
      return;
    }
    if (password !== passwordCheck) {
      setError("비밀번호가 일치하지않습니다.");
      changeField({form:'register', key:'passwordCheck', value:''})
      changeField({form:'register', key:'password', value:''})
      return;
    }
    register({ name, password });
  };

  useEffect(() => {
    console.log(1);
    if (user) {
      console.log("회원가입 성공");
      userCheck()
      history.push('/');
    }
    
  },[user, history, userCheck]);
  
  useEffect(() => {
    initform("register");
    setError(null);
  }, [setError]);
  
  useEffect(()=>{
    console.log(authError);
    if (authError) {
      
      console.log("회원가입 성공");
      setError(authError.response.data.error);
      return;
    }
  },[authError])

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
    register,
    userCheck
  }
)(withRouter(RegisterFromContainer));
