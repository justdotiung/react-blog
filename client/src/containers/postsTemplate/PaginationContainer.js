import React from "react";
import Pagination from "../../components/postTemplate/Pagination";
import { useSelector } from "react-redux";
import qs from "qs";
import {useLocation} from "react-router-dom";

const PaginationContainer = () => {
  const location = useLocation();
console.log(location);
  const { lastPage, loading, posts } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading.loading
  }));

  if (loading || !posts) return null;
  const { name, page = 1} = qs.parse(location.search, {
      ignoreQueryPrefix: true,
  })

  return <Pagination lastPage={lastPage}  name={name} page={parseInt(page, 10)} />;
};

export default React.memo(PaginationContainer);
