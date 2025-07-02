import prompts from "prompts"
import { execSync } from "child_process"
import path from "path"
import fs from "fs"

export default async function init() {
	const response = await prompts({
		type: "text",
		name: "projectName",
		message: "What is your project name?",
		validate: (name: string) =>
			name.length === 0 ? "Project name cannot be empty" : true
	})

	if (!response.projectName) {
		console.log("Operation cancelled.")
		process.exit(0)
	}

	const projectName = response.projectName
	const projectPath = path.resolve(process.cwd(), projectName)

	if (fs.existsSync(projectPath)) {
		console.error(
			`❌ Directory "${projectName}" already exists. Please choose a different name or remove the directory.`
		)
		process.exit(1)
	}

	try {
		console.log(`🚀 Creating Svelte project in "${projectName}"...`)
		execSync(`npx sv create ${projectName} --template minimal`, {
			stdio: "inherit"
		})

		console.log(`📦 Installing @dxdns/feflow in the project...`)
		execSync(`npm install @dxdns/feflow`, {
			stdio: "inherit",
			cwd: projectPath
		})

		console.log(`✅ Project created successfully!`)
		console.log(`Go to the folder: cd ${projectName} and start coding.`)
	} catch (error) {
		console.error("Error while creating the project:", error)
		process.exit(1)
	}
}
