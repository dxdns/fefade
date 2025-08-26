import { Constants } from "@navnex-kit/core"
import { Tooltip } from "@navnex-kit/react"

export default function () {
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
			{Constants.positions.map((position) => (
				<Tooltip key={position} label={position} position={position}>
					<p>{position}</p>
				</Tooltip>
			))}
		</div>
	)
}
