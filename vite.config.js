import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/your-repo-name/", // Replace 'your-repo-name' with your actual GitHub repository name for GitHub Pages
  plugins: [react(), tailwindcss()],
});
