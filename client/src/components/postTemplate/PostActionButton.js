import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PostActionButtonBlock = styled.div``;

const PostActionButton = ({onEdit}) => {
    return (
        <PostActionButtonBlock>
            <Button onClick={onEdit}>수정</Button>
            <Button>삭제</Button>
        </PostActionButtonBlock>
    );
};

export default PostActionButton;