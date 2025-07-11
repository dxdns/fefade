import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import dts from "vite-plugin-dts"
import { glob } from "glob"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ }) => {
	const LIB_DIR = "src/lib"

	const defaultConfig = {
		plugins: [react()],
		resolve: {
			alias: {
				"@": path.resolve("./src/lib"),
				"@dxdns/feflow-core": path.resolve("core")
			}
		}
	}

	if (!(process.env.NODE_ENV === "development")) {
		return {
			...defaultConfig.resolve,
			plugins: [
				...defaultConfig.plugins,
				libInjectCss(),
				dts({ include: [LIB_DIR], insertTypesEntry: true, outDir: "dist" })
			],
			build: {
				copyPublicDir: false,
				cssCodeSplit: true,
				lib: {
					entry: path.resolve(__dirname, `${LIB_DIR}/index.ts`),
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
								path.relative(
									LIB_DIR,
									file.slice(0, file.length - path.extname(file).length)
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
		}
	}

	return defaultConfig
})
