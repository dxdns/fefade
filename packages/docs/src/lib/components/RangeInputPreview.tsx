import { Constants } from "@dxdns-kit/core"
import { Badge, RangeInput } from "@dxdns-kit/react"
import { useState } from "react"

export default function () {
	const [inputValue, setInputValue] = useState(0)

	const homeIcon = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="red">
	<path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
	</svg>
	`

	return (
		<div style={{ maxWidth: "300px", margin: "0 auto", lineHeight: 3 }}>
			<RangeInput />
			<RangeInput icon={homeIcon} />

			<div style={{ display: "flex", alignItems: "center", gap: 1 }}>
				<span>bindable</span>
				<RangeInput
					value={inputValue}
					step="10"
					onChange={(value) => {
						setInputValue(value)
					}}
				/>
				<Badge roundedFull size="lg">
					<span>{inputValue}</span>
				</Badge>
			</div>
			<RangeInput value={inputValue} />

			{Constants.sizes.map((size) => (
				<RangeInput key={size} size={size} />
			))}
		</div>
	)
}
