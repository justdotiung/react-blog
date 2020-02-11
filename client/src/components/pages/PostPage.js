import React from "react";
import PostContainer from "../../containers/postsTemplate/PostContainer";
import HeaderContainer from "../../containers/commons/HeaderContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer writer/>
      <PostContainer />
    </>
  );
};

export default PostPage;
