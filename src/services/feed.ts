import { request } from "umi";

export const getFeeds = (params: { page: number }) =>
  request("/api/stories/personalized", {
    params,
  });
