import { ColorPicker } from "@dxdns/feflow-react"
import { useState, type CSSProperties } from "react"

export default function () {
	const [color, setColor] = useState("#fde6b0")
	return (

		<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
			<ColorPicker
				value={color}
				onInput={(e) => {
					const input = e.currentTarget as HTMLInputElement
					setColor(input.value)
				}}
			/>
			<div style={{
				width: "38px",
				height: "38px",
				border: "1px solid var(--ff-border)",
				borderRadius: "0.25rem",
				background: "var(--color)",
				["--color"]: color,
			} as CSSProperties}></div>
			<span style={{ color }}>{color}</span>
		</div>
	)
}