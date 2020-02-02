import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeField, initform, register } from "../../modules/auth";
import AuthForm from "../../components/user/AuthForm";

const RegisterFromContainer = ({ changeField, form, user, error, register }) => {
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
    console.log('e');
    console.log(form);
    const { name, password } = form;
    register({name, password});
  };

  useEffect(() => {
    initform("register");
  }, [initform]);

  useEffect(() => {
    if (user) {
      console.log("회원가입 성공");
    }
    if (error) {
      console.log(error);
      return;
    }
  });

  return (
    <AuthForm
      type="register"
      onChange={onChange}
      form={form}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ auth }) => ({
    form: auth.register,
    user: auth.auth.user,
    error: auth.auth.error
  }),
  {
    changeField,
    initform,
    register
  }
)(RegisterFromContainer);
