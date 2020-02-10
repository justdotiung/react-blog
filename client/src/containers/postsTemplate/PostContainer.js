import React, { useEffect } from "react";
import Post from "../../components/postTemplate/Post";
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from "react-router-dom";
import { getPost } from "../../modules/post";

const PostContainer = ({ match }) => {
    const { id } = match.params;
 
  const dispatch = useDispatch();
  const { post, postError, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    postError: post.postError,
    loading: loading['post/GET_POST'],
  }));
  useEffect(() => {
   
    
  }, []);
  return <Post post={post} loading={loading} />;
};

export default withRouter(PostContainer);
