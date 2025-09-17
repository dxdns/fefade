import { Constants } from "@fefade/core"
import { Checkbox } from "@fefade/react"

export default function () {
	const colors = [...Constants.statusColors, "secondary"] as const

	return (
		<>
			<Checkbox label="checked" checked />
			<Checkbox label="disabled" disabled />
			<br />
			{colors.map((color) => (
				<Checkbox key={color} label={color} color={color} />
			))}
		</>
	)
}
