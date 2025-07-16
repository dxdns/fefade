import { Window } from "@dxdns/feflow-react"

export default function () {
	const variants = ["contained", "outlined"]

	return (
		<>
			{variants.map((variant) => (
				<Window key={variant} variant={variant as unknown}>
					<h2>{variant}</h2>
				</Window>
			))}
		</>
	)
}
