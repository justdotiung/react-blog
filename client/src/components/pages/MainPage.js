import React from "react";
import HeaderContainer from "../../containers/commons/HeaderContainer";
import PostListContainer from "../../containers/postsTemplate/PostListContainer";
import PaginationContainer from "../../containers/postsTemplate/PaginationContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default MainPage;
