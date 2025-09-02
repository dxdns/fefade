import { Card } from "@dxdns-kit/react"
import { useState } from "react"

export default function () {
	const [borderWidth, setBorderWidth] = useState(1)
	const cardVariants = ["contained", "outlined"] as const

	function handleClick() {
		setBorderWidth((old) => (old += 4))
	}

	return (
		<>
			{cardVariants.map((variant) => (
				<Card key={variant} variant={variant}>
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
					width: `${borderWidth}px`,
					primaryColor: "#FF007F",
					secondaryColor: "#8000FF"
				}}
				style={{ cursor: "pointer", userSelect: "none" }}
				onClick={handleClick}
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
