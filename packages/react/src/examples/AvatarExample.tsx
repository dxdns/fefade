import { Avatar } from "@/index"

export default function () {
	return (
		<Avatar.Group>
			{["a", "b", "c", "d"].map((value) => (
				<Avatar key={value} textFallback={value} size="lg" />
			))}
		</Avatar.Group>
	)
}
