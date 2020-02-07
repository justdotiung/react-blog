import React, { useState, useCallback } from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";

const TagsBlock = styled(ScreenHelper)`
  padding: 1rem;
  margin: auto;

  width: 880px;
`;

const TagsForm = styled.form`
  input,
  button {
    border: none;
    outline: none;
  }

  button {
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-weight: 700;
    :hover {
      cursor: pointer;
      color: white;
      background: #aad8f2;
    }
  }
`;

const TagListWrapper = styled.div`
  display: flex;
  font-size: 0.9rem;
`;

const Tag = styled.div`
  padding-right: 1rem;
  :hover{
      cursor: pointer;
  }
`;
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>
    <span>#</span>
    <span>{tag}</span>
  </Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListWrapper>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrapper>
));

const Tags = () => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const insertTag = useCallback(
    tag => {
      if (!tag) return;
      if (tags.includes(tag)) return;
      setTags([...tags, tag]);
    },
    [tags]
  );

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(value.trim());
      setValue("");
    },
    [value, insertTag]
  );

  const onRemove = useCallback(
    val => {
      setTags(tags.filter(tag => tag !== val));
    },
    [tags]
  );

  return (
    <TagsBlock>
      <TagsForm onSubmit={onSubmit}>
        <input placeholder="#태그입력" onChange={onChange} value={value} />
        <button>추가</button>
      </TagsForm>
      <TagList tags={tags} onRemove={onRemove} />
    </TagsBlock>
  );
};

export default Tags;
