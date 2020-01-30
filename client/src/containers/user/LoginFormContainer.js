import React, { useEffect } from "react";
import LoginForm from "../../components/user/LoginForm";
import { connect } from "react-redux";
import { changeField } from "../../modules/auth";
import { userValidation } from '../../modules/user';

const LoginFormContainer = ({ form, changeField, }) => {
  const onChange = e => {
    const { name, value } = e.target;
    changeField({
      form: "login",
      key: name,
      value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password } = form;
    console.log(name)
    console.log(password);
    localStorage.setItem('user', JSON.stringify(form));
  }

  useEffect(() => {
     
          console.log(localStorage.getItem('user'));
    
  },[localStorage])

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
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
