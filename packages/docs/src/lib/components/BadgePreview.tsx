import { Badge } from "@feflow-ui/react"

export default function () {
	const variants = ["outlined", "contained"] as const
	const colors = ["error", "success", "warning", "info", "primary"] as const
	const sizes = ["xs", "sm", "md", "lg", "xl"] as const

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: "flex-end",
				gap: "1rem"
			}}
		>
			{colors.map((color) => (
				<Badge
					key={`color-${color}`}
					className={`bg-${color} text-on-${color}`}
					size="md"
				>
					{color}
				</Badge>
			))}

			{variants.map((variant) => (
				<Badge key={`variant-${variant}`} variant={variant} size="md">
					{variant}
				</Badge>
			))}

			{sizes.map((size) => (
				<Badge key={`size-${size}`} size={size} roundedFull>
					{size}
				</Badge>
			))}
		</div>
	)
}
