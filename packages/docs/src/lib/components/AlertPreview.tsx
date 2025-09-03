import { Constants } from "@dxdns-kit/core"
import { Alert } from "@dxdns-kit/react"

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
