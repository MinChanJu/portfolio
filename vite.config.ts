import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "/portfolio",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("swiper")) return "swiper";
          if (id.includes("highlight")) return "highlight-vendor";
          if (id.includes("react")) return "react-vendor";

          return "vendor";
        },
      },
    },
  },
});
