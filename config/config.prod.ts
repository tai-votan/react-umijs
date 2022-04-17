import { defineConfig } from "umi";

export default defineConfig({
  ssr: {
    forceInitial: true,
    mode: "string",
  },
});
