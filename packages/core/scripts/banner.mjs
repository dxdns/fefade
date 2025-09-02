import chalk from "chalk"

export default function banner() {
	const header = chalk.bold.white("dxdns-kit")
	const description = chalk.blue.underline("https://kit.dxdns.dev")

	const commands = []

	const cmdLines = commands.map(
		({ cmd, desc }) => `- ${chalk.cyan(cmd.padEnd(7))}  ${desc}`
	)

	const lines = [header, description, "", ...cmdLines]

	const maxLength = Math.max(
		...lines.map((line) => line.replace(/\x1b\[[0-9;]*m/g, "").length)
	)

	const border = "─".repeat(maxLength + 4)

	const box = [
		`┌${border}┐`,
		...lines.map((line) => {
			const visibleLength = line.replace(/\x1b\[[0-9;]*m/g, "").length
			return `│  ${line}${" ".repeat(maxLength - visibleLength)}  │`
		}),
		`└${border}┘`
	].join("\n")

	console.log(chalk.white(box))
}

banner()
