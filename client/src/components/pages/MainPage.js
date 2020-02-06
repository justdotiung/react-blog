import React from "react";
import PostList from "../postTemplate/PostList";
import HeaderContainer from "../../containers/commons/HeaderContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
    </>
  );
};

export default MainPage;
