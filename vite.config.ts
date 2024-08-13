/// <reference types="vitest" />
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/* https://vitejs.dev/config/ */
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    lib: {
      name: 'mango-ds',
      fileName: 'mango-ds',
      entry: resolve(__dirname, 'lib/main.ts'),
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
      external: ["react", "react-dom", "react/jsx-runtime"],
    }
  },
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts",
  }
})
