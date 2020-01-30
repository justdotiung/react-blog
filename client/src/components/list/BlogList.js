import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";

const BlogListBlock = styled(ScreenHelper)`
  --height: 800px;
  background: #c5fcfa;
`;

const BlogList = () => {
  return <BlogListBlock>블로그 리스트</BlogListBlock>;
};

export default BlogList;
