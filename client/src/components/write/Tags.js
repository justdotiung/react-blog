import React, { useState, useCallback, useEffect } from "react";
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
       {console.log(tags)}
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrapper>
));

const Tags = ({currentTags, changeFeild}) => {
  const [value, setValue] = useState("");
  const [localTags, setLocalTags] = useState([]);
console.log(currentTags);
  const insertTag = useCallback(
    tag => {
        console.log(localTags)
        if (!tag) return;
        if (localTags.includes(tag)) return;
        setLocalTags([...localTags, tag]);
        changeFeild(localTags)
        console.log(localTags)
    },
    [localTags, changeFeild]
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
        setLocalTags(localTags.filter(tag => tag !== val));
      changeFeild(localTags)
    },
    [localTags, changeFeild]
  );
useEffect((
)=> {
console.log(currentTags);
},[currentTags])
  return (
    <TagsBlock>
      <TagsForm onSubmit={onSubmit}>
        <input placeholder="#태그입력" onChange={onChange} value={value} />
        <button>추가</button>
      </TagsForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagsBlock>
  );
};

export default Tags;
