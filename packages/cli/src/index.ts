#!/usr/bin/env node
import banner from "./banner.js"
import init from "./init.js"
import start from "./start.js"
import add from "./add.js"

banner()

const args = process.argv.slice(2)

const command = args[0]

if (command === "init") {
	await init()
} else if (command === "start") {
	const projectName = args[1]
	start(projectName)
} else if (command === "add") {
	const componentName = args[1]

	if (!componentName) {
		console.error(
			"❌ You must specify a component name. Example: feflow add button"
		)
		process.exit(1)
	}

	add(componentName)
}
