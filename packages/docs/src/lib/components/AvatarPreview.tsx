import { Constants } from "@dxdns-kit/core"
import { Avatar, Card, Status, Tooltip } from "@dxdns-kit/react"

export default function () {
	const avatarOn = () => (
		<div
			style={{
				position: "relative",
				display: "inline-block",
				margin: 0,
				padding: 0
			}}
		>
			<Avatar
				src="https://avatars.githubusercontent.com/u/26321303?v=4"
				textFallback="test"
				width="6rem"
				height="6rem"
			/>
			<Status
				color="green"
				size="20px"
				style={{
					position: "absolute",
					top: "4px",
					right: "5px",
					border: `2px solid ${Constants.themeColorVar.bg}`,
					margin: 0
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
				style={{
					padding: 0,
					width: "min-content",
					height: "min-content"
				}}
				animatedBorder={{
					width: "4px",
					primaryColor: "#FF007F",
					secondaryColor: "#8000FF"
				}}
			>
				<Avatar
					src="https://avatars.githubusercontent.com/u/26321303?v=4"
					textFallback="test"
					width="6rem"
					height="6rem"
				/>
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
