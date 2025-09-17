import { useState } from "react"
import { Constants } from "@fefade/core"
import { NumberInput } from "@/index.js"

export default function () {
	const [quantity, setQuantity] = useState(0)

	return (
		<div style={{ maxWidth: "500px", margin: "3rem auto", lineHeight: 3 }}>
			<br />
			<h2 className="muted">variants</h2>
			{Constants.variants.map((variant, i) => (
				<div key={variant}>
					<h2>{variant}</h2>
					<NumberInput
						id={`${variant}-${i}`}
						variant={variant}
						value={quantity}
						onChange={(val: number) => setQuantity(val)}
						min={0}
						max={10}
					/>
				</div>
			))}

			<br />
			<h2 className="muted">sizes</h2>
			{Constants.sizes.map((size, i) => (
				<div key={size}>
					<h2>{size}</h2>
					<NumberInput
						id={`${size}-${i}`}
						variant={i % 2 ? "outlined" : "contained"}
						size={size}
						value={quantity}
						onChange={(val: number) => setQuantity(val)}
						min={0}
						max={10}
					/>
				</div>
			))}
		</div>
	)
}
