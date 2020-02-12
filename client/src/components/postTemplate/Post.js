import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
import { Helmet } from "react-helmet-async";

const PostBlock = styled(ScreenHelper)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 800px;
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

const HeaderDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;

  span {
    padding-left: 5px;
  }
`;
const TagListWrapper = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

const Tag = styled.div`
display:flex;
  padding-right: 1rem;
`;

const TagItem = ({ tag }) => (
  <Tag>
    <span>#</span>
    <span>{tag}</span>
  </Tag>
);

const TagList = ({ tags }) => (
  <TagListWrapper>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListWrapper>
);

const Post = ({ post, loading, postError, actionButtons, userInfo }) => {
  if (postError) return <div>{postError}</div>;
  if (loading || !post) return null;
  // 여기서 비동기 처리가 되기때문에 post를 가져오는 때를 모르기때문에 조건 먼저 해줘야 한다.
  const { title, contents, tags, user, writeDate } = post;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PostBlock>
        <HeaderDiv>
          by <span>{user.name}</span>
          <span>{new Date(writeDate).toLocaleDateString()}</span>
          <span>{user._id === userInfo._id ? actionButtons : undefined}</span>
        </HeaderDiv>
        <TitleBlock>{title}</TitleBlock>
        <ContentsBlock dangerouslySetInnerHTML={{ __html: contents }} />
        <TagList tags={tags}></TagList>
      </PostBlock>
    </>
  );
};

export default Post;
