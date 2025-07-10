import fs from "fs/promises"
import path from "path"

const stylesDir = path.resolve("./dist/styles")

async function fixExports() {
	const files = await fs.readdir(stylesDir)
	const cssTypeFiles = files.filter((f) => f.endsWith(".css.d.ts"))

	for (const file of cssTypeFiles) {
		const filePath = path.join(stylesDir, file)
		const content = await fs.readFile(filePath, "utf-8")

		if (content.includes("export = styles;")) {
			const fixedContent = content.replace(
				"export = styles;",
				"export default styles;"
			)
			await fs.writeFile(filePath, fixedContent)
		}
	}
}

fixExports()
