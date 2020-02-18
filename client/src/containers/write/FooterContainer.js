import React, { useEffect, useState, useCallback } from "react";
import Footer from "../../components/write/Footer";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { writePost, updatePost } from "../../modules/write";
import Modal from "../../components/common/Modal";

const FooterContainer = ({ history }) => {
  const { title, contents, tags, postError, post, updatePostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      contents: write.contents,
      tags: write.tags,
      postError: write.write.postError,
      post: write.write.post,
      updatePostId: write.updatePostId
    })
  );
  const dispatch = useDispatch();

  const [ toggle, setToggle] = useState(false);
  const [ message, setMessage] = useState('');
  
  const onSubmit = useCallback( e => {
    e.preventDefault();
    if (updatePostId) {
      dispatch(updatePost({ title, contents, tags, id: updatePostId }));
      return;
    } else {
      if (!title) {
        setToggle(true);
        setMessage('제목을 입력해주세요');
        return;
      }
      if(!contents){
        setToggle(true);
        setMessage('내용을 입력해주세요');
        return;
      }
      dispatch(writePost({ title, contents, tags }));
    }
  },[dispatch]);

  const onToggle =useCallback( () => {
    setToggle(false);
  },[toggle]);
  const onCancel = useCallback(e => {
    e.preventDefault();
    history.goBack();
  },[history]);

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.name}/${_id}`);
    }
  }, [post, history, postError, dispatch]);

  return (
    <Footer
      onSubmit={onSubmit}
      onCancel={onCancel}
      postError={postError}
      isEdit={updatePostId}
      modal={<Modal toggle={toggle} onToggle={onToggle} message={message} />}
    />
  );
};

export default withRouter(React.memo(FooterContainer));
