import React from "react";
import styled from "styled-components";
import Screen from "../common/Screen";

const BlogListBlock = styled(Screen)`
  --height: 800px;
  background: #c5fcfa;
`;

const BlogList = () => {
  return <BlogListBlock>블로그 리스트</BlogListBlock>;
};

export default BlogList;
