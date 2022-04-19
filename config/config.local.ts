import { defineConfig } from "umi";

const { API_URL } = process.env;

export default defineConfig({
  proxy: {
    "/api": {
      target: API_URL,
      changeOrigin: true,
    },
  },
});
