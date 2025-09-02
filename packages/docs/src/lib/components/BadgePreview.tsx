import { Constants } from "@dxdns-kit/core"
import { Badge } from "@dxdns-kit/react"

export default function () {
	const badgeVariants = ["outlined", "contained"] as const

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "flex-end",
				gap: "1rem"
			}}
		>
			{Constants.statusColors.map((color) => (
				<Badge
					key={`color-${color}`}
					className={`bg-${color} text-on-${color}`}
					size="md"
				>
					{color}
				</Badge>
			))}

			{badgeVariants.map((variant) => (
				<Badge key={`variant-${variant}`} variant={variant} size="md">
					{variant}
				</Badge>
			))}

			{Constants.sizes.map((size) => (
				<Badge key={`size-${size}`} size={size} roundedFull>
					{size}
				</Badge>
			))}
		</div>
	)
}
