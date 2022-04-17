import { defineConfig } from "umi";
import routes from "./routes";

const { API_URL, NODE_ENV } = process.env;

export default defineConfig({
  hash: true,
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
  title: "React, umijs, tailwindcss, antd",
  metas: [
    {
      name: "theme-color",
      content: "#FFBA00",
    },
    {
      name: "title",
      content: "React, umijs, tailwindcss, antd",
    },
    {
      name: "keywords",
      content: "umi, umijs, react, tailwindcss, antd",
    },
    {
      name: "description",
      content: "React, umijs, tailwindcss, antd template",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "React, umijs, tailwindcss, antd",
    },
    {
      property: "og:image:secure_url",
      content:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1644938661983/J7uY6EVhp.png?auto=compress",
    },
    {
      property: "og:description",
      content: "React, umijs, tailwindcss, antd template",
    },
    {
      property: "og:url",
      href: "https://react-umijs.vercel.app",
    },
    {
      property: "og:site_name",
      href: "Hashnode",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://react-umijs.vercel.app",
    },
  ],
  nodeModulesTransform: { type: "none" },
  define: {
    API_URL,
    NODE_ENV,
  },
  favicon: "/favicon.png",
});
