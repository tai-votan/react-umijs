import type { RequestConfig } from "umi";
import { getDvaApp } from "umi";

const timeout = 30 * 1000;
// Config umi request
export const request: RequestConfig = {
  timeout,
  timeoutMessage: `RequestError: timeout of ${timeout}ms exceeded`,
  errorHandler: (error) => {
    return error.data;
  },
  redirect: "manual",
  requestInterceptors: [
    (url, options) => {
      const isDev = process.env.NODE_ENV === "development";
      console.log(`Func: isDev - PARAMS: isDev`, isDev);
      // @ts-ignore:next-line
      const apiURL = isDev ? url : API_URL + url;
      return {
        url: apiURL,
        options,
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      if (response.status === 404) {
        // logger.error('API error:', response);
        // helper.handle404Error();
      }

      if (response.status === 401) {
        const dispatch = getDvaApp()._store.dispatch;
        dispatch({
          type: "mainState/updateState",
          payload: {
            isLoggedIn: false,
          },
        });
      }
      return response;
    },
  ],
};
