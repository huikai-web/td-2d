import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./demo/index.html",
  },
  source: {
    entry: {
      index: './demo/index.tsx',
    },
  },
});
