import { Card } from "@dxdns/feflow-react"

export default function () {
	const variants = ["contained", "outlined"]

	return (
		<>
			{variants.map((variant) => (
				<Card key={variant} variant={variant as any}>
					<h2>{variant}</h2>
				</Card>
			))}
			<Card glowOnHover>
				<h2>glow on hover</h2>
			</Card>

			<Card animatedBorder>
				<h1>animated border</h1>
			</Card>
		</>
	)
}
