import { Card } from "@feflow-ui/react"

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
				<h2>animated border</h2>
			</Card>

			<Card
				animatedBorder={{
					width: "2px",
					primaryColor: "#FF007F",
					secondaryColor: "#8000FF"
				}}
			>
				<h2>animated border - custom colors</h2>
			</Card>

			<Card
				animatedBorder={{
					stopOnHover: true,
					width: "2px",
					primaryColor: "#39FF14",
					secondaryColor: "#00FFFF"
				}}
			>
				<h2>animated border - stop on hover</h2>
			</Card>
		</>
	)
}
