import axios from "axios";
import qs from "qs";

export const write = ({ title, contents, tags }) =>
  axios.post("/api/posts", { title, contents, tags });

export const getList = ({ page, name }) => {
  const queryString = qs.stringify({
    page,
    name
  });
  return axios.get(`/api/posts?${queryString}`);
};
//export const getList = ({name, page }) => axios.get(`/api/posts?name=${name}&page=${page}`);

export const update = ({ id, title, contents, tags }) =>
  axios.patch(`/api/posts/${id}`, { title, contents, tags });

export const getPostById = id => axios.get(`/api/posts/${id}`);

export const remove = id => axios.delete(`/api/posts/${id}`);
