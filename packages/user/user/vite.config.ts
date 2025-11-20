import { defineConfig, mergeConfig } from "vite";
import { sharedConfig } from "../../config/vite-config";
import path from "path";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    server: {
      port: 5175, // 앱별 포트 오버라이드
    },
    plugins: [],
    resolve: {
    alias: {
      '@core': path.resolve(__dirname, '../../core')
    }
  }
  })
);

