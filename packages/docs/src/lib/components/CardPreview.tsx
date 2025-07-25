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

			<Card
				animatedBorder={{
					width: "2px",
					primaryColor: "#FF007F",
					secondaryColor: "#8000FF"
				}}
			>
				<h1>animated border - custom colors</h1>
			</Card>
		</>
	)
}
