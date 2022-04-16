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
  // title: "React with umijs",
  metas: [
    {
      name: "theme-color",
      content: "#FFBA00",
    },
    {
      property: "og:url",
      content:
        "https://xe.chotot.com/mua-ban-oto-quan-ha-dong-ha-noi/87663971.htm",
    },
    {
      property: "og:title",
      content: "og: Mercedes_C200 model 2017 - 87663971",
    },
    {
      property: "og:image",
      content: "http://localhost:8888",
    },
    {
      name: "title",
      content: "title Mercedes_C200 model 2017 - 87663971",
    },
    {
      name: "keywords",
      content: "umi, umijs",
    },
    {
      name: "description",
      content:
        "Cần bán gấp Chiếc xe Mercedes C200 model 2017  Màu trắng nội thất đen  Đã đi 40.000 km  Chính chủ sử dụng giữ gìn Full lịch sử bảo dưỡng tại hãng  Đã độ vành c3 - 87663971",
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
    },
  },
  favicon: "/favicon.ico",
});
