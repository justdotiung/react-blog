import axios from "axios";

export const write = ({ title, contents, tags }) =>
  axios.post("/api/posts", { title, contents, tags });

export const getList = () => axios.get("/api/posts");
