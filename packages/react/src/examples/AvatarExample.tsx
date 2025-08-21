import { Avatar, Tooltip } from "@/index"

export default function () {
	return (
		<Avatar.Group>
			{["a", "b", "c", "d"].map((value) => (
				<Tooltip key={value} label={value}>
					<Avatar
						textFallback={value}
						size="lg"
						style={{ marginTop: "1.2rem" }}
					/>
				</Tooltip>
			))}
		</Avatar.Group>
	)
}
