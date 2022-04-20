import { request } from "umi";

export const getPost = (id: number) => request(`/api/posts/${id}`);
