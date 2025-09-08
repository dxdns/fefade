import { useMediaQuery } from "@/index"

export default function () {
	const isSm = useMediaQuery("max-width", "sm")
	const isMd = useMediaQuery("max-width", "md")
	const isCustom = useMediaQuery("max-width", "800px")

	return (
		<>
			<h4>sm (425px): {isSm}</h4>
			<h4>md (768px): {isMd}</h4>
			<h4>custom (800px): {isCustom}</h4>
		</>
	)
}
