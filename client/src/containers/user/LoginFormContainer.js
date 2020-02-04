import React, { useEffect, useState, useCallback } from "react";
import AuthForm from "../../components/user/AuthForm";
import { connect } from "react-redux";
import { changeField, initform, login } from "../../modules/auth";
import { withRouter } from "react-router-dom";
import { userCheck } from "../../modules/check";

const LoginFormContainer = ({
  history,
  form,
  changeField,
  login,
  auth,
  authError,
  userCheck,
  check
}) => {
  const [error, setError] = useState(null);
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      changeField({
        form: "login",
        key: name,
        value
      });
    },
    [changeField]
  );

  const onSubmit = e => {
    e.preventDefault();
    const { name, password } = form;
    login({ name, password });
  };

  useEffect(() => {
    initform("login");

    if (authError) {
      const res = authError.response;
      if (res.status === 401) {
        setError(res.data.error);
      }
      return;
    }
    if (auth) {
      userCheck();
      console.log(check);
      if (check) {
        localStorage.setItem("user", JSON.stringify(check));
        setError(null);
        history.push("/");
      }
    }
  }, [authError, auth, check, history, userCheck]);

  useEffect(() => {}, []);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default connect(
  ({ auth, check }) => ({
    form: auth.login,
    auth: auth.auth.user,
    authError: auth.auth.error,
    check: check.user
  }),
  {
    changeField,
    login,
    userCheck
  }
)(withRouter(LoginFormContainer));
