import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig(() => {
  return {
    base: "/", // Changed base path to root (/) for production deployment
    plugins: [react()],
  };
});
