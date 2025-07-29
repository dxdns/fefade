export default function dataIconUrlUtil(icon: string | any): string {
	const prefix = "data:image/svg+xml;utf8,"

	if (typeof icon === "string") {
		return `${prefix}${encodeURIComponent(icon)}`
	}

	const serializer = new XMLSerializer()
	const encoded = encodeURIComponent(serializer.serializeToString(icon))
		.replace(/'/g, "%27")
		.replace(/"/g, "%22")
	return `${prefix}${encoded}`
}
