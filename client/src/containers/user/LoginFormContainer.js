import React, { useEffect } from "react";
import AuthForm from "../../components/user/AuthForm";
import { connect } from "react-redux";
import { changeField, initform } from "../../modules/auth";
import { userValidation } from "../../modules/user";

const LoginFormContainer = ({ form, changeField }) => {
  const onChange = e => {
    const { name, value } = e.target;
    changeField({
      form: "login",
      key: name,
      value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, password } = form;
    console.log(name);
    console.log(password);
    localStorage.setItem("user", JSON.stringify(form));
  };

  useEffect(() => {
    initform("login");
    console.log(localStorage.getItem("user"));
  }, [localStorage, initform]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default connect(
  ({ auth, user }) => ({
    form: auth.login,
    user: user.user
  }),
  {
    changeField,
    userValidation
  }
)(LoginFormContainer);
