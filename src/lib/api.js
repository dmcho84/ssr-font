import axios from "axios";
import queryString from "query-string";

export const writePost = ({ title, body, tags }) =>
  axios.post("/api/posts", { title, body, tags });
export const getPostList = ({ tag, page }) =>
  axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);
