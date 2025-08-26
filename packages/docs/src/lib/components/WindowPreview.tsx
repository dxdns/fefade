import { Window } from "@navnex-kit/react"

export default function () {
	const windowVariants = ["contained", "outlined"] as const

	return (
		<>
			{windowVariants.map((variant) => (
				<Window key={variant} variant={variant}>
					<h2>{variant}</h2>
				</Window>
			))}
			<Window animatedBorder>
				<h2>animated border</h2>
			</Window>
		</>
	)
}
