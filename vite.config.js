import path from "path";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [ViteEjsPlugin()],
};
