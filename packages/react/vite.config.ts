import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { dirname, resolve, relative, extname } from "path"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import dts from "vite-plugin-dts"
import { glob } from "glob"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const LIB_DIR = "src/lib"
const isDev = process.env.NODE_ENV === "development"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, LIB_DIR)
		}
	},
	...(isDev
		? {}
		: {
				plugins: [
					react(),
					libInjectCss(),
					dts({
						include: [LIB_DIR],
						insertTypesEntry: true,
						outDir: "dist"
					})
				],
				build: {
					copyPublicDir: false,
					cssCodeSplit: true,
					lib: {
						entry: resolve(__dirname, `${LIB_DIR}/index.ts`),
						formats: ["es"]
					},
					rollupOptions: {
						external: ["react", "react/jsx-runtime"],
						input: Object.fromEntries(
							glob
								.sync(`${LIB_DIR}/**/*.{ts,tsx}`, {
									ignore: [`${LIB_DIR}/**/*.d.ts`]
								})
								.map((file) => [
									relative(
										LIB_DIR,
										file.slice(0, file.length - extname(file).length)
									),
									fileURLToPath(new URL(file, import.meta.url))
								])
						),
						output: {
							assetFileNames: "assets/[name][extname]",
							entryFileNames: "[name].js"
						}
					}
				}
			})
})
