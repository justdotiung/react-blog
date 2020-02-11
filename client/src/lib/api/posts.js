import axios from "axios";
import qs from 'qs';

export const write = ({ title, contents, tags }) =>
  axios.post("/api/posts", { title, contents, tags });

export const getList = ({ page, name}) => {
  const queryString = qs.stringify({
    page,
    name
  });
  return axios.get(`/api/posts?${queryString}`);
}
//export const getList = ({name, page }) => axios.get(`/api/posts?name=${name}&page=${page}`);

export const getPostById = id => axios.get(`/api/posts/${id}`);