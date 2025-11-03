// packages/config/vite-config.ts
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// __dirname은 Node.js 내장 전역 변수지만, ESM에서는 직접 사용할 수 없을 수 있음.
// 이를 해결하려면 아래 주석 참고.

export const sharedConfig = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../packages/core"),
    },
  },
  server: {
    open: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss";`,
      },
    },
  },
  envPrefix: "VITE_",
});
