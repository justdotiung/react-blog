import React, { useEffect } from "react";
import Footer from "../../components/write/Footer";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { writePost } from "../../modules/write";
import {  toggleChange } from "../../modules/modal";

const FooterContainer = ({ history }) => {
  const { title, contents, tags, postError, post } = useSelector(
    ({ write }) => ({
      title: write.title,
      contents: write.contents,
      tags: write.tags,
      postError: write.write.postError,
      post: write.write.post,
    })
  );
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    console.log(!title);
    dispatch(writePost({ title, contents, tags }));
  };

  const onCancel = e => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.name}/${_id}`);
    }
    if (postError) {
      dispatch(toggleChange());
    }
  }, [post, history, postError, dispatch]);

  return (
    <Footer onSubmit={onSubmit} onCancel={onCancel} postError={postError} />
  );
};

export default withRouter(FooterContainer);
