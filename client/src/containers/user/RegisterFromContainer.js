import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeField, initform } from "../../modules/auth";
import AuthForm from "../../components/user/AuthForm";

const RegisterFromContainer = ({ changeField, form }) => {
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
  };
  useEffect(() => {
    initform("register");
  }, [initform]);

  return <AuthForm type="register" onChange={onChange} form={form} />;
};

export default connect(
  ({ auth }) => ({
    form: auth.register
  }),
  {
    changeField,
    initform
  }
)(RegisterFromContainer);
