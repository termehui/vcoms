import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts({ rollupTypes: true }), vue()],
    resolve: {
        preserveSymlinks: true,
    },
    build: {
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: "vComs",
            fileName: (format) => `vcoms.${format}.js`,
        },
        rollupOptions: {
            external: [
                "vue",
                "animejs",
                "@termehui/date-utils",
                "@termehui/utils",
                "@termehui/vmask",
            ],
        },
    },
});
