import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";

const PostActionButtonBlock = styled.div`

`;

const Button = styled.button`
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin-left: 10px;
    &:hover {
        color: gray;
        cursor: pointer;
    }
    &+&{
        padding-left: 5px;
    }
`;

const PostActionButton = ({ onEdit, onDelete }) => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  const onClick = () => {
    setMessage("정말 삭제하시겠습니까?");
    setToggle(true);
  };
  const onAgree = () => {
    setToggle(false);
    onDelete();
};

const onCancel = () => {
    setToggle(false);
  }

  return (
    <PostActionButtonBlock>
      <Button onClick={onEdit}>수정</Button>
      <Button onClick={onClick}>삭제</Button>
      <Modal toggle={toggle} onToggle={onAgree} onCancel={onCancel} message={message} />
    </PostActionButtonBlock>
  );
};

export default PostActionButton;
