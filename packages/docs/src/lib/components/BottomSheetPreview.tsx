import { BottomSheet, Button } from "@feflow-ui/react"
import { useEffect, useState } from "react"

export default function () {
	const [isOpen, setIsOpen] = useState(false)
	const [variant, setVariant] = useState("")

	function handleOpen(s: string) {
		setVariant(s)
		setIsOpen((old) => !old)
	}

	function handleClose() {
		setIsOpen(false)
	}

	useEffect(() => {
		handleOpen("text")
	}, [])

	return (
		<>
			<BottomSheet.Overlay
				isOpen={isOpen}
				onClick={handleClose}
				style={{ zIndex: 998 }}
			/>
			<BottomSheet isOpen={isOpen} handleClose={handleClose}>
				<BottomSheet.DragButton variant={variant as any} />
				<BottomSheet.Content>
					<h1>test</h1>
				</BottomSheet.Content>
			</BottomSheet>

			<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
				{["text", "contained", "outlined"].map((variant, i) => (
					<Button
						key={`${variant}-${i}`}
						onClick={() => {
							handleOpen(variant)
						}}
					>
						{variant}
					</Button>
				))}
			</div>
		</>
	)
}
