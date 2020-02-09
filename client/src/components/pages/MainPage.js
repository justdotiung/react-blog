import React from "react";
import PostList from "../postTemplate/PostList";
import HeaderContainer from "../../containers/commons/HeaderContainer";
import PostListContainer from "../../containers/postsTemplate/PostListContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default MainPage;
