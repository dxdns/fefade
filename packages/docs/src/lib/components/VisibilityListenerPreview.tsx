import { useState } from "react"
import { VisibilityListener } from "@dxdns-kit/react"

export default function () {
	const [isVisible, setIsVisible] = useState(false)
	const n = 50

	return (
		<div>
			<h2>
				{n} is visible:{" "}
				<span style={{ color: "aqua" }}>{isVisible ? "Yes" : "No"}</span>
			</h2>
			<div
				style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc" }}
			>
				{Array.from({ length: 100 }, (_, i) => (
					<div key={i}>
						{i === n ? (
							<VisibilityListener
								callback={(isVisible) => {
									setIsVisible(isVisible)
								}}
							>
								<p style={{ color: "aqua" }}>{i} visible</p>
							</VisibilityListener>
						) : (
							<p>{i}</p>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
