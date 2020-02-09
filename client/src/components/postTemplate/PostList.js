import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
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

const Post = ({post}) => {
  console.log(post.user)
  return (
    <>
      <Wrapper>
        <StyledLink to={`/@${post.user}/${post._id}`}>
          <TitleBlock>{post.title}</TitleBlock>
          {`/@${post.user}/${post._id}`}
          <PostBlock2>
            <div className="content">
              {post.contents}
            </div>
            <div className="tags">{post.tags}</div>
          </PostBlock2>
        </StyledLink>
      </Wrapper>
    </>
  );
};

const PlogList = ({posts}) => {
  
  return (
    <BlogListBlock>
      {posts.map(post => (<Post key={post._id} post={post}/>))}
     
    </BlogListBlock>
  );
};

export default PlogList;
