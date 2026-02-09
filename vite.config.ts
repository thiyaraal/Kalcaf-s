import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/kalcaf": {
        target: "http://172.16.25.62:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
