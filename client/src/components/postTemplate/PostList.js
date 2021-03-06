import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
import { Link } from "react-router-dom";

const BlogListBlock = styled(ScreenHelper)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .max-item {
    padding-top: 1rem;
    width: 1024px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
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
  background: #aad8f2;
`;

const PostBlock = styled.div`
  border-radius: 7px;
  top: -150px;
  position: relative;
  opacity: 0.7;

  .writer {
    width: 50px;
    height: 50px;
    margin: auto;
    margin-right: 0px;
    margin-top: 250px;
    text-align:center;
  
  }
`;

const StyledLink = styled(Link)`
  height: 300px;
  width: 300px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  & + & {
    margin-left: 2rem;
  }
`;

const PostItem = ({ post }) => {
  return (
    <>
      <Wrapper>
        <StyledLink to={`/@${post.user.name}/${post._id}`}>
          <TitleBlock>{post.title}</TitleBlock>
          <PostBlock>
            <div className="writer">
              {post.user.name}</div>
          </PostBlock>
        </StyledLink>
      </Wrapper>
    </>
  );
};

const PlogList = ({ posts, loading }) => {

  if(loading || !posts) return null;
  return (
    <BlogListBlock>
      <div className="max-item">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </BlogListBlock>
  );
};

export default PlogList;
