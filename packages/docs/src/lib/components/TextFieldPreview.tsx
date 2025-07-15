import { TextField } from "@dxdns/feflow-react"

export default function () {
	const sizes = ["xs", "sm", "md", "lg", "xl"]
	const variants = ["contained", "text", "outlined"]

	return (
		<div style={{ maxWidth: "300px", margin: "0 auto" }}>
			{variants.map((variant, i) => {
				const size = sizes[i + 1] as any
				return (
					<div key={i}>
						<TextField
							label={`${variant} (${size})`}
							variant={variant as any}
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
