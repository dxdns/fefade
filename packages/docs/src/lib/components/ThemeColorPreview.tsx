import { Badge, Button, Card, Grid, Provider, themeConfig } from "@fefade/react"

function ThemeColorPreview() {
	const theme = themeConfig()

	return (
		<>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1rem",
					alignItems: "center",
					justifyContent: "flex-end"
				}}
			>
				<Badge variant="outlined">
					<h4>{theme.mode}</h4>
				</Badge>
				<Button variant="outlined" onClick={theme.toggle}>
					toggle theme
				</Button>
			</div>

			<Grid style={{ gridAutoRows: "60px" }}>
				{Object.entries(theme.colors).map(([k, v]) => (
					<Card key={k} style={{ background: v, margin: 0 }}>
						<Badge
							style={{
								position: "absolute",
								top: 0,
								right: 0,
								margin: 0,
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0
							}}
						>
							{k}
						</Badge>
						<Badge size="lg">{v}</Badge>
					</Card>
				))}
			</Grid>
		</>
	)
}

export default function () {
	return (
		<Provider>
			<ThemeColorPreview />
		</Provider>
	)
}
