import React, { useEffect } from "react";
import Post from "../../components/postTemplate/Post";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPost, initPost } from "../../modules/post";
import PostActionButton from "../../components/postTemplate/PostActionButton";
import {writeUpdatePost} from "../../modules/write";


const PostContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { post, postError, loading, user } = useSelector(({ post, loading, check }) => ({
    post: post.post,
    postError: post.postError,
    loading: loading.loading,
    user: check.user
  }));

  const onEdit = () => {
    dispatch(writeUpdatePost(post));
    history.push("/writer");
  }

  useEffect(() => {
    dispatch(getPost(id));
    return () => dispatch(initPost());
  }, [dispatch, id]);

  return <Post post={post} loading={loading} postError={postError} userInfo={user} actionButtons={<PostActionButton onEdit={onEdit}/>}/>;
};

export default PostContainer;
