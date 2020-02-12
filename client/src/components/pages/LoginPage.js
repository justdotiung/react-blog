import React from "react";
import UserTemplate from "../user/UserTemplate";
import LoginFormContainer from "../../containers/user/LoginFormContainer";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>BLOG - LOGIN</title>
      </Helmet>
      <UserTemplate>
        <LoginFormContainer />
      </UserTemplate>
    </>
  );
};

export default LoginPage;
