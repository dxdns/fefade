import simpleGit from "simple-git"
import fs from "fs-extra"
import path from "path"
import inquirer from "inquirer"
import os from "os"

export default async function add(componentName: string) {
	const defaultDir = path.join("src", "lib", "components", componentName)

	const { targetDir } = await inquirer.prompt([
		{
			type: "input",
			name: "targetDir",
			message: "Where do you want to save the component?",
			default: defaultDir
		}
	])

	const resolvedTarget = path.resolve(process.cwd(), targetDir)
	const tempDir = path.join(
		os.tmpdir(),
		`feflow-${componentName}-${Date.now()}`
	)

	const git = simpleGit()

	try {
		console.log(`📥 Adding "${componentName}" component...`)

		await git.clone("https://github.com/dxdns/feflow.git", tempDir, [
			"--depth=1"
		])

		const sourcePath = path.join(
			tempDir,
			"packages",
			"feflow",
			"src",
			"lib",
			"components",
			componentName
		)

		if (!fs.existsSync(sourcePath)) {
			throw new Error(
				`Component "${componentName}" not found in the repository.`
			)
		}

		await fs.ensureDir(path.dirname(resolvedTarget))
		await fs.copy(sourcePath, resolvedTarget)

		console.log(`✅ Component "${componentName}" added to ${resolvedTarget}`)
	} catch (error) {
		console.error("❌ Failed to add component:", error)
	} finally {
		await fs.remove(tempDir)
	}
}
