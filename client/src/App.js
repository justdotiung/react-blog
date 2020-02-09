import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import writePage from "./components/pages/writePage";
import Post from "./components/postTemplate/Post";
const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      <Route path="/@:name/:id" component={Post} />
      <Route path="/login" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage } />
      <Route path="/writer" component={writePage } />
    </>
  );
};

export default App;
