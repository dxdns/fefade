import { Constants } from "@fefade/core"
import { SearchInput } from "@fefade/react"

export default function () {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				maxWidth: "300px",
				margin: "1rem auto"
			}}
		>
			{Constants.variants.map((variant) => (
				<SearchInput key={variant} placeholder={variant} variant={variant} />
			))}
		</div>
	)
}
