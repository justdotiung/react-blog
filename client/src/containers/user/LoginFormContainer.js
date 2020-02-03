import React, { useEffect } from "react";
import AuthForm from "../../components/user/AuthForm";
import { connect } from "react-redux";
import { changeField, initform, login } from "../../modules/auth";
import { userValidation } from "../../modules/user";

const LoginFormContainer = ({ form, changeField, login, auth, authError }) => {
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
    login({name, password});
  };

  useEffect(() => {
    if(authError){
      console.log(authError.response)
      return;
    }
    initform("login");
  }, [initform,auth]);

useEffect(() => {
  if(authError){
    console.log(authError.response)
    return;
  }
},[authError])

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
    user: user.user,
    auth: auth.auth.user,
    authError: auth.auth.error
  }),
  {
    changeField,
    userValidation,
    login
  }
)(LoginFormContainer);
