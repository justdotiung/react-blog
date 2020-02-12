import React from "react";
import UserTemplate from "../user/UserTemplate";
import RegisterFromContainer from "../../containers/user/RegisterFromContainer";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>REGISTER</title>
      </Helmet>
      <UserTemplate>
        <RegisterFromContainer />
      </UserTemplate>
    </>
  );
};

export default RegisterPage;
