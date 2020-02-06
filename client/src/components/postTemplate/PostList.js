import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
import Button from "../common/Button";
import { Link } from "react-router-dom";


const BlogListBlock = styled(ScreenHelper)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TitleBlock = styled.div`
  top: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  opacity: 0.8;
  width: 100%;
  height: 150px;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  background:#aad8f2;
`;

const PostBlock2 = styled.div`
  border-radius: 7px;
  top: -150px;
  position: relative;
  opacity: 0.7;
  height: 100%;
 
  .tags {
    bottom: 0px;
  }
`;

const StyledLink = styled(Link)`
  height: 300px;
  width: 300px;
  &:hover {
      transform: scale(1.01);
      transition: all 0.1s ease-in-out;
      border-radius: 5px;
      border: 1px solid black;
    }
    `;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    margin-top: 1rem;
  }
`;

const Post = () => {
  return (
    <>
      <Wrapper>
        <StyledLink to="post">
          <TitleBlock>오늘.</TitleBlock>
          <PostBlock2>
            <div className="content">
              내용sssssss sdfsdf ssssssssssssssssssss
            </div>
            <div className="tags">작성자</div>
          </PostBlock2>
        </StyledLink>
      </Wrapper>
    </>
  );
};

const PlogList = () => {
  return (
    <BlogListBlock>
      블로그 리스트
      <Post />
      <Post />
      <Post />
      <Post />
     
    </BlogListBlock>
  );
};

export default PlogList;
