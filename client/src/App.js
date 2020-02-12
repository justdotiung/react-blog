import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import writePage from "./components/pages/writePage";
import PostPage from "./components/pages/PostPage";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>BLOG</title>
      </Helmet>
      <Route path="/" component={MainPage} exact />
      <Route path="/@:name/:id" component={PostPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/writer" component={writePage} />
    </>
  );
};

export default App;
