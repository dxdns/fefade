import { Window } from "@dxdns-kit/react"

export default function () {
	const windowVariants = ["contained", "outlined"] as const

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			{windowVariants.map((variant) => (
				<Window key={variant} variant={variant}>
					<h2>{variant}</h2>
				</Window>
			))}
			<Window animatedBorder>
				<h2>animated border</h2>
			</Window>
		</div>
	)
}
