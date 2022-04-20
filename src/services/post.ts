import { request } from "umi";

export const getPost = (id: number) => request(`/posts/${id}`);
