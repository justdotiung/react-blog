import React, { useEffect } from "react";
import Post from "../../components/postTemplate/Post";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../modules/post";

const PostContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    postError: post.postError,
    loading: loading.loading
  }));
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return <Post post={post} loading={loading} postError={postError}/>;
};

export default PostContainer;
