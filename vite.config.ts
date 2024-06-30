import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        load: "./src/load.ts",
        main: "./src/main.ts",
        register: "./src/register.ts",
      },
      fileName: (_, entry) => entry,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      output: {
        exports: "named",
        preserveModules: true,
      },
    },
    ssr: true,
  },
  plugins: [
    dts({
      compilerOptions: {
        emitDeclarationOnly: true,
        incremental: false,
      },
      include: ["src/**", "typings/**"],
    }),
  ],
});
