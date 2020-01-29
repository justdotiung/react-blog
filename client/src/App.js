import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      <Route path="/login" component={LoginPage} />

    </>
  );
};

export default App;
