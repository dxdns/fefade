import * as esbuild from "esbuild"
import cssModulesPlugin from "esbuild-css-modules-plugin"

async function start() {
	const isWatch = process.argv.includes("--watch")

	const ctx = await esbuild.context({
		entryPoints: [
			"src/index.ts",
			"src/utils/index.ts",
			"src/types/index.ts",
			"src/actions/index.ts",
			"src/icons/index.ts",
			"src/styles/**/*.css"
		],
		bundle: true,
		outdir: "dist",
		format: "esm",
		logLevel: "info",
		minify: true,
		plugins: [
			cssModulesPlugin({
				outputCss: true,
				force: true,
				emitDeclarationFile: ".css.d.ts",
				localsConvention: "camelCaseOnly",
				namedExports: false,
				inject: false,
				pattern: "[local]"
			})
		],
		outbase: "src"
	})
	await ctx.rebuild()

	if (isWatch) {
		await ctx.watch()
	} else {
		await ctx.dispose()
	}
}

start()
