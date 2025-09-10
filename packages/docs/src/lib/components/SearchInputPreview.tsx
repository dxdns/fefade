import { Constants } from "@dxdns-kit/core"
import { SearchInput } from "@dxdns-kit/react"

export default function () {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			{Constants.variants.map((variant) => (
				<SearchInput key={variant} placeholder={variant} variant={variant} />
			))}
		</div>
	)
}
