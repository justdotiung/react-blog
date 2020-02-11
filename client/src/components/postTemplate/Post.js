import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";

const PostBlock = styled(ScreenHelper)`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TitleBlock = styled.div`
  font-size: 2rem;
  outline: none;
  padding: 0.5rem;
  /* text-align: center; */
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 2rem 0;
  width: 100%;
`;

const ContentsBlock = styled.div`
  min-height: 320px;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const TagItem = ({ tag }) => (
  <>
    <span>#</span>
    <span>{tag}</span>
  </>
);

const TagList = ({ tags }) => (
  <>
    
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} />
    ))}
  </>
);

const Post = ({ post, loading, postError, actionButtons, userInfo }) => {
  if(postError) return <div>{postError}</div>
  if (loading || !post) return null;
  // 여기서 비동기 처리가 되기때문에 post를 가져오는 때를 모르기때문에 조건 먼저 해줘야 한다.
  const { title, contents, tags, user, writeDate  } = post;
  console.log(user);
  console.log(userInfo);
  return (
  <>
    <PostBlock>
        <div>여기는 작성자 {user.name} 그리고 날짜 {new Date(writeDate).toLocaleDateString()}</div>
        <TitleBlock>{title}</TitleBlock>
        <ContentsBlock dangerouslySetInnerHTML={{__html: contents}}/>
        <TagList tags={tags}></TagList>
    </PostBlock>
      <div>
        {user._id === userInfo._id ? actionButtons : undefined }
      </div>
  </>
  );
};

export default Post;
