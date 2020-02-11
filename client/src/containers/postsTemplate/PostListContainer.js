import React, { useEffect } from "react";
import PostList from "../../components/postTemplate/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../modules/posts";
import { withRouter } from "react-router-dom";
import qs from "qs";

const PostListContainer = ({ location }) => {
  
  const { posts, loading, lastPage } = useSelector(({ posts, loading,  }) => ({
    posts: posts.posts,
    loading: loading.loading,
    lastPage : posts.lastPage
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const { page = 1, name } = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    dispatch(getList({ page, name }));
  }, [dispatch, location.search, lastPage ]);
  
  console.log(location);
  return <PostList posts={posts} loading={loading} lastPage={lastPage} />;
};

export default withRouter(PostListContainer);
