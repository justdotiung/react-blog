import React, { useEffect } from "react";
import Post from "../../components/postTemplate/Post";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPost, initPost } from "../../modules/post";
import PostActionButton from "../../components/postTemplate/PostActionButton";
import { writeUpdatePost } from "../../modules/write";
import { remove } from "../../lib/api/posts";

const PostContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { post, postError, loading, user } = useSelector(
    ({ post, loading, check }) => ({
      post: post.post,
      postError: post.postError,
      loading: loading.loading,
      user: check.user
    })
  );

  const onEdit = () => {
    dispatch(writeUpdatePost(post));
    history.push("/writer");
  };

  const onDelete = () => {
    remove(id); //따로보여줄것 없으니 액션과 사가를 생략가능 바로 삭제 
    history.push("/");
  };
  useEffect(() => {
    dispatch(getPost(id));
    return () => dispatch(initPost());
  }, [dispatch, id]);

  return (
    <Post
      post={post}
      loading={loading}
      postError={postError}
      userInfo={user}
      actionButtons={<PostActionButton onEdit={onEdit} onDelete={onDelete} />}
    />
  );
};

export default PostContainer;
