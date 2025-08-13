export default function cssToObjectUtil(s: string) {
	return Object.fromEntries(
		s
			.split(";")
			.filter(Boolean)
			.map((item) => {
				const [key, value] = item.split(":")
				const camelKey = key
					.trim()
					.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
				return [camelKey, value.trim()]
			})
	)
}
