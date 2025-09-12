import { useState } from "react"
import { Constants } from "@dxdns-kit/core"
import { NumberInput } from "@dxdns-kit/react"

export default function () {
	const [quantity, setQuantity] = useState(0)

	return (
		<div style={{ maxWidth: "150px", margin: "0 auto" }}>
			{Constants.variants.map((variant, i) => (
				<NumberInput
					key={variant}
					id={`${variant}-${i}`}
					variant={variant}
					value={quantity}
					onChange={(val: number) => setQuantity(val)}
					min={0}
					max={10}
				/>
			))}
		</div>
	)
}
