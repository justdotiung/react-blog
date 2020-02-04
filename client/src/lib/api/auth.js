import axios from "axios";

export const register = ({ name, password }) =>
  axios.post("/api/auth/register", { name, password });

export const login = ({ name, password }) =>
  axios.post("/api/auth/login", { name, password });

export const check = () => axios.get("/api/auth/check");

export const logout = () => axios.post("/api/auth/logout");