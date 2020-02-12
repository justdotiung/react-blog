import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';

const PostActionButtonBlock = styled.div``;

const PostActionButton = ({onEdit, onDelete}) => {
    const [ toggle, setToggle] = useState(false);
    const [ message, setMessage] = useState('');

    const onClick = () => {
        setMessage('정말 삭제하시겠습니까?');
        setToggle(true);
    };
    const onToggle =() => {
        setToggle(false);
        onDelete();
    };

    return (
        <PostActionButtonBlock>
            <Button onClick={onEdit}>수정</Button>
            <Button onClick={onClick}>삭제</Button>
            <Modal toggle={toggle} onToggle={onToggle} message={message}/>
        </PostActionButtonBlock>
    );
};

export default PostActionButton;