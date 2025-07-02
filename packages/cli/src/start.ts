import { spawn } from "child_process"
import path from "path"

export default function start(projectName?: string) {
	const cwd = projectName
		? path.resolve(process.cwd(), projectName)
		: process.cwd()

	const child = spawn("npm", ["run", "dev"], {
		cwd,
		stdio: "inherit",
		shell: true
	})

	child.on("exit", (code) => {
		console.log(`Dev server exited with code ${code}`)
	})
}
