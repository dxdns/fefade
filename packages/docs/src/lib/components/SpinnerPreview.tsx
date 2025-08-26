import { Constants } from "@navnex-kit/core"
import { Spinner } from "@navnex-kit/react"

export default function () {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "baseline",
				gap: "1.5rem"
			}}
		>
			{Constants.statusColors.map((color) => (
				<div
					key={`color-${color}`}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Spinner className={`text-on-${color}`} size="md" />
					<span>{color}</span>
				</div>
			))}

			{Constants.sizes.map((size) => (
				<div
					key={`size-${size}`}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Spinner size={size} color="primary" />
					<span>{size}</span>
				</div>
			))}
		</div>
	)
}
