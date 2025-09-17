import { Tooltip } from "@fefade/react"

export default function () {
	const positions = ["top", "bottom", "left", "right"] as const

	return (
		<div
			style={{
				maxWidth: "300px",
				margin: "5rem auto",
				display: "flex",
				flexDirection: "column",
				gap: "1rem"
			}}
		>
			{positions.map((position) => (
				<Tooltip key={position} label={position} position={position}>
					<p>{position}</p>
				</Tooltip>
			))}
		</div>
	)
}
