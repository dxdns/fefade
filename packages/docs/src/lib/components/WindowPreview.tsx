import { Window } from "@feflow-ui/react"

export default function () {
	const variants = ["contained", "outlined"]

	return (
		<>
			{variants.map((variant) => (
				<Window key={variant} variant={variant as any}>
					<h2>{variant}</h2>
				</Window>
			))}
			<Window animatedBorder>
				<h2>animated border</h2>
			</Window>
		</>
	)
}
