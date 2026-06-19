// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: {
    historyApiFallback: true, // ✅ Yeh line add karo
  },

  preview: {
    port: 4173,
  },
  base: "/",
});
