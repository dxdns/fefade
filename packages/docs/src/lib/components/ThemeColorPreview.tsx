import {
	Badge,
	Button,
	Card,
	FeflowProvider,
	themeConfig
} from "@dxdns/feflow-react"

function ThemeColorPreview() {
	const theme = themeConfig()

	return (
		<>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1rem",
					alignItems: "center"
				}}
			>
				<h2>{theme.mode}</h2>
				<Button variant="outlined" onClick={theme.toggle}>
					toggle theme
				</Button>
			</div>
			<Card
				style={{
					background: theme.mode === "dark" ? "green" : "red"
				}}
			>
				<ul style={{ lineHeight: 2 }}>
					{Object.keys(theme.colors).map((t) => {
						const color = theme.colors[t as keyof typeof theme.colors]
						return (
							<li key={t}>
								<span
									style={{
										color: "aqua"
									}}
								>
									{t}
								</span>
								:
								<Badge
									roundedFull
									style={{
										background: color
									}}
									size="sm"
								></Badge>
							</li>
						)
					})}
				</ul>
			</Card>
		</>
	)
}

export default function () {
	return (
		<FeflowProvider>
			<ThemeColorPreview />
		</FeflowProvider>
	)
}
