import { defineConfig } from "umi";
import routes from "./routes";

const { API_URL } = process.env;

export default defineConfig({
  hash: true,
  antd: false,
  dva: {
    hmr: true,
  },
  locale: {
    default: "vi-VN",
    title: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  targets: {
    ie: 11,
  },
  routes,
  fastRefresh: {},
  title: false,
  metas: [
    {
      name: "keywords",
      content: "umi, umijs",
    },
    {
      name: "description",
      content: "🍙 插件化的企业级前端应用框架。",
    },
  ],
  nodeModulesTransform: { type: "none" },
  define: {
    API_URL,
  },
  proxy: {
    "/api": {
      target: API_URL,
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
});
