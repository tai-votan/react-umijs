import type { RequestConfig } from "umi";
import { getDvaApp, isBrowser } from "umi";

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
      console.log(`Func: url, options - PARAMS: url, options`, {
        url,
        urls: url,
        options,
      });
      if (options.showLoading && isBrowser()) {
        // showLoading();
      }
      return {
        url,
        options,
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      console.log(`Func: response - PARAMS: response`, response);
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
