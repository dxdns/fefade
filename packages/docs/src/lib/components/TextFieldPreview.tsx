import { Constants } from "@fefade/core"
import { TextField } from "@fefade/react"

export default function () {
	return (
		<div
			style={{
				maxWidth: "300px",
				margin: "0 auto"
			}}
		>
			{Constants.variants.map((variant, i) => {
				const size = Constants.sizes[i + 1]
				return (
					<div key={i}>
						<TextField
							label={`${variant} (${size})`}
							variant={variant}
							size={size}
						/>
						<br />
						<br />
					</div>
				)
			})}
		</div>
	)
}
