import { Avatar, Card, Status, Tooltip } from "@feflow-ui/react"

export default function () {
	const avatarOn = () => (
		<div
			style={{
				position: "relative",
				display: "inline-block"
			}}
		>
			<Avatar
				src="https://avatars.githubusercontent.com/u/26321303?v=4"
				textFallback="test"
				width="150px"
				height="150px"
			/>
			<Status
				color="green"
				size="24px"
				style={{
					position: "absolute",
					top: "0",
					right: "5px",
					border: `2px solid var(--ff-bg)`
				}}
			/>
		</div>
	)
	return (
		<>
			<Avatar textFallback="test" />
			<br />
			<Avatar
				src="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg"
				textFallback="test"
			/>
			<br />
			{avatarOn()}

			<Card
				className="rounded-full"
				style={{ width: "158px", height: "158px", padding: 0 }}
				animatedBorder={{
					width: "4px",
					primaryColor: "#FF007F",
					secondaryColor: "#8000FF"
				}}
			>
				{avatarOn()}
			</Card>

			<br />

			<Avatar.Group>
				{["a", "b", "c", "d"].map((value) => (
					<Avatar key={value} grouped textFallback={value} size="lg" />
				))}
			</Avatar.Group>

			<br />

			<Avatar.Group>
				{["a", "b", "c", "d"].map((value) => (
					<Tooltip key={value} label={value}>
						{value === "d" ? (
							<Avatar grouped size="lg" style={{ marginTop: "1.2rem" }}>
								<span>+99</span>
							</Avatar>
						) : (
							<Avatar
								grouped
								textFallback={value}
								size="lg"
								style={{ marginTop: "1.2rem" }}
							/>
						)}
					</Tooltip>
				))}
			</Avatar.Group>
		</>
	)
}
