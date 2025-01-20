import { sveltekit } from "@sveltejs/kit/vite";
import mdPlugin from "vite-plugin-markdown";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    mdPlugin.default({
      mode: ["html"],
    }),
  ],
});
