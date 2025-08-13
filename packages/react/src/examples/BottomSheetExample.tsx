import { BottomSheet, Button } from "@dxdns/feflow-react"
import { useEffect, useState } from "react"

export default function () {
	const [isOpen, setIsOpen] = useState(false)
	const [variant, setVariant] = useState("")

	function handleOpen(s: string) {
		setVariant(s)
		setIsOpen((old) => !old)
		document.body.style.overflow = "hidden"
	}

	function handleClose() {
		setIsOpen(false)
		document.body.style.overflow = "auto"
	}

	useEffect(() => {
		setVariant("text")
		setIsOpen(true)
	}, [])

	return (
		<>
			<BottomSheet.Overlay
				isOpen={isOpen}
				onClick={handleClose}
				style={{ zIndex: 998 }}
			/>
			<BottomSheet
				isOpen={isOpen}
				handleClose={handleClose}
				style={{ minHeight: "50vh", height: "100vh" }}
			>
				<BottomSheet.DragButton
					variant={variant as any}
					style={{ paddingTop: "3rem" }}
				/>
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
