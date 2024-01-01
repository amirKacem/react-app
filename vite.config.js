import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../dist",
  },
  test: {
    root: "./tests/",
    environment: "happy-dom",
    setupFiles: ["./setupVitest.js"],
  },
});
