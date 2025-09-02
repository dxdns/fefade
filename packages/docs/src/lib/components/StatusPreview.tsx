import { Status } from "@dxdns-kit/react"
import { Constants } from "@dxdns-kit/core"

export default function () {
	return (
		<div
			style={{
				maxWidth: "300px",
				margin: "0 auto",
				lineHeight: 3
			}}
		>
			{Constants.statusVariants.map((variant, i) => (
				<div key={variant}>
					<Status
						variant={variant}
						color={
							i % 2
								? Constants.themeColorVar.success
								: Constants.themeColorVar.error
						}
					/>
					<br />
				</div>
			))}

			{["5rem", 100, "150px", 200].map((size, i) => (
				<div key={size}>
					<Status
						color={
							i % 2
								? Constants.themeColorVar.info
								: Constants.themeColorVar.warning
						}
						variant={i % 2 ? "bounce" : "none"}
						size={size}
					/>
					<br />
				</div>
			))}
		</div>
	)
}
