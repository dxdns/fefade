import { Constants } from "@fefade/core"
import { Alert } from "@fefade/react"

export default function () {
	return (
		<>
			{Constants.statusColors.map((color) => (
				<div key={color}>
					<Alert color={color}>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<strong>{color}</strong>
							<small>description</small>
						</div>
					</Alert>
				</div>
			))}
		</>
	)
}
