import React from "react";
import UserTemplate from "../user/UserTemplate";
import LoginFormContainer from "../../containers/user/LoginFormContainer";


const LoginPage = () => {
  return (
    <UserTemplate>
        <LoginFormContainer />
    </UserTemplate>
  );
};

export default LoginPage;
